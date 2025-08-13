import { renderNavbar, afterRenderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';
import { listenAuthState, logoutUser } from '../auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';

const db = getFirestore();

const profilePage = {
  render: async () => `
    ${renderNavbar()}
    <section class="myprofile-page">
      <div class="myprofile-wrapper">
        <aside class="myprofile-sidebar">
          <div class="myprofile-user">
            <div class="myprofile-avatar"></div>
            <h2 class="myprofile-name">Nama Pengguna</h2>
            <p class="myprofile-email">Email Pengguna</p>
            <hr class="myprofile-divider" />
          </div>
          <nav class="myprofile-menu">
            <a href="#/profile" class="myprofile-link active">Lihat Profil Saya</a>
            <a href="#/latihan-saya" class="myprofile-link">Latihan Saya</a>
            <a href="#/tersimpan" class="myprofile-link">Tersimpan</a>
            <a href="#" id="logoutBtn" class="myprofile-link">Keluar</a>
          </nav>
        </aside>

        <main class="myprofile-main">
          <div id="myprofile-content"></div>
        </main>
      </div>
    </section>
    ${renderFooter()}
  `,

  afterRender: async () => {
    afterRenderNavbar();

    const avatar = document.querySelector('.myprofile-avatar');
    const name = document.querySelector('.myprofile-name');
    const email = document.querySelector('.myprofile-email');
    const content = document.getElementById('myprofile-content');
    const logoutBtn = document.getElementById('logoutBtn');

    let isUnmounted = false;

    listenAuthState(async (user) => {
      if (isUnmounted) return;
    
      if (!user) {
        Swal.fire('Login diperlukan', 'Silakan login dulu.', 'info').then(() => {
          window.location.hash = '#/home';
        });
        return;
      }
    
      const uid = user.uid;
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
    
      if (userSnap.exists()) {
        const data = userSnap.data();
    
        // 🔑 LOGIC AVATAR AMAN
        if (data.photoURL && data.photoURL.trim() !== '') {
          avatar.innerHTML = `<img src="${data.photoURL}" alt="Profile Picture">`;
        } else {
          avatar.textContent = (data.fullName || 'U')[0].toUpperCase();
        }
    
        name.textContent = data.fullName || 'Nama Pengguna';
        email.textContent = user.email;
      }
    
      logoutBtn.addEventListener('click', async () => {
        isUnmounted = true;
        window.removeEventListener('hashchange', loadContent);
        await logoutUser();
        window.location.hash = '#/home';
      });
    
      loadContent();
      window.addEventListener('hashchange', loadContent);
    
      async function loadContent() {
        if (isUnmounted) return;
    
        const hash = window.location.hash;
        const sidebarLinks = document.querySelectorAll('.myprofile-link');
        if (!sidebarLinks.length) return;
    
        sidebarLinks.forEach(link => link.classList.remove('active'));
    
        if (hash === '#/latihan-saya') {
          content.innerHTML = await renderLatihanSaya(uid);
          document.querySelector('a[href="#/latihan-saya"]').classList.add('active');
        } else if (hash === '#/tersimpan') {
          content.innerHTML = await renderTersimpan(uid);
          document.querySelector('a[href="#/tersimpan"]').classList.add('active');
        } else {
          content.innerHTML = await renderProfileForm(userSnap, userRef);
          document.querySelector('a[href="#/profile"]').classList.add('active');
        }
      }
    });
    
  },
};


// =============================
// ✅ FORM PROFIL
// =============================
async function renderProfileForm(userSnap, userRef) {
  const data = userSnap.exists() ? userSnap.data() : {};

  return `
    <h1>Profil Saya</h1>
    <form id="profileForm">
      <div class="myprofile-field">
        <label>Nama Lengkap</label>
        <input type="text" id="fullName" class="myprofile-input" value="${data.fullName || ''}" readonly required />
      </div>
      <div class="myprofile-field">
        <label>Tanggal Lahir</label>
        <input type="date" id="birthDate" class="myprofile-input" value="${data.birthdate || ''}" readonly required />
      </div>
      <div class="myprofile-field">
        <label>Jenis Kelamin</label>
        <select id="gender" class="myprofile-input" disabled required>
          <option value="">-- Pilih --</option>
          <option value="Male" ${data.gender === 'Male' ? 'selected' : ''}>Laki-laki</option>
          <option value="Female" ${data.gender === 'Female' ? 'selected' : ''}>Perempuan</option>
        </select>
      </div>
      <button type="button" id="editBtn" class="myprofile-edit-btn">Ubah</button>
      <button type="submit" id="saveBtn" class="myprofile-save-btn" style="display:none;">Simpan</button>
    </form>
  ` + attachProfileFormHandler(userRef);
}

function attachProfileFormHandler(userRef) {
  setTimeout(() => {
    const form = document.getElementById('profileForm');
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');
    const fullName = document.getElementById('fullName');
    const birthDate = document.getElementById('birthDate');
    const gender = document.getElementById('gender');

    editBtn?.addEventListener('click', () => {
      fullName.removeAttribute('readonly');
      birthDate.removeAttribute('readonly');
      gender.removeAttribute('disabled');
      editBtn.style.display = 'none';
      saveBtn.style.display = 'inline-block';
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      const newData = {
        fullName: fullName.value.trim(),
        birthdate: birthDate.value,
        gender: gender.value,
      };

      if (!newData.fullName || !newData.birthdate || !newData.gender) {
        Swal.fire('Semua field wajib diisi!');
        return;
      }

      await setDoc(userRef, newData, { merge: true });

      fullName.setAttribute('readonly', true);
      birthDate.setAttribute('readonly', true);
      gender.setAttribute('disabled', true);
      editBtn.style.display = 'inline-block';
      saveBtn.style.display = 'none';

      Swal.fire('Berhasil', 'Profil diperbarui.', 'success');
    });
  }, 100);
  return '';
}

// =============================
// ✅ LATIHAN SAYA
// =============================
async function renderLatihanSaya(uid) {
  let html = `<h1>Latihan Saya</h1><div class="latihan-list">`;

  const latihanRef = collection(db, 'users', uid, 'latihan');
  const snapshot = await getDocs(latihanRef);

  if (snapshot.empty) {
    html += `<p>Belum ada latihan tersimpan.</p>`;
  } else {
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      const createdAt = new Date(data.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

      let slug = '';
      switch (data.name.toLowerCase()) {
        case 'weight training': slug = 'weightlifting'; break;
        default: slug = data.name.toLowerCase().replace(/\s+/g, '-');
      }

      html += `
      <div class="latihan-card">
        <div class="latihan-info">
          <strong>${data.name}</strong> <span class="confidence">(${(parseFloat(data.confidence) * 100).toFixed(1)}%)</span>
        </div>
        <div class="latihan-date">Disimpan: ${createdAt}</div>
        <div class="latihan-actions">
          <button class="btn small detail-latihan" data-slug="${slug}">ℹ️ Detail</button>
          <button class="btn small delete-latihan" data-id="${docSnap.id}">🗑️ Hapus</button>
        </div>
      </div>`;
    });
  }

  html += `</div>`;

  setTimeout(() => {
    document.querySelectorAll('.detail-latihan').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.dataset.slug;
        window.location.hash = `#/latihan/${slug}`;
      });
    });

    document.querySelectorAll('.delete-latihan').forEach(btn => {
      btn.addEventListener('click', async () => {
        const confirm = await Swal.fire({
          title: 'Hapus Latihan?',
          text: 'Data latihan akan dihapus permanen.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ya, Hapus',
          cancelButtonText: 'Batal',
        });
        if (confirm.isConfirmed) {
          await deleteDoc(doc(db, 'users', uid, 'latihan', btn.dataset.id));
          Swal.fire('Dihapus!', 'Latihan berhasil dihapus.', 'success').then(() => window.location.reload());
        }
      });
    });
  }, 500);

  return html;
}

// =============================
// ✅ TERSIMPAN
// =============================
async function renderTersimpan(uid) {
  let html = `<h1>Hasil BMI Saya</h1><div class="tersimpan-list">`;

  const tersimpanRef = collection(db, 'users', uid, 'tersimpan');
  const snapshot = await getDocs(tersimpanRef);

  if (snapshot.empty) {
    html += `<p>Belum ada data tersimpan.</p>`;
  } else {
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      const createdAt = new Date(data.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

      html += `
      <div class="tersimpan-card">
        <div class="tersimpan-info">
          <div><strong>Usia:</strong> ${data.age} tahun</div>
          <div><strong>Tinggi Badan:</strong> ${data.height} cm</div>
          <div><strong>Berat Badan:</strong> ${data.weight} kg</div>
        </div>
        <div class="tersimpan-bmi">
          <div><strong>BMI:</strong> ${parseFloat(data.bmi).toFixed(2)} (${data.bmiStatus})</div>
          <p>${data.bmiDescription}</p>
        </div>
        <div class="tersimpan-date">Disimpan: ${createdAt}</div>
        <button class="btn small delete-tersimpan" data-id="${docSnap.id}">🗑️ Hapus</button>
      </div>`;
    });
  }

  html += `</div>`;

  setTimeout(() => {
    document.querySelectorAll('.delete-tersimpan').forEach(btn => {
      btn.addEventListener('click', async () => {
        const confirm = await Swal.fire({
          title: 'Yakin?',
          text: 'Data akan dihapus.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ya, Hapus',
          cancelButtonText: 'Batal',
        });
        if (confirm.isConfirmed) {
          await deleteDoc(doc(db, 'users', uid, 'tersimpan', btn.dataset.id));
          Swal.fire('Berhasil', 'Data dihapus.', 'success').then(() => window.location.reload());
        }
      });
    });
  }, 500);

  return html;
}

export default profilePage;

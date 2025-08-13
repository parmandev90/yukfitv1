import { renderNavbar, afterRenderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';
import { getRecommendations } from '../api';

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { listenAuthState } from '../auth';
import { showAuthModal } from '../components/authModal';

import Swal from 'sweetalert2';

const db = getFirestore();

const formPage = {
  render: async () => {
    return `
      ${renderNavbar()}
      <section class="bmi-section">
        <div class="bmi-container">
          <!-- FORM -->
          <div class="bmi-form-wrapper">
            <h1 class="bmi-title">Temukan Rekomendasi Olahragamu</h1>
            <p class="bmi-subtitle">
              Data usia & jenis kelamin diambil dari profilmu. Silakan lengkapi tinggi & berat badan.
            </p>

            <form id="formRekomendasi" class="bmi-form">
              <div class="bmi-field">
                <label>Tanggal Lahir</label>
                <div id="birthDateDisplay">-</div>
                <a href="#/profile" style="font-size: 0.9rem; text-decoration: underline;">Ubah di Profil</a>
              </div>

              <div class="bmi-field">
                <label>Usia</label>
                <input 
                  type="number" 
                  id="usia" 
                  placeholder="Usia (tahun)" 
                  readonly 
                />
              </div>

              <div class="bmi-field">
                <label>Jenis Kelamin</label>
                <select id="gender" disabled>
                  <option value="">-- Jenis Kelamin --</option>
                  <option value="Male">Laki-laki</option>
                  <option value="Female">Perempuan</option>
                </select>
              </div>

              <div class="bmi-field">
                <input 
                  type="number" 
                  id="tinggi" 
                  placeholder="Tinggi Badan (cm)" 
                  min="50" max="300" 
                  required 
                />
              </div>

              <div class="bmi-field">
                <input 
                  type="number" 
                  id="berat" 
                  placeholder="Berat Badan (kg)" 
                  min="10" max="300" 
                  required 
                />
              </div>

              <button type="submit" id="submitBtn">Dapatkan Rekomendasi</button>
            </form>

            <div id="loadingMessage" style="margin-top: 1rem; font-weight: bold; text-align: center;"></div>
          </div>

          <!-- TABEL BMI -->
          <div class="bmi-table-wrapper">
            <h2 class="bmi-subtitle">Indeks Massa Tubuh (BMI)</h2>
            <table class="bmi-table">
              <thead>
                <tr><th>BMI</th><th>Status Berat Badan</th></tr>
              </thead>
              <tbody>
                <tr><td>&lt; 18.5</td><td>Kurus</td></tr>
                <tr><td>18.5 - 24.9</td><td>Normal</td></tr>
                <tr><td>25.0 - 29.9</td><td>Gemuk</td></tr>
                <tr><td>&gt;= 30.0</td><td>Obesitas</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      ${renderFooter()}
    `;
  },

  afterRender: () => {
    afterRenderNavbar();

    const birthDateEl = document.getElementById('birthDateDisplay');
    const genderEl = document.getElementById('gender');
    const usiaEl = document.getElementById('usia');
    const form = document.getElementById('formRekomendasi');
    const loadingMsg = document.getElementById('loadingMessage');

    listenAuthState(async (user) => {
      if (!user) {
        console.log('❌ Belum login. Data profil tidak tersedia.');
        return;
      }

      console.log('✅ User login:', user.email);

      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const profile = userSnap.data();
          console.log('📌 Data profil:', profile);

          if (profile.birthdate) {
            birthDateEl.textContent = profile.birthdate;
            usiaEl.value = calculateAge(profile.birthdate);
          } else {
            birthDateEl.textContent = '-';
          }

          if (profile.gender) {
            genderEl.value = profile.gender;
          }
        } else {
          console.log('⚠️ Tidak ada data profil di Firestore.');
        }
      } catch (err) {
        console.error('❌ Gagal ambil profil:', err);
      }
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      let user = null;
      await new Promise((resolve) => {
        listenAuthState((_user) => {
          user = _user;
          resolve();
        });
      });

      if (!user) {
        Swal.fire({
          icon: 'info',
          title: 'Login Diperlukan',
          text: 'Silakan login terlebih dahulu untuk mendapatkan rekomendasi.',
          confirmButtonText: 'Login Sekarang'
        }).then(() => {
          showAuthModal();
        });
        return;
      }

      const data = {
        gender: genderEl.value,
        age: parseInt(usiaEl.value),
        height: parseFloat(document.getElementById('tinggi').value),
        weight: parseFloat(document.getElementById('berat').value),
      };

      if (!data.gender || isNaN(data.age)) {
        loadingMsg.textContent = '❌ Data profil tidak lengkap. Silakan lengkapi di halaman Profil.';
        return;
      }

      if (isNaN(data.height) || isNaN(data.weight)) {
        loadingMsg.textContent = '❌ Tinggi & Berat Badan wajib diisi.';
        return;
      }

      const result = await Swal.fire({
        title: 'Konfirmasi',
        text: 'Apakah data sudah benar? Lanjutkan tes?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya, Lanjutkan',
        cancelButtonText: 'Batal',
      });

      if (!result.isConfirmed) return;

      loadingMsg.textContent = '⏳ Memproses rekomendasi...';

      try {
        const response = await getRecommendations(data);
        if (response.success) {
          localStorage.setItem('latestRecommendation', JSON.stringify(response.data));
          window.location.hash = '#/hasil';
        } else {
          loadingMsg.textContent = `❌ ${response.error || 'Terjadi kesalahan saat mengambil rekomendasi.'}`;
        }
      } catch (err) {
        loadingMsg.textContent = `❌ Gagal memanggil API: ${err.message}`;
      }
    });
  },
};

function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export default formPage;

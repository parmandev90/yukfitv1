import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { listenAuthState } from '../auth';
import Swal from 'sweetalert2';

const db = getFirestore();

const latihanSaya = {
  render: async () => {
    return `
      <section class="latihan-saya-section">
        <div class="latihan-saya-container">
          <h1>Latihan Saya</h1>
          <div id="latihan-list">
            <p>Memuat data latihan...</p>
          </div>
        </div>
      </section>
    `;
  },

  afterRender: async () => {
    listenAuthState(async (user) => {
      if (!user) {
        Swal.fire('Login diperlukan', 'Silakan login dulu.', 'info').then(() => {
          window.location.hash = '#/home';
        });
        return;
      }

      const latihanList = document.getElementById('latihan-list');

      const q = query(
        collection(db, 'recommendations'),
        where('userId', '==', user.uid)
      );

      try {
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          latihanList.innerHTML = `<p>Tidak ada data latihan tersimpan.</p>`;
          return;
        }

        let html = '<ul class="latihan-list">';
        querySnapshot.forEach(doc => {
          const data = doc.data();
          html += `
            <li class="latihan-item">
              <h3>${data.activityName || 'Latihan Tanpa Nama'}</h3>
              <p>Deskripsi: ${data.description || '-'}</p>
              <p>Tanggal: ${data.date || '-'}</p>
            </li>
          `;
        });
        html += '</ul>';

        latihanList.innerHTML = html;

      } catch (err) {
        latihanList.innerHTML = `<p>Gagal memuat data: ${err.message}</p>`;
      }
    });
  },
};

export default latihanSaya;

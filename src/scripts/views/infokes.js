// File: src/scripts/views/infokes.js

import { renderNavbar, afterRenderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

const infoKesPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <header class="tips-header">
        <h1 data-aos="fade-up">Tips & Informasi Kesehatan</h1>
        <p data-aos="fade-up" data-aos-delay="50">
          Dapatkan kebiasaan sehat untuk mendukung gaya hidup aktif & bugar.
        </p>
      </header>

      <section class="workout-section">
        <div class="card-container">

          <div data-aos="fade-up" data-aos-delay="50">
            <div class="workout-card">
              <img src="/assets/olahraga.webp" alt="Olahraga Teratur" />
              <div class="tips-content">
                <h3>Olahraga Teratur</h3>
                <p>Olahraga rutin 30 menit setiap hari menjaga jantung tetap sehat & tubuh bugar.</p>
                <a href="#/tips-olahraga" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div class="workout-card">
              <img src="/assets/nutrisi.webp" alt="Asupan Nutrisi Seimbang" />
              <div class="tips-content">
                <h3>Asupan Nutrisi Seimbang</h3>
                <p>Konsumsi karbohidrat, protein, sayur & buah untuk mendukung metabolisme optimal.</p>
                <a href="#/tips-nutrisi" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <div class="workout-card">
              <img src="/assets/kelola_stres.webp" alt="Kelola Stres" />
              <div class="tips-content">
                <h3>Kelola Stres</h3>
                <p>Redakan stres dengan meditasi, musik, atau aktivitas positif untuk menjaga fokus.</p>
                <a href="#/tips-stres" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <div class="workout-card">
              <img src="/assets/air_putih.webp" alt="Minum Air Putih" />
              <div class="tips-content">
                <h3>Minum Air Putih</h3>
                <p>Penuhi kebutuhan cairan minimal 8 gelas per hari agar tubuh tetap terhidrasi.</p>
                <a href="#/tips-air" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="250">
            <div class="workout-card">
              <img src="/assets/cek_kesehatan.webp" alt="Periksa Kesehatan" />
              <div class="tips-content">
                <h3>Periksa Kesehatan</h3>
                <p>Rutin periksa kesehatan untuk deteksi dini risiko penyakit & pantau kondisi tubuh.</p>
                <a href="#/tips-cek" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div class="workout-card">
              <img src="/assets/pola_makan.webp" alt="Pola Makan Teratur" />
              <div class="tips-content">
                <h3>Pola Makan Teratur</h3>
                <p>Jaga pola makan 3x sehari dengan porsi seimbang agar energi stabil sepanjang hari.</p>
                <a href="#/tips-polamakan" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="350">
            <div class="workout-card">
              <img src="/assets/gula_garam.webp" alt="Batasi Gula & Garam" />
              <div class="tips-content">
                <h3>Batasi Gula & Garam</h3>
                <p>Kurangi asupan gula & garam untuk mencegah diabetes & tekanan darah tinggi.</p>
                <a href="#/tips-gulagaram" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <div class="workout-card">
              <img src="/assets/kebersihan.webp" alt="Jaga Kebersihan" />
              <div class="tips-content">
                <h3>Jaga Kebersihan</h3>
                <p>Rajin mandi, cuci tangan, & jaga lingkungan agar terhindar dari penyakit menular.</p>
                <a href="#/tips-kebersihan" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="450">
            <div class="workout-card">
              <img src="/assets/istirahat.webp" alt="Istirahat yang Cukup" />
              <div class="tips-content">
                <h3>Istirahat Yang Cukup</h3>
                <p>Tidur 7-8 jam membantu pemulihan sel tubuh & kesehatan mental yang stabil.</p>
                <a href="#/tips-istirahat" class="tips-link">Lihat Detail</a>
              </div>
            </div>
          </div>  

        </div>
      </section>
      ${renderFooter()}
    `;
  },

  afterRender: () => {
    afterRenderNavbar();
  },
};

export default infoKesPage;

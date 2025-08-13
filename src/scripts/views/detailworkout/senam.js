// File: src/scripts/views/detailworkout/senam.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const senamPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/senam.webp" alt="Ilustrasi orang melakukan senam" class="hero-img" />
          <div class="hero-overlay">
            <h1>Senam</h1>
            <p>Latihan ringan hingga intens yang bermanfaat menjaga kelenturan, kekuatan, dan keseimbangan tubuh.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>
            Senam adalah rangkaian gerakan yang terstruktur untuk meningkatkan kebugaran jasmani.
            Kegiatan ini dapat dilakukan sendiri atau berkelompok, cocok untuk semua usia.
          </p>

          <h2>Manfaat</h2>
          <ul>
            <li>Menjaga kelenturan otot dan persendian.</li>
            <li>Meningkatkan koordinasi dan keseimbangan tubuh.</li>
            <li>Meningkatkan sirkulasi darah dan pernapasan.</li>
            <li>Membantu menjaga berat badan ideal.</li>
            <li>Meningkatkan mood dan mengurangi stres.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Gunakan pakaian nyaman dan ruang gerak yang cukup luas.</li>
            <li>Lakukan pemanasan sebelum memulai gerakan utama.</li>
            <li>Pilih jenis senam sesuai kemampuan dan tujuan.</li>
            <li>Perhatikan teknik gerakan agar terhindar dari cedera.</li>
            <li>Lakukan pendinginan di akhir sesi senam.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/y5OabVgga0E?si=RWm6XNNbISv-htZI" frameborder="0" allowfullscreen></iframe>
              <h3>Senam Aerobik<h3>
              <p> Gerakan ritmis untuk pembakaran kalori & kebugaran jantung.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/Dq9FGR9Ppu8?si=zB-AOuPMmDb39Xjr" frameborder="0" allowfullscreen></iframe>
              <h3>Senam Lantai</h3>
              <p>Fokus pada gerakan kelenturan & kekuatan tubuh.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/n0nAVAj5bDg?si=2WeTJeaJe5cKiDv5" frameborder="0" allowfullscreen></iframe>
              <h3>Senam Ritmik</h3> 
              <p>Menggabungkan musik dan gerakan tari.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/RbMFNqoI_c0?si=JbNe7Px6ztAWRZlG" frameborder="0" allowfullscreen></iframe>
              <h3>Senam Pagi</h3>
              <p>Gerakan ringan untuk memulai aktivitas dengan bugar.</p>
            </div>

          </div>

        </section>
      </main>
      ${renderFooter()}
    `;
  },

  afterRender: () => {
    afterRenderNavbar();
  },
};

export default senamPage;

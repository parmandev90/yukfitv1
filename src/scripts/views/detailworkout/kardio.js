// File: src/scripts/views/detailworkout/kardio.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const kardioPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/cardio.webp" alt="Ilustrasi latihan kardio" class="hero-img" />
          <div class="hero-overlay">
            <h1>Kardio</h1>
            <p>Latihan yang berfokus pada peningkatan detak jantung dan kebugaran tubuh secara menyeluruh.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>
            Kardio adalah latihan yang dirancang untuk meningkatkan fungsi jantung dan paru-paru 
            dengan meningkatkan detak jantung secara bertahap. Olahraga kardio dapat dilakukan 
            dengan berbagai gerakan, baik di dalam maupun di luar ruangan.
          </p>

          <h2>Manfaat</h2>
          <ul>
            <li>Meningkatkan kesehatan jantung dan paru-paru.</li>
            <li>Mempercepat pembakaran kalori dan lemak tubuh.</li>
            <li>Menurunkan risiko penyakit kronis seperti diabetes dan hipertensi.</li>
            <li>Menambah stamina dan energi sehari-hari.</li>
            <li>Meningkatkan mood dan mengurangi stres.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Pilih jenis kardio sesuai preferensi: lari, lompat tali, zumba, dll.</li>
            <li>Gunakan pakaian olahraga yang nyaman dan mendukung gerak aktif.</li>
            <li>Lakukan pemanasan 5-10 menit sebelum memulai sesi kardio.</li>
            <li>Atur intensitas sesuai kemampuan dan tingkat kebugaran.</li>
            <li>Pendinginan di akhir latihan untuk menghindari cedera.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/jDmcbUBI4-g?si=u02PwVl5BzUvM4TH" " frameborder="0" allowfullscreen></iframe>
              <h3>>Lari di Tempat<h3>
              <p> Mudah dilakukan kapan saja di rumah.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/CWpmIW6l-YA?si=cIk1PQv9z6lNp0RI" frameborder="0" allowfullscreen></iframe>
              <h3>Jumping Jack</h3>
              <p>Latihan kardio dasar yang membakar kalori cepat.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/-p_jLym5Cls?si=YYYLw7SfeXbVJHjq" frameborder="0" allowfullscreen></iframe>
              <h3>Lompat Tali</h3> 
              <p>Membantu koordinasi tubuh dan membakar lemak.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/ipAk0L5dDls?si=iDLDoNahUR0tHKtB" frameborder="0" allowfullscreen></iframe>
              <h3>Zumba</h3>
              <p>Latihan kardio dengan musik dan koreografi menari</p>
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

export default kardioPage;

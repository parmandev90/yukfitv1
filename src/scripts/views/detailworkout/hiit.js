// File: src/scripts/views/detailworkout/hiit.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const hiitPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/hiit.webp" alt="Ilustrasi orang melakukan HIIT" class="hero-img" />
          <div class="hero-overlay">
            <h1>HIIT</h1>
            <p>High-Intensity Interval Training untuk pembakaran kalori maksimal dalam waktu singkat.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>
            HIIT atau High-Intensity Interval Training adalah latihan kardio dengan intensitas tinggi 
            yang menggabungkan interval gerakan cepat dan istirahat singkat secara bergantian. 
            Metode ini efektif untuk meningkatkan kebugaran jantung, membakar kalori, dan mempercepat metabolisme.
          </p>

          <h2>Manfaat</h2>
          <ul>
            <li>Efektif membakar lemak dalam waktu singkat.</li>
            <li>Meningkatkan stamina dan daya tahan jantung.</li>
            <li>Memacu metabolisme meski latihan selesai.</li>
            <li>Memperbaiki fungsi kardiovaskular.</li>
            <li>Dapat dilakukan tanpa peralatan khusus.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Lakukan pemanasan 5-10 menit sebelum memulai.</li>
            <li>Pilih variasi gerakan sesuai level kemampuan.</li>
            <li>Ikuti pola interval: 20-40 detik intensitas tinggi, istirahat 10-20 detik.</li>
            <li>Pastikan tubuh terhidrasi dengan baik.</li>
            <li>Lakukan 2-3 kali seminggu untuk hasil optimal.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/uXqd0qKibWA?si=wD95MZ7r7a3LgmVE" " frameborder="0" allowfullscreen></iframe>
              <h3>Burpees<h3>
              <p> Gerakan kombinasi squat, plank, dan lompat.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/kLh-uczlPLg?si=pahAzvTiVEyNRQKk" frameborder="0" allowfullscreen></iframe>
              <h3>Mountain Climber</h3>
              <p>Melatih core dan kardio secara bersamaan.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/BRfxI2Es2lE?si=Ojr9T5JAn1AluJ3R" frameborder="0" allowfullscreen></iframe>
              <h3>Jump Squat</h3> 
              <p>Squat diikuti dengan lompatan eksplosif.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/ZNDHivUg7vA?si=aENWgJ2lpktYTasG" frameborder="0" allowfullscreen></iframe>
              <h3>High Knees</h3>
              <p>Lari di tempat dengan lutut terangkat tinggi.</p>
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

export default hiitPage;

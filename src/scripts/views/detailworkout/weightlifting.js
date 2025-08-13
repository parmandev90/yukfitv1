// File: src/scripts/views/detailworkout/weightlifting.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const weightliftingPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/weightlifting.webp" alt="Ilustrasi orang angkat beban" class="hero-img" />
          <div class="hero-overlay">
            <h1>Weightlifting</h1>
            <p>Latihan angkat beban untuk meningkatkan kekuatan otot dan massa tubuh secara optimal.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>
            Weightlifting atau angkat beban adalah latihan dengan menggunakan beban eksternal 
            seperti barbel atau dumbbell. Latihan ini fokus pada peningkatan kekuatan otot, 
            daya tahan, dan pembentukan massa otot.
          </p>

          <h2>Manfaat</h2>
          <ul>
            <li>Menambah massa otot dan membentuk postur tubuh.</li>
            <li>Memperkuat tulang dan sendi.</li>
            <li>Meningkatkan metabolisme tubuh.</li>
            <li>Menunjang performa olahraga lain.</li>
            <li>Menjaga berat badan ideal dengan pembakaran kalori.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Gunakan beban sesuai kemampuan, tingkatkan secara bertahap.</li>
            <li>Lakukan pemanasan sebelum sesi angkat beban.</li>
            <li>Fokus pada teknik gerakan yang benar.</li>
            <li>Pastikan memiliki jeda istirahat antar set.</li>
            <li>Jika pemula, disarankan dengan pendamping atau pelatih.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/_0w1W2qDBJ4?si=Y_5E8CCSrYziuVlU" frameborder="0" allowfullscreen></iframe>
              <h3>Squat</h3>
              <p> Melatih otot kaki, pinggul, dan punggung bawah.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/HnTxDBL7AR8?si=_JMD8Kw3TxtVmPkj" frameborder="0" allowfullscreen></iframe>
              <h3>Bench Press</h3>
              <p> Fokus pada dada, bahu, dan tricep.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/fdr-oCBytuE?si=yrGo-Ua3gJqdhY5V" frameborder="0" allowfullscreen></iframe>
              <h3>Deadlift</h3>
              <p>Melatih punggung, kaki, dan core.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/0JfYxMRsUCQ?si=5k-8cdt8urptt1lw" frameborder="0" allowfullscreen></iframe>
              <h3>Shoulder Press</h3>
              <p>Membentuk otot bahu dan lengan atas.</p>
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

export default weightliftingPage;

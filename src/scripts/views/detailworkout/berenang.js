// File: src/scripts/views/detailworkout/berenang.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const berenangPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/berenang.webp" alt="Ilustrasi orang berenang di kolam renang" class="hero-img" />
          <div class="hero-overlay">
            <h1>Berenang</h1>
            <p>Latihan seluruh tubuh yang menyegarkan, meningkatkan kebugaran, dan minim risiko cedera.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>
            Berenang adalah olahraga air yang melibatkan hampir semua otot tubuh.
            Aktivitas ini baik untuk kebugaran jantung dan paru-paru, meningkatkan daya tahan, serta cocok untuk semua usia.
          </p>

          <h2>Manfaat</h2>
          <ul>
            <li>Meningkatkan kekuatan otot dan fleksibilitas tubuh.</li>
            <li>Melatih sistem pernapasan dan kesehatan jantung.</li>
            <li>Membakar kalori secara efektif tanpa membebani sendi.</li>
            <li>Menurunkan stres dan memberi efek relaksasi.</li>
            <li>Meningkatkan postur dan koordinasi tubuh.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Gunakan pakaian renang yang nyaman dan sesuai.</li>
            <li>Lakukan pemanasan sebelum masuk ke air.</li>
            <li>Mulailah dengan gaya renang dasar sesuai kemampuan.</li>
            <li>Perhatikan keselamatan, berenang di kolam atau area aman.</li>
            <li>Lakukan pendinginan setelah selesai berenang.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">
           <div class="video-card">
              <iframe src="https://www.youtube.com/embed/L7sizZVzIRw?si=eASrQvSEXI2bGBDU" frameborder="0" allowfullscreen></iframe>
              <h3>Gaya Bebas</h3>
              <p>Gaya cepat, melatih stamina dan kecepatan.</p>

            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/wa2d47hnFuc?si=UE7zrYHTMNB_81jN" frameborder="0" allowfullscreen></iframe>
              <h3>Gaya Dada</h3>
              <p>Cocok untuk pemula, gerakan lebih rileks.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/2KAcfzy2aNQ?si=dmhzMKHuLMld5pkc" frameborder="0" allowfullscreen></iframe>
              <h3>Gaya Punggung</h3>
              <p>Melatih otot punggung dan pernapasan teratur.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/8JfR1dT1Qtc?si=uvdbf1XCGVoPTnG-" frameborder="0" allowfullscreen></iframe>
              <h3>Gaya Kupu-kupu</h3>
               <p> Membakar banyak kalori, teknik lebih menantang.</p>
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

export default berenangPage;

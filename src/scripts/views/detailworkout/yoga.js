// File: src/scripts/views/detailworkout/yoga.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const yogaPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/yoga.webp" alt="Ilustrasi orang melakukan yoga" class="hero-img" />
          <div class="hero-overlay">
            <h1>Yoga</h1>
            <p>Latihan menggabungkan postur, pernapasan, dan meditasi untuk kebugaran fisik dan ketenangan pikiran.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>
            Yoga adalah praktik fisik, mental, dan spiritual yang berasal dari India.
            Gerakan yoga mengutamakan keseimbangan tubuh, kontrol pernapasan, dan ketenangan pikiran.
          </p>

          <h2>Manfaat</h2>
          <ul>
            <li>Melenturkan otot dan persendian.</li>
            <li>Mengurangi stres, menenangkan pikiran.</li>
            <li>Memperbaiki postur tubuh dan keseimbangan.</li>
            <li>Meningkatkan kualitas tidur dan kebugaran secara keseluruhan.</li>
            <li>Memperkuat otot inti dan pernapasan.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Gunakan matras yoga untuk kenyamanan.</li>
            <li>Lakukan di ruangan yang tenang dan nyaman.</li>
            <li>Awali dengan pemanasan ringan.</li>
            <li>Ikuti instruksi gerakan dan pernapasan dengan benar.</li>
            <li>Lakukan pendinginan & relaksasi di akhir sesi.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/c8NZ6prHKkc?si=ZJ04LHcBzm1DwKQm" frameborder="0" allowfullscreen></iframe>
              <h3>Hatha Yoga</h3>
              <p>Dasar postur dan pernapasan untuk pemula.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/kzMrF-_Z69o?si=37El5Y1iLZe6A4k_" frameborder="0" allowfullscreen></iframe>
              <h3>Vinyasa Yoga</h3>
              <p>Gerakan dinamis sinkron dengan pernapasan.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/ceIgvb6HZSw?si=dWWeCoXKKMScZ4Kj" frameborder="0" allowfullscreen></iframe>
              <h3>Power Yoga</h3>
              <p> Lebih intens untuk membakar kalori.</p>
            </div>

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/zqlCGmtNU88?si=XI2ogIZKPhW7l6aS" frameborder="0" allowfullscreen></iframe>
              <h3>Restorative Yoga</h3>
              <p>Fokus pada relaksasi & pemulihan energi.<p>

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

export default yogaPage;

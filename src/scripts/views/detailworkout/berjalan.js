// File: src/scripts/views/detailworkout/berjalan.js
import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const berjalanPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/berjalan.webp" alt="Ilustrasi orang berjalan di taman" class="hero-img" />
          <div class="hero-overlay">
            <h1>Berjalan</h1>
            <p>Latihan sederhana, murah, dan efektif untuk menjaga kebugaran tubuh dan pikiran.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>Berjalan kaki adalah salah satu aktivitas fisik yang paling mudah diakses oleh semua orang...</p>

          <h2>Manfaat</h2>
          <ul>
            <li>Menjaga kesehatan jantung dan menurunkan risiko penyakit kronis.</li>
            <li>Melatih otot kaki, pinggul, dan menjaga keseimbangan tubuh.</li>
            <li>Menurunkan stres, meningkatkan fokus dan produktivitas.</li>
            <li>Membantu pembakaran kalori sehingga mendukung penurunan berat badan.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Gunakan sepatu yang nyaman dan sesuai bentuk kaki.</li>
            <li>Pilih jalur yang aman dan memiliki permukaan rata.</li>
            <li>Mulailah perlahan dengan kecepatan normal, lalu tambah intensitas secara bertahap.</li>
            <li>Jaga postur tegak, bahu rileks, ayunkan tangan mengikuti irama langkah.</li>
            <li>Lakukan minimal 30 menit sehari atau 150 menit per minggu.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/c0wXifpgZnI?si=kTX978icgHJ9fLzg" frameborder="0" allowfullscreen></iframe>
              <h3>Jalan Cepat</h3>
              <p>Memacu detak jantung, baik untuk pembakaran kalori lebih maksimal.</p>
            </div>
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/Aa4cw0uPrtw?si=HUZYi8zAJ2SF4cr0" frameborder="0" allowfullscreen></iframe>
              <h3>Hill Walking</h3>
              <p>Berjalan di area menanjak untuk melatih otot paha dan betis.</p>
            </div>
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/MKRrRCUMHOg?si=X9g8JjcdrrKwbzEc" frameborder="0" allowfullscreen></iframe>
              <h3>Nordic Walking</h3>
              <p>Menggunakan tongkat untuk menambah beban lengan dan bahu.</p>
            </div>
            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/KjEAwWuWHng?si=E8r4hjoeLxPaSWsZ" frameborder="0" allowfullscreen></iframe>
              <h3>Interval Walking</h3>
              <p>Kombinasi jalan normal dengan jalan cepat secara bergantian.</p>
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

export default berjalanPage;

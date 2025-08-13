// File: src/scripts/views/tips/tipsNutrisi.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsNutrisiPage = {
  render() {
    return `
      ${renderNavbar()}

      <!-- Gunakan CLASS konsisten -->
      <header class="tips-header">
        <h1>Asupan Nutrisi Seimbang</h1>
        <p>Jaga pola makan dengan gizi seimbang untuk mendukung metabolisme & kebugaran tubuh.</p>
      </header>

      <main class="tips-detail">
       

        <section>
          <h2>Kenapa Penting Nutrisi Seimbang?</h2>
          <p>
            Nutrisi yang cukup dan seimbang sangat penting untuk menjaga fungsi organ tubuh,
            meningkatkan imunitas, serta membantu proses pemulihan dan pertumbuhan.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Menjaga berat badan ideal</li>
            <li>Memperkuat sistem imun</li>
            <li>Menambah energi untuk aktivitas harian</li>
            <li>Mencegah defisiensi vitamin & mineral</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Konsumsi karbohidrat, protein, lemak sehat, sayur & buah setiap hari</li>
            <li>Kurangi asupan gula, garam, dan lemak jenuh</li>
            <li>Perbanyak air putih dan hindari minuman manis berlebih</li>
            <li>Makan teratur 3 kali sehari dengan porsi seimbang</li>
          </ol>
        </section>

        <a href="#/infokes" class="back-link">← Kembali ke Tips Lainnya</a>
      </main>

      ${renderFooter()}
    `;
  },

  afterRender() {
    afterRenderNavbar();
  },
};

export default tipsNutrisiPage;

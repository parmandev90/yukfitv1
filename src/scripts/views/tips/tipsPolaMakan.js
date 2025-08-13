import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsPolaMakanPage = {
  render() {
    return `
      ${renderNavbar()}

      <header class="tips-header">
        <h1>Pola Makan Sehat</h1>
        <p>Atur pola makan bergizi seimbang untuk mendukung kebugaran & imun tubuh.</p>
      </header>

      <main class="tips-detail">
      

        <section>
          <h2>Kenapa Harus Pola Makan Sehat?</h2>
          <p>
            Pola makan seimbang membantu memenuhi kebutuhan nutrisi harian
            agar tubuh tetap fit dan terhindar dari penyakit.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Menjaga berat badan ideal</li>
            <li>Meningkatkan energi & konsentrasi</li>
            <li>Menjaga kesehatan jantung & organ vital</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Konsumsi karbohidrat, protein, sayur & buah seimbang</li>
            <li>Hindari junk food & minuman tinggi gula</li>
            <li>Makan dengan porsi kecil namun sering</li>
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

export default tipsPolaMakanPage;

// File: src/scripts/views/tips/tipsOlahraga.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';


const tipsOlahragaPage = {
  render() {
    return `
      ${renderNavbar()}

      <!-- Gunakan CLASS yang sama agar CSS konsisten -->
      <header class="tips-header">
        <h1>Olahraga Teratur</h1>
        <p>Berolahraga secara rutin untuk menjaga kesehatan fisik dan mental Anda.</p>
      </header>

      <main class="tips-detail">
       

        <section>
          <h2>Kenapa Harus Olahraga Teratur?</h2>
          <p>
            Aktivitas fisik rutin seperti olahraga dapat membantu meningkatkan kekuatan jantung,
            melancarkan peredaran darah, dan menjaga berat badan ideal.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Menjaga kesehatan jantung & paru-paru</li>
            <li>Menurunkan risiko penyakit kronis</li>
            <li>Meningkatkan daya tahan tubuh</li>
            <li>Menjaga suasana hati tetap stabil</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Atur jadwal rutin minimal 3–5 kali seminggu</li>
            <li>Pilih jenis olahraga yang Anda sukai</li>
            <li>Lakukan pemanasan & pendinginan</li>
            <li>Gunakan pakaian & sepatu yang nyaman</li>
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

export default tipsOlahragaPage;

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsIstirahatPage = {
  render() {
    return `
      ${renderNavbar()}

      <header class="tips-header">
        <h1>Istirahat Cukup</h1>
        <p>Pastikan tidur & istirahat cukup untuk menjaga kebugaran fisik & mental.</p>
      </header>

      <main class="tips-detail">
  

        <section>
          <h2>Kenapa Harus Istirahat Cukup?</h2>
          <p>
            Tidur & istirahat cukup membantu proses regenerasi sel,
            mendukung imunitas, serta menjaga kesehatan otak.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Meningkatkan konsentrasi & mood</li>
            <li>Menjaga stamina & kebugaran</li>
            <li>Mendukung metabolisme tetap optimal</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Tidur 7–8 jam setiap malam</li>
            <li>Kurangi gadget sebelum tidur</li>
            <li>Atur jadwal tidur & bangun yang teratur</li>
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

export default tipsIstirahatPage;

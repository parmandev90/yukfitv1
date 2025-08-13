import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsGulaGaramPage = {
  render() {
    return `
      ${renderNavbar()}

      <header class="tips-header">
        <h1>Batasi Gula & Garam</h1>
        <p>Kontrol konsumsi gula & garam untuk menjaga tekanan darah & kadar gula tubuh.</p>
      </header>

      <main class="tips-detail">
        

        <section>
          <h2>Kenapa Harus Dibatasi?</h2>
          <p>
            Asupan gula & garam berlebih dapat meningkatkan risiko hipertensi,
            diabetes & penyakit jantung.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Mencegah obesitas & penyakit metabolik</li>
            <li>Menjaga tekanan darah stabil</li>
            <li>Melindungi fungsi organ vital</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Batasi gula maksimal 4 sendok makan per hari</li>
            <li>Batasi garam maksimal 1 sendok teh per hari</li>
            <li>Baca label kemasan sebelum membeli produk</li>
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

export default tipsGulaGaramPage;

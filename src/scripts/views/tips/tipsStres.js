import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsStresPage = {
  render() {
    return `
      ${renderNavbar()}

      <header class="tips-header">
        <h1>Kelola Stres</h1>
        <p>Stres terkontrol, hidup lebih bahagia & produktif setiap hari.</p>
      </header>

      <main class="tips-detail">
        

        <section>
          <h2>Kenapa Harus Mengelola Stres?</h2>
          <p>
            Stres yang tidak dikelola dapat berdampak pada kesehatan fisik & mental,
            menurunkan produktivitas, serta meningkatkan risiko penyakit kronis.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Meningkatkan kualitas tidur</li>
            <li>Menjaga emosi tetap stabil</li>
            <li>Meningkatkan konsentrasi & fokus</li>
            <li>Menurunkan risiko hipertensi & gangguan jantung</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Lakukan relaksasi seperti meditasi atau pernapasan dalam</li>
            <li>Luangkan waktu untuk hobi & kegiatan positif</li>
            <li>Atur jadwal istirahat & tidur cukup</li>
            <li>Jalin komunikasi dengan keluarga & teman</li>
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

export default tipsStresPage;

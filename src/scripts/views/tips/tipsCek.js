import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsCekPage = {
  render() {
    return `
      ${renderNavbar()}

      <header class="tips-header">
        <h1>Rutin Cek Kesehatan</h1>
        <p>Periksa kesehatan secara berkala untuk mendeteksi penyakit sedini mungkin.</p>
      </header>

      <main class="tips-detail">
        

        <section>
          <h2>Kenapa Harus Rutin Cek Kesehatan?</h2>
          <p>
            Pemeriksaan kesehatan rutin membantu mendeteksi penyakit lebih awal
            sehingga penanganannya lebih cepat dan efektif.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Mencegah risiko penyakit kronis</li>
            <li>Memantau kondisi tubuh secara menyeluruh</li>
            <li>Meningkatkan kesadaran pola hidup sehat</li>
            <li>Memberi rasa aman & tenang</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Lakukan medical check up minimal setahun sekali</li>
            <li>Periksa tekanan darah, gula darah, kolesterol & BMI</li>
            <li>Ikuti saran dokter & rutin kontrol bila perlu</li>
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

export default tipsCekPage;

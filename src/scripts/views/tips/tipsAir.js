import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsAirPage = {
  render() {
    return `
      ${renderNavbar()}

      <header class="tips-header">
        <h1>Perbanyak Minum Air Putih</h1>
        <p>Penuhi kebutuhan cairan tubuh untuk menjaga kesehatan & stamina.</p>
      </header>

      <main class="tips-detail">
        

        <section>
          <h2>Kenapa Harus Cukup Minum Air?</h2>
          <p>
            Air putih penting untuk menjaga suhu tubuh, mendukung fungsi organ,
            serta membantu proses metabolisme agar tubuh tetap bugar.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Menjaga keseimbangan cairan tubuh</li>
            <li>Membantu detoksifikasi alami</li>
            <li>Meningkatkan energi & fokus</li>
            <li>Mendukung kesehatan kulit</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Minum minimal 8 gelas (2 liter) air putih per hari</li>
            <li>Selalu bawa botol minum saat beraktivitas</li>
            <li>Kurangi minuman manis & berkafein berlebih</li>
            <li>Minum air putih sebelum & sesudah olahraga</li>
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

export default tipsAirPage;

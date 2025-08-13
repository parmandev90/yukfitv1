import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const tipsKebersihanPage = {
  render() {
    return `
      ${renderNavbar()}

      <header class="tips-header">
        <h1>Jaga Kebersihan Diri</h1>
        <p>Menjaga kebersihan adalah kunci mencegah penularan penyakit.</p>
      </header>

      <main class="tips-detail">
        

        <section>
          <h2>Kenapa Harus Bersih?</h2>
          <p>
            Kebersihan tubuh & lingkungan membantu menekan risiko penularan bakteri,
            virus & penyakit menular lainnya.
          </p>
        </section>

        <section>
          <h2>Manfaat Utama</h2>
          <ul>
            <li>Mencegah infeksi & penyakit kulit</li>
            <li>Membuat tubuh terasa segar & nyaman</li>
            <li>Memberi rasa percaya diri</li>
          </ul>
        </section>

        <section>
          <h2>Tips Praktis</h2>
          <ol>
            <li>Mandilah minimal 2 kali sehari</li>
            <li>Rajin cuci tangan pakai sabun</li>
            <li>Gunakan pakaian bersih & ganti secara teratur</li>
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

export default tipsKebersihanPage;

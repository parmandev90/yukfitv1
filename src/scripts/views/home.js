import { renderNavbar, afterRenderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

const homePage = {
  render() {
    return `
    ${renderNavbar()}

    <header class="hero" style="background-image: url('/assets/hero.webp')" data-aos="fade-up">
      <div class="overlay">
        <h1>Mulai Perjalanan Kebugaranmu</h1>
        <p>Tentukan olahraga terbaik untuk dirimu!</p>
        <div class="cta-buttons">
          <a href="#/tes" class="btn red" data-aos="fade-up" data-aos-delay="100">Mulai Tes</a>
          <a href="#/infokes" class="btn white" data-aos="fade-up" data-aos-delay="200">Informasi Kesehatan</a>
        </div>
      </div>
    </header>

    <main>
      <section class="why-healthy-section">
        <div class="image-container" data-aos="fade-up">
          <img src="/assets/ilustrasi.webp" alt="Orang berolahraga" class="rounded" />
        </div>
        <div class="why-healthy-text" data-aos="fade-up" data-aos-delay="150">
          <h2>Kenapa Harus Hidup Sehat?</h2>
          <p>
            <span>Kesehatan adalah investasi terbaik untuk masa depan.</span> Mulailah dari langkah kecil
            berolahraga setiap hari, sesuaikan dengan kebutuhanmu, dan rasakan perubahannya bersama <em>YUK FIT</em>.
          </p>
        </div>
      </section>

      <section class="workout-section">
        <h2 class="section-title" data-aos="fade-up">Daftar Olahraga</h2>
        <div class="card-container">
          <div data-aos="fade-up" data-aos-delay="50">
            <div class="workout-card">
              <img src="/assets/cardio.webp" alt="Cardio" />
              <div class="icon-box">🏃</div>
              <h3>Cardio</h3>
              <p>Melatih ketahanan jantung dan paru-paru, cocok untuk membakar kalori.</p>
              <a href="#/latihan/kardio" class="read-more">Lihat Detail</a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div class="workout-card">
              <img src="/assets/yoga.webp" alt="Yoga" />
              <div class="icon-box">🧘</div>
              <h3>Yoga</h3>
              <p>Meningkatkan fleksibilitas dan menenangkan pikiran dengan pernapasan.</p>
              <a href="#/latihan/yoga" class="read-more">Lihat Detail</a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <div class="workout-card">
              <img src="/assets/senam.webp" alt="Senam" />
              <div class="icon-box">🤸</div>
              <h3>Senam</h3>
              <p>Membantu melatih kelenturan, keseimbangan, dan koordinasi tubuh.</p>
              <a href="#/latihan/senam" class="read-more">Lihat Detail</a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <div class="workout-card">
              <img src="/assets/berenang.webp" alt="Berenang" />
              <div class="icon-box">🏊‍♂️</div>
              <h3>Berenang</h3>
              <p>Melatih kekuatan otot seluruh tubuh dan menyehatkan paru-paru.</p>
              <a href="#/latihan/berenang" class="read-more">Lihat Detail</a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <div class="workout-card">
              <img src="/assets/bersepeda.webp" alt="Bersepeda" />
              <div class="icon-box">🚴</div>
              <h3>Bersepeda</h3>
              <p>Memperkuat otot kaki dan meningkatkan stamina secara bertahap.</p>
              <a href="#/latihan/bersepeda" class="read-more">Lihat Detail</a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <div class="workout-card">
              <img src="/assets/weightlifting.webp" alt="Weightlifting" />
              <div class="icon-box">🏋️</div>
              <h3>Weightlifting</h3>
              <p>Melatih otot tubuh agar lebih kuat dan meningkatkan metabolisme.</p>
              <a href="#/latihan/weightlifting" class="read-more">Lihat Detail</a>
            </div>
          </div>

        </div>
      </section>

      <!-- Section tips, sama logika -->
    </main>

    ${renderFooter()}
    `;
  },

  afterRender() {
    afterRenderNavbar();
  },
};

export default homePage;

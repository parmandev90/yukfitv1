import { renderNavbar, afterRenderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

const workoutPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <section class="workout-section">
        <h2 class="section-title" data-aos="fade-up">Daftar Olahraga</h2>
        <div class="card-container">

          <div class="workout-card" data-aos="fade-up" data-aos-delay="50">
            <img src="/assets/cardio.webp" alt="Cardio" />
            <div class="icon-box">🏃</div>
            <h3>Cardio</h3>
            <p>Melatih ketahanan jantung dan paru-paru, cocok untuk membakar kalori.</p>
            <a href="#/latihan/kardio" class="read-more">Lihat Detail</a>
          </div>

          <div class="workout-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/assets/yoga.webp" alt="Yoga" />
            <div class="icon-box">🧘</div>
            <h3>Yoga</h3>
            <p>Meningkatkan fleksibilitas dan menenangkan pikiran dengan pernapasan.</p>
            <a href="#/latihan/yoga" class="read-more">Lihat Detail</a>
          </div>

          <div class="workout-card" data-aos="fade-up" data-aos-delay="150">
            <img src="/assets/berenang.webp" alt="Berenang" />
            <div class="icon-box">🏊‍♂️</div>
            <h3>Berenang</h3>
            <p>Melatih kekuatan otot seluruh tubuh dan menyehatkan paru-paru.</p>
            <a href="#/latihan/berenang" class="read-more">Lihat Detail</a>
          </div>

          <div class="workout-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/assets/bersepeda.webp" alt="Bersepeda" />
            <div class="icon-box">🚴</div>
            <h3>Bersepeda</h3>
            <p>Memperkuat otot kaki dan meningkatkan stamina secara bertahap.</p>
            <a href="#/latihan/bersepeda" class="read-more">Lihat Detail</a>
          </div>

          <div class="workout-card" data-aos="fade-up" data-aos-delay="250">
            <img src="/assets/weightlifting.webp" alt="Weightlifting" />
            <div class="icon-box">🏋️</div>
            <h3>Weightlifting</h3>
            <p>Melatih otot tubuh agar lebih kuat dan meningkatkan metabolisme.</p>
            <a href="#/latihan/weightlifting" class="read-more">Lihat Detail</a>
          </div>

          <div class="workout-card" data-aos="fade-up" data-aos-delay="300">
            <img src="/assets/berjalan.webp" alt="Berjalan" />
            <div class="icon-box">🚶</div>
            <h3>Berjalan</h3>
            <p>Aktivitas ringan meningkatkan kebugaran, membakar kalori.</p>
            <a href="#/latihan/berjalan" class="read-more">Lihat Detail</a>
          </div>

          <div class="workout-card" data-aos="fade-up" data-aos-delay="350">
            <img src="/assets/hiit.webp" alt="HIIT" />
            <div class="icon-box">🔥</div>
            <h3>HIIT (High-Intensity Interval Training)</h3>
            <p>Efektif membakar lemak lebih cepat dan meningkatkan daya tahan tubuh.</p>
            <a href="#/latihan/hiit" class="read-more">Lihat Detail</a>
          </div>

          <div class="workout-card" data-aos="fade-up" data-aos-delay="400">
            <img src="/assets/senam.webp" alt="Senam" />
            <div class="icon-box">🤸</div>
            <h3>Senam</h3>
            <p>Membantu melatih kelenturan, keseimbangan, dan koordinasi tubuh.</p>
            <a href="#/latihan/senam" class="read-more">Lihat Detail</a>
          </div>

        </div>
      </section>

      ${renderFooter()}
    `;
  },

  afterRender: () => {
    afterRenderNavbar();
  },
};

export default workoutPage;

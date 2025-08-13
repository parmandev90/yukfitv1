// File: src/scripts/views/detailworkout/bersepeda.js

import { renderNavbar, afterRenderNavbar } from '../../components/navbar';
import { renderFooter } from '../../components/footer';

const bersepedaPage = {
  render: () => {
    return `
      ${renderNavbar()}
      <main class="detail-workout">
        <!-- HERO SECTION -->
        <section class="workout-hero">
          <img src="/assets/bersepeda.webp" alt="Ilustrasi orang bersepeda" class="hero-img" />
          <div class="hero-overlay">
            <h1>Bersepeda</h1>
            <p>Olahraga menyenangkan yang efektif menjaga kebugaran, membakar kalori, dan ramah lingkungan.</p>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="workout-content">
          <h2>Definisi</h2>
          <p>
            Bersepeda adalah aktivitas fisik dengan menggunakan sepeda sebagai alat transportasi sekaligus latihan kebugaran.
            Kegiatan ini dapat dilakukan di jalan raya, jalur khusus, atau medan pegunungan sesuai minat dan tujuan latihan.
          </p>

          <h2>Manfaat</h2>
          <ul>
            <li>Meningkatkan kebugaran jantung dan paru-paru.</li>
            <li>Melatih otot kaki, paha, betis, dan pinggul.</li>
            <li>Membantu penurunan berat badan dan pembakaran kalori.</li>
            <li>Mengurangi stres dan meningkatkan mood.</li>
            <li>Ramah lingkungan sebagai transportasi bebas polusi.</li>
          </ul>

          <h2>Tips Melakukan</h2>
          <ol>
            <li>Gunakan helm dan perlengkapan keselamatan.</li>
            <li>Pastikan sepeda dalam kondisi baik dan nyaman.</li>
            <li>Atur posisi sadel dan setang sesuai postur tubuh.</li>
            <li>Mulailah dengan jarak pendek, tingkatkan secara bertahap.</li>
            <li>Pilih rute yang aman dan sesuai kemampuan.</li>
          </ol>

          <h2>Variasi Gerakan</h2>
          <div class="video-card-grid">

            <div class="video-card">
              <iframe src="https://www.youtube.com/embed/7DJLK-JWt7I?si=vOXsZnT0XdFitqh1" frameborder="0" allowfullscreen></iframe>
              <h3>Road Cycling</h3>
              <p>Bersepeda di jalan raya dengan kecepatan stabil</p>
            </div>
          
           <div class="video-card">
            <iframe src="https://www.youtube.com/embed/bvvNjMN0VgI?si=EtyGc0jg2ybFKYDg" frameborder="0" allowfullscreen></iframe>
            <h3>Mountain Biking</h3>
            <p>Menjelajah jalur pegunungan, medan menantang.</p>
          </div>

          <div class="video-card">
            <iframe src="https://www.youtube.com/embed/oxbhAI0b3hQ?si=-gzsTWhAoi6FTmW8" frameborder="0" allowfullscreen></iframe>
            <h3>City Commuting</h3>
            <p>Bersepeda santai sebagai alat transportasi harian.</p>
          </div>  
            
          <div class="video-card">
            <iframe src="https://www.youtube.com/embed/J82d1J8yWQs?si=bIJrf4QBVkcfrSsu" frameborder="0" allowfullscreen></iframe>
            <h3>Spinning</h3> 
            <p>Latihan bersepeda statis di dalam ruangan dengan intensitas terkontrol.</p>
          </div>

        </section>
      </main>
      ${renderFooter()}
    `;
  },

  afterRender: () => {
    afterRenderNavbar();
  },
};

export default bersepedaPage;

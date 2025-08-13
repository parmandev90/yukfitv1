// Import semua halaman
import homePage from './views/home';
import formPage from './views/form';
import resultPage from './views/result';
import infokesPage from './views/infokes';
import latihanPage from './views/workout';

import berjalanPage from './views/detailworkout/berjalan';
import bersepedaPage from './views/detailworkout/bersepeda';
import berenangPage from './views/detailworkout/berenang';
import senamPage from './views/detailworkout/senam';
import yogaPage from './views/detailworkout/yoga';
import weightliftingPage from './views/detailworkout/weightlifting';
import hiitPage from './views/detailworkout/hiit';
import kardioPage from './views/detailworkout/kardio';

import tipsOlahragaPage from './views/tips/tipsOlahraga';
import tipsNutrisiPage from './views/tips/tipsNutrisi';
import tipsIstirahatPage from './views/tips/tipsIstirahat';
import tipsStresPage from './views/tips/tipsStres';
import tipsAirPage from './views/tips/tipsAir';
import tipsCekPage from './views/tips/tipsCek';
import tipsPolaMakanPage from './views/tips/tipsPolaMakan';
import tipsGulaGaramPage from './views/tips/tipsGulaGaram';
import tipsKebersihanPage from './views/tips/tipsKebersihan';

import privacyPage from './views/privacy';
import profilePage from './views/profile';



// Daftar route
const routes = {
  '/': homePage,
  '/home': homePage,
  '/tes': formPage,
  '/hasil': resultPage,
  '/infokes': infokesPage,
  '/latihan': latihanPage,
  '/latihan/berjalan': berjalanPage,
  '/latihan/bersepeda': bersepedaPage,
  '/latihan/berenang': berenangPage,
  '/latihan/senam': senamPage,
  '/latihan/yoga': yogaPage,
  '/latihan/weightlifting': weightliftingPage,
  '/latihan/hiit': hiitPage,
  '/latihan/kardio': kardioPage,
  '/tips-olahraga': tipsOlahragaPage,
  '/tips-nutrisi': tipsNutrisiPage,
  '/tips-istirahat': tipsIstirahatPage,
  '/tips-stres': tipsStresPage,
  '/tips-air': tipsAirPage,
  '/tips-cek': tipsCekPage,
  '/tips-polamakan': tipsPolaMakanPage,
  '/tips-gulagaram': tipsGulaGaramPage,
  '/tips-kebersihan': tipsKebersihanPage,
  '/privacy': privacyPage,
  '/profile': profilePage,
  '/latihan-saya': profilePage, // Halaman latihan saya
  '/tersimpan': profilePage, // Halaman tersimpan


};

// Router utama
export const router = async () => {
  const app = document.getElementById('app');
  if (!app) return console.error('Elemen #app tidak ditemukan.');

  const hash = window.location.hash || '#/home';
  const path = hash.replace('#', '');
  const page = routes[path] || {
    render: async () => '<p>404 - Halaman tidak ditemukan</p>',
    afterRender: () => {},
  };

  // Pastikan `render` di-*await*
  const content = await page.render();
  app.innerHTML = content;

  if (typeof page.afterRender === 'function') {
    page.afterRender();
  }
};

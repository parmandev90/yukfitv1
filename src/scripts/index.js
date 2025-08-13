import '../styles/style.css';
import '../styles/navbar.css';
import '../styles/detail.css';
import '../styles/form.css';
import '../styles/result.css';
import '../styles/home.css';
import '../styles/footer.css';
import '../styles/infokes.css';
import '../styles/auth.css';
import '../styles/profile.css';

import { router } from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { completeSignInWithEmailLink } from './auth';
import AuthModal from './components/authModal'; // WAJIB

window.addEventListener('DOMContentLoaded', () => {
  completeSignInWithEmailLink();

  // === Tambah fix ini! ===
  document.body.insertAdjacentHTML('beforeend', AuthModal.render());
  AuthModal.afterRender();

  router();
  AOS.init({
    once: false,
    duration: 800,
    easing: 'ease-in-out',
  });
});

window.addEventListener('hashchange', () => {
  router();
  AOS.refresh();
});

import { signInWithGoogle, startSignInWithEmailLink } from '../auth';

const AuthModal = {
  render() {
    return `
      <div id="authModal" class="auth-modal hidden">
        <div class="auth-modal-overlay"></div>
        <div class="auth-modal-content">
          <button class="auth-modal-close" aria-label="Tutup">&times;</button>

          <div class="auth-header">
            <h1 class="auth-logo">
              YUK <span class="red">FIT</span>
            </h1>
          </div>

          <h2>Selamat datang di YUK FIT</h2>
          <p class="auth-subtitle">
            Daftar atau masuk dengan akun Google atau email. Kami menjaga privasi Anda.
          </p>

          <button id="googleBtn" class="auth-btn google-btn">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Icon" />
            Masuk dengan Google
          </button>

          <div class="auth-divider">Atau lanjutkan dengan</div>

          <div class="auth-email-section">
          <input 
            type="email" 
            id="emailInput" 
            class="auth-input" 
            placeholder="Email Anda" 
            required 
          />
          <button id="emailBtn" class="auth-btn email-btn">
            Kirim Link ke Email
          </button>
        </div>

          <p class="auth-terms">
            Dengan mendaftar, Anda menyetujui 
            <a href="#/privacy" class="auth-link">Kebijakan Privasi</a> dan 
            <a href="#/terms" class="auth-link">Ketentuan Pengguna</a> kami.
          </p>
        </div>
      </div>
    `;
  },

  afterRender() {
    const modal = document.getElementById('authModal');
    const closeBtn = modal.querySelector('.auth-modal-close');
    const overlay = modal.querySelector('.auth-modal-overlay');

    function closeModal() {
      modal.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.getElementById('googleBtn').addEventListener('click', async () => {
      await signInWithGoogle();
      closeModal();
    });

    document.getElementById('emailBtn').addEventListener('click', async () => {
      const emailInput = document.getElementById('emailInput');
      const email = emailInput.value.trim();
      if (!email) {
        alert('Mohon masukkan email Anda.');
        return;
      }
      await startSignInWithEmailLink(email);
      closeModal();
    });

    // Auto-close jika pindah halaman
    window.addEventListener('hashchange', closeModal);
  }
};

export function showAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  }
}

export default AuthModal;

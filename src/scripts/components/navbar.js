// src/components/navbar.js
import { listenAuthState, logoutUser } from '../auth';
import { showAuthModal } from './authModal';
import Swal from 'sweetalert2';

const renderNavbar = () => `
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Hamburger -->
      <button class="hamburger" aria-label="Menu">☰</button>

      <!-- Logo -->
      <a href="#/home" class="brand-title">YUK <span class="red">FIT</span></a>

      <!-- Nav Links -->
      <ul class="nav-links">
        <li><a href="#/home">Beranda</a></li>
        <li class="dropdown">
          <button class="dropdown-toggle">Latihan <span class="arrow small-arrow">▼</span></button>
          <ul class="dropdown-menu">
            <li><a href="#/latihan">Semua Latihan</a></li>
            <li><a href="#/latihan/berjalan">Berjalan</a></li>
            <li><a href="#/latihan/bersepeda">Bersepeda</a></li>
            <li><a href="#/latihan/berenang">Berenang</a></li>
            <li><a href="#/latihan/senam">Senam</a></li>
            <li><a href="#/latihan/yoga">Yoga</a></li>
            <li><a href="#/latihan/weightlifting">Weightlifting</a></li>
            <li><a href="#/latihan/hiit">HIIT</a></li>
            <li><a href="#/latihan/kardio">Kardio</a></li>
          </ul>
        </li>
        <li><a href="#/tes">Tes Sekarang</a></li>
        <li><a href="#/infokes">Informasi Kesehatan</a></li>
      </ul>

      <!-- Auth Links -->
      <div id="authLinks" class="auth-links"></div>
    </div>
  </nav>
`;

const afterRenderNavbar = () => {
  const dropdown = document.querySelector('.dropdown');
  const toggle = document.querySelector('.dropdown-toggle');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const authLinks = document.getElementById('authLinks');

  // Dropdown
  if (dropdown && toggle) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  }

  // Hamburger (mobile)
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  }

  // Helper: cek http/https URL
  const isHttpUrl = (u) => {
    try { const x = new URL(u); return x.protocol === 'http:' || x.protocol === 'https:'; }
    catch { return false; }
  };

  // Listen auth state
  listenAuthState((user) => {
    if (user) {
      authLinks.innerHTML = `
        <div class="profile-wrapper">
          <!-- IMG utama (hanya tampil jika ada photoURL valid) -->
          <img id="profileAvatar" class="profile-avatar" alt="Profile" />

          <!-- Fallback SVG inline (aman dari CSP) -->
          <span id="profileAvatarFallback" class="profile-avatar-fallback" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28">
              <circle cx="32" cy="32" r="32" fill="#e5e7eb"/>
              <circle cx="32" cy="24" r="12" fill="#9ca3af"/>
              <path d="M12 54c4.5-10 15-14 20-14s15.5 4 20 14" fill="#9ca3af"/>
            </svg>
          </span>

          <ul class="profile-menu">
            <li><a href="#/profile">👤 Lihat Profil Saya</a></li>
            <li><a href="#/latihan-saya">💪 Latihan Saya</a></li>
            <li><a href="#/tersimpan">💾 Tersimpan</a></li>
            <li><button id="logoutBtn" class="logout-btn">🚪 Keluar</button></li>
          </ul>
        </div>
      `;

      // Toggle avatar: pilih photoURL kalau valid, else fallback SVG
      const img = document.getElementById('profileAvatar');
      const fallbackEl = document.getElementById('profileAvatarFallback');
      const rawPhoto = (user.photoURL || '').trim();

      if (rawPhoto && isHttpUrl(rawPhoto)) {
        img.src = rawPhoto;
        img.referrerPolicy = 'no-referrer';
        img.crossOrigin = 'anonymous';
        img.style.display = 'inline-block';
        fallbackEl.style.display = 'none';

        // Jika gagal load → balik ke SVG fallback
        img.addEventListener(
          'error',
          () => {
            img.style.display = 'none';
            fallbackEl.style.display = 'inline-block';
          },
          { once: true }
        );
      } else {
        // Tidak ada photoURL valid → pakai SVG fallback
        img.style.display = 'none';
        fallbackEl.style.display = 'inline-block';
      }

      // Buka/tutup menu profil
      const profileWrapper = authLinks.querySelector('.profile-wrapper');
      if (profileWrapper) {
        profileWrapper.addEventListener('click', (e) => {
          e.stopPropagation();
          profileWrapper.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
          if (!profileWrapper.contains(e.target)) {
            profileWrapper.classList.remove('open');
          }
        });
      }

      // Logout
      document.getElementById('logoutBtn')?.addEventListener('click', async () => {
        const confirm = await Swal.fire({
          title: 'Yakin keluar?',
          text: 'Anda akan keluar dari akun.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ya, Keluar',
          cancelButtonText: 'Batal',
        });
        if (confirm.isConfirmed) {
          await logoutUser();
          localStorage.clear();
          window.location.hash = '#/home';
          window.location.reload();
        }
      });
    } else {
      // Belum login
      authLinks.innerHTML = `
        <button class="nav-btn red-btn" id="openAuthModal">
          👤 Masuk / Daftar
        </button>
      `;
      document.getElementById('openAuthModal')?.addEventListener('click', showAuthModal);
    }
  });
};

export { renderNavbar, afterRenderNavbar };

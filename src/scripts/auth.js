import { auth } from './firebaseConfig';
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

import Swal from 'sweetalert2';

const db = getFirestore();

// ✅ SET PERSISTENCE: supaya tetap login meski refresh
setPersistence(auth, browserLocalPersistence).then(() => {
  console.log('✅ Auth Persistence disetel ke Local');
}).catch((err) => {
  console.error('❌ Gagal set persistence:', err);
});

/**
 * ✅ Listener auth realtime (check + auto-create Firestore user)
 */
export function listenAuthState(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          // Buat dokumen user kalau belum ada
          await setDoc(userRef, {
            fullName: user.displayName || 'Pengguna Baru',
            email: user.email,
            photoURL: user.photoURL || null,
          });
          console.log('✅ Data user baru dibuat di Firestore');
        }
      } catch (err) {
        console.error('❌ Gagal cek/buat user Firestore:', err);
      }

      // Kembalikan user ke callback
      callback(user);
    } else {
      callback(null);
    }
  });
}

/**
 * ✅ Logout
 */
export function logoutUser() {
  return signOut(auth);
}

/**
 * ✅ Login dengan Google
 */
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    console.log('✅ Login Google berhasil');
    Swal.fire('Berhasil', 'Login Google berhasil!', 'success');
  } catch (err) {
    console.error('❌ Gagal login Google', err);
    Swal.fire('Oops', 'Gagal login Google.', 'error');
  }
}

/**
 * ✅ Kirim Link ke Email
 */
export async function startSignInWithEmailLink(email) {
  const actionCodeSettings = {
    url: window.location.origin + '/#',
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
    Swal.fire('Berhasil', 'Link login sudah dikirim ke email Anda.', 'success');
  } catch (err) {
    console.error('❌ Gagal kirim link login', err);
    Swal.fire('Oops', 'Gagal kirim link login.', 'error');
  }
}

/**
 * ✅ Selesaikan sign-in via Email Link
 * Aman: HANYA panggil di main entry point.
 * Return true kalau sukses, false kalau gagal / URL bukan signInLink.
 */
export async function completeSignInWithEmailLink() {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem('emailForSignIn');

    if (!email) {
      console.warn('⚠️ Tidak ada emailForSignIn di localStorage.');
      return false; // biarkan pemanggil yang handle Swal
    }

    try {
      await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem('emailForSignIn');
      console.log('✅ Login Email Link berhasil');
      Swal.fire('Berhasil', 'Login dengan Email Link berhasil!', 'success');
      return true;
    } catch (err) {
      console.error('❌ Gagal login dengan link:', err);
      Swal.fire('Oops', 'Gagal login dengan link.', 'error');
      return false;
    }
  } else {
    return null; // Bukan signInLink, biarkan lewat
  }
}

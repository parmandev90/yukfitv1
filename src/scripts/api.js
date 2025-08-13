// Mendapatkan URL backend dari environment variable (jika tersedia), atau fallback ke localhost saat development
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8080";

/**
 * Mengirim data pengguna ke backend untuk mendapatkan rekomendasi olahraga.
 * @param {object} userData - Objek berisi data pengguna (age, gender, height, weight).
 * @returns {Promise<object>} - Hasil JSON dari API.
 */
export async function getRecommendations(userData) {
  if (!API_BASE_URL) {
    throw new Error("Konfigurasi API_BASE_URL tidak ditemukan. Cek environment variable atau fallback default.");
  }

  const response = await fetch(`${API_BASE_URL}/api/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(`Gagal terhubung ke server. Status: ${response.status}`);
  }

  return await response.json();
}

/**
 * Menyimpan data latihan yang dipilih pengguna.
 * @param {object} workoutData - Data latihan yang akan disimpan.
 * @returns {Promise<object>} - Hasil JSON dari API.
 */
export async function saveWorkout(workoutData) {
  if (!API_BASE_URL) {
    throw new Error("Konfigurasi API_BASE_URL tidak ditemukan.");
  }

  const response = await fetch(`${API_BASE_URL}/api/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workoutData),
  });

  if (!response.ok) {
    throw new Error(`Gagal menyimpan data latihan. Status: ${response.status}`);
  }

  return await response.json();
}

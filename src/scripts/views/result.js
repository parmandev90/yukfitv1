import { renderNavbar, afterRenderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';
import { getFirestore, doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { listenAuthState } from '../auth';

const db = getFirestore();

const resultPage = {
  render: async () => {
    const data = JSON.parse(localStorage.getItem('latestRecommendation'));

    if (!data) {
      return `
        ${renderNavbar()}
        <section class="result-section">
          <h2>❌ Data tidak ditemukan</h2>
          <p>Silakan lakukan tes terlebih dahulu.</p>
          <a href="#/tes" class="btn red">Kembali ke Tes</a>
        </section>
        ${renderFooter()}
      `;
    }

    const genderLabel = data.gender === 'Male' ? 'Laki-laki' : 'Perempuan';
    const bmiValue = parseFloat(data.bmi);

    let bmiStatus = '';
    let bmiColorClass = '';
    let pointerLeft = 0;
    let bmiDescription = '';

    if (bmiValue < 18.5) {
      bmiStatus = 'Kurus';
      bmiColorClass = 'kurus';
      pointerLeft = 15;
      bmiDescription = 'Berat badan Anda tergolong kurang. Tingkatkan asupan gizi dan olahraga yang sesuai.';
    } else if (bmiValue < 25) {
      bmiStatus = 'Normal';
      bmiColorClass = 'normal';
      pointerLeft = 45;
      bmiDescription = 'Selamat! Berat badan Anda normal. Pertahankan pola makan bergizi dan olahraga rutin.';
    } else if (bmiValue < 30) {
      bmiStatus = 'Gemuk';
      bmiColorClass = 'gemuk';
      pointerLeft = 70;
      bmiDescription = 'Berat badan Anda gemuk. Kontrol pola makan, perbanyak aktivitas fisik.';
    } else {
      bmiStatus = 'Obesitas';
      bmiColorClass = 'obesitas';
      pointerLeft = 90;
      bmiDescription = 'Anda obesitas. Segera atur pola makan sehat, tingkatkan olahraga, dan konsultasi ahli.';
    }

    localStorage.setItem('bmiStatus', bmiStatus);
    localStorage.setItem('bmiDescription', bmiDescription);

    const genderKey = data.gender === 'Female' ? 'female' : 'male';
    const figureName = `figure-${bmiStatus.toLowerCase()}-${genderKey}.webp`;

    const routeMap = {
      'berjalan': 'berjalan',
      'sepeda': 'bersepeda',
      'bersepeda': 'bersepeda',
      'berenang': 'berenang',
      'senam': 'senam',
      'yoga': 'yoga',
      'weightlifting': 'weightlifting',
      'angkat beban': 'weightlifting',
      'hiit': 'hiit',
      'kardio': 'kardio',
    };

    const recommendationList = Array.isArray(data.recommended_workouts) && data.recommended_workouts.length > 0
      ? data.recommended_workouts.map(item => {
          const nameLower = item.name.toLowerCase();
          const matchedPath = routeMap[nameLower];

          if (!matchedPath) {
            console.warn(`⚠️ Rekomendasi tidak dikenali: ${item.name}`);
            return `<div class="workout-item"><p class="unknown">❌ Rekomendasi tidak dikenal: ${item.name}</p></div>`;
          }

          return `
            <div class="workout-item">
              <a href="#/latihan/${matchedPath}" class="workout-link">
                ${item.name} <span class="confidence">(${(item.confidence * 100).toFixed(1)}%)</span>
              </a>
              <button class="btn small save-single-btn"
                data-name="${item.name}"
                data-confidence="${item.confidence}">
                ➕ Simpan
              </button>
            </div>
          `;
        }).join('')
      : '<p class="no-recommendation">Tidak ada rekomendasi tersedia.</p>';

    return `
      ${renderNavbar()}
      <section class="result-section" id="result-download">
        <h1>Hasil Rekomendasi Olahraga</h1>

        <div class="bmi-visual">
          <div class="bmi-figure">
            <img src="/assets/figures/${figureName}" alt="Ilustrasi Tubuh">
          </div>

          <div class="bmi-detail">
            <p id="user-name-display"><strong>Nama:</strong> ...</p>
            <ul class="result-list">
              <li><strong>Jenis Kelamin:</strong> ${genderLabel}</li>
              <li><strong>Usia:</strong> ${data.age} tahun</li>
              <li><strong>Tinggi:</strong> ${data.height} cm</li>
              <li><strong>Berat:</strong> ${data.weight} kg</li>
            </ul>

            <div class="bmi-info">
              <h2>BMI Anda adalah <span class="bmi-number">${bmiValue}</span></h2>
              <p>${bmiDescription}</p>
              <div class="bmi-status ${bmiColorClass}">${bmiStatus}</div>
              <div class="bmi-bar">
                <div class="bmi-bar-track"></div>
                <div class="bmi-bar-pointer" style="left: ${pointerLeft}%;"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="recommendation">
          <h2>Rekomendasi Olahraga:</h2>
          <div class="workout-list">${recommendationList}</div>
        </div>

        <div class="btn-center">
          <button id="saveResultBtn" class="btn green">💾 Simpan Hasil</button>
          <button id="download-result" class="btn download-btn">⬇️ Unduh Hasil</button>
          <a href="#/tes" id="btn-repeat" class="btn repeat-btn">🔁 Tes Lagi</a>
        </div>
      </section>
      ${renderFooter()}
    `;
  },

  afterRender: () => {
    afterRenderNavbar();

    const nameDisplay = document.getElementById('user-name-display');
    const downloadBtn = document.getElementById('download-result');
    const saveResultBtn = document.getElementById('saveResultBtn');
    const repeatBtn = document.getElementById('btn-repeat');

    const data = JSON.parse(localStorage.getItem('latestRecommendation'));
    const bmiStatus = localStorage.getItem('bmiStatus');
    const bmiDescription = localStorage.getItem('bmiDescription');

    listenAuthState(async (user) => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        nameDisplay.textContent = `Nama: ${userData.fullName || '-'}`;
      } else {
        localStorage.removeItem('latestRecommendation');
        localStorage.removeItem('bmiStatus');
        localStorage.removeItem('bmiDescription');
        window.location.hash = '#/home';
      }
    });

    saveResultBtn?.addEventListener('click', () => {
      listenAuthState(async (user) => {
        if (!user) {
          alert('⚠️ Login dulu untuk menyimpan hasil.');
          return;
        }

        const tersimpanRef = collection(db, 'users', user.uid, 'tersimpan');
        const newData = {
          createdAt: new Date().toISOString(),
          bmi: data.bmi,
          bmiStatus: bmiStatus,
          bmiDescription: bmiDescription,
          age: data.age,
          height: data.height,
          weight: data.weight,
          gender: data.gender,
        };
        await addDoc(tersimpanRef, newData);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Hasil BMI berhasil disimpan ke Tersimpan.',
          confirmButtonText: 'OK'
        });
      });
    });

    document.querySelectorAll('.save-single-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        listenAuthState(async (user) => {
          if (!user) {
            alert('⚠️ Login dulu.');
            return;
          }

          const latihanRef = collection(db, 'users', user.uid, 'latihan');
          const item = {
            createdAt: new Date().toISOString(),
            name: btn.dataset.name,
            confidence: parseFloat(btn.dataset.confidence),
          };
          await addDoc(latihanRef, item);
          Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: `${item.name} berhasil disimpan ke Latihan Saya.`,
            confirmButtonText: 'OK'
          });
        });
      });
    });

    downloadBtn?.addEventListener('click', () => {
      const resultSection = document.getElementById('result-download');

      const saveSingleBtns = document.querySelectorAll('.save-single-btn');
      downloadBtn.style.display = 'none';
      saveResultBtn.style.display = 'none';
      repeatBtn.style.display = 'none';
      saveSingleBtns.forEach(btn => btn.style.display = 'none');

      html2canvas(resultSection, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/webp');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'webp', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Hasil-BMI-${new Date().toISOString()}.pdf`);

        downloadBtn.style.display = 'inline-block';
        saveResultBtn.style.display = 'inline-block';
        repeatBtn.style.display = 'inline-block';
        saveSingleBtns.forEach(btn => btn.style.display = 'inline-block');
      });
    });
  },
};

export default resultPage;

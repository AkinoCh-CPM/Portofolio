let currentImage = 1; // Menyimpan nomor gambar saat ini
const totalImages = 3; // Jumlah gambar portofolio

// Fungsi untuk berpindah ke gambar berikutnya
function nextImage() {
  currentImage = (currentImage % totalImages) + 1; // Menambah nomor gambar, looping jika lebih dari total gambar
  updateImage();
}

// Fungsi untuk berpindah ke gambar sebelumnya
function prevImage() {
  currentImage = (currentImage - 1) < 1 ? totalImages : currentImage - 1; // Mengurangi nomor gambar, looping jika kurang dari 1
  updateImage();
}

// Fungsi untuk memperbarui gambar yang ditampilkan dengan efek transisi
function updateImage() {
  const portfolioImage = document.getElementById('portfolio-image');

  // Efek transisi untuk memudar keluar gambar lama
  portfolioImage.classList.remove('show');
  portfolioImage.style.opacity = 0;

  // Menunggu sedikit untuk efek transisi selesai, lalu mengganti gambar
  setTimeout(() => {
    portfolioImage.src = `Portofolio Saya ${currentImage}.jpg`; // Mengubah gambar
    portfolioImage.style.opacity = 1; // Menampilkan gambar baru
    portfolioImage.classList.add('show'); // Menambahkan kelas 'show' untuk efek fade in
  }, 1000); // Delay selama 1 detik untuk memberikan efek transisi mulus

  // Efek zoom untuk transisi yang lebih menarik
  portfolioImage.style.transform = 'scale(1.1)'; // Zoom in saat gambar muncul
  setTimeout(() => {
    portfolioImage.style.transform = 'scale(1)'; // Kembali ke ukuran normal setelah efek zoom
  }, 1500); // Waktu delay untuk zoom out
}

// Inisialisasi gambar pertama saat halaman pertama kali dimuat
window.onload = updateImage;

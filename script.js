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

    // Menyembunyikan gambar lama dengan efek transisi
    portfolioImage.classList.remove('show');
    setTimeout(() => {
        portfolioImage.src = `Portofolio Saya ${currentImage}.jpg`;
        portfolioImage.classList.add('show');
    }, 500); // Mempercepat transisi dari 1000ms ke 500ms
}

// Inisialisasi gambar pertama saat halaman pertama kali dimuat
window.onload = updateImage;

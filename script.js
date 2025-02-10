let currentImage = 1; // Nomor gambar saat ini
const totalImages = 3; // Jumlah gambar

// Fungsi berpindah ke gambar berikutnya
function nextImage() {
    currentImage = (currentImage % totalImages) + 1;
    updateImage();
}

// Fungsi berpindah ke gambar sebelumnya
function prevImage() {
    currentImage = currentImage - 1 < 1 ? totalImages : currentImage - 1;
    updateImage();
}

// Fungsi memperbarui gambar
function updateImage() {
    const portfolioImage = document.getElementById('portfolio-image');

    // Cek apakah elemen ditemukan
    if (!portfolioImage) return;

    // Efek transisi keluar
    portfolioImage.classList.remove('show');

    // Tunggu sebentar sebelum mengganti gambar
    setTimeout(() => {
        let newImageSrc = `Portofolio Saya ${currentImage}.jpg`;
        portfolioImage.src = newImageSrc;

        // Pastikan gambar dimuat sebelum menampilkan efek transisi
        portfolioImage.onload = () => {
            portfolioImage.classList.add('show');
        };
    }, 500);
}

// Jalankan gambar pertama saat halaman dimuat
window.onload = updateImage;

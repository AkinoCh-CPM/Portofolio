let currentImage = 1; // Menyimpan nomor gambar saat ini
const totalImages = 3; // Jumlah gambar portofolio

// Fungsi untuk berpindah ke gambar berikutnya
function nextImage() {
  currentImage = (currentImage % totalImages) + 1; // Menambah nomor gambar, looping jika lebih dari total gambar
  updateImage('next');
}

// Fungsi untuk berpindah ke gambar sebelumnya
function prevImage() {
  currentImage = (currentImage - 1) < 1 ? totalImages : currentImage - 1; // Mengurangi nomor gambar, looping jika kurang dari 1
  updateImage('prev');
}

// Fungsi untuk memperbarui gambar yang ditampilkan dengan transisi flip dan efek zoom
function updateImage(direction) {
  const portfolioImage = document.getElementById('portfolio-image');
  
  // Menambahkan efek transisi untuk zoom dan rotasi
  portfolioImage.classList.remove('show'); // Menyembunyikan gambar dengan transisi
  portfolioImage.style.transform = direction === 'next' ? 'rotateY(180deg)' : 'rotateY(-180deg)';
  portfolioImage.style.opacity = 0; // Memulai transisi dengan opacity 0

  // Mengatur gambar setelah sedikit delay untuk transisi flip
  setTimeout(() => {
    portfolioImage.style.backgroundImage = `url('Portofolio Saya ${currentImage}.jpg')`; // Mengubah gambar latar belakang
    portfolioImage.style.transform = 'rotateY(0deg)'; // Memutar kembali gambar ke posisi normal
    portfolioImage.style.opacity = 1; // Menampilkan gambar dengan transisi
    
    // Menambahkan efek zoom dan rotasi
    setTimeout(() => {
      portfolioImage.classList.add('show');
    }, 100); // Memberikan sedikit delay agar transisi zoom bekerja dengan halus
  }, 500); // Menunggu setengah detik sebelum mengganti gambar untuk transisi flip yang halus
}

// Inisialisasi gambar pertama saat halaman pertama kali dimuat
window.onload = updateImage('next');

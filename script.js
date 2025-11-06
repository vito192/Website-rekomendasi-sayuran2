document.addEventListener('DOMContentLoaded', function() {
    // 1. Fungsi untuk menambah efek interaktif pada kartu saat di-hover
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Efek saat kursor masuk (mouse enter)
        card.addEventListener('mouseenter', function() {
            // Mengubah style kartu saat di-hover (bisa ditambahkan style lain di CSS)
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
            this.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });

        // Efek saat kursor keluar (mouse leave)
        card.addEventListener('mouseleave', function() {
            // Mengembalikan style kartu ke kondisi awal
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // 2. Efek Fade-in untuk Card Container (Rekomendasi Sayuran)
    const cardContainer = document.querySelector('.card-container');
    if (cardContainer) {
        // Set awal: sembunyikan container (gunakan CSS property opacity)
        cardContainer.style.opacity = '0';
        // Tampilkan container setelah sedikit jeda
        setTimeout(() => {
            cardContainer.style.transition = 'opacity 1s ease-in';
            cardContainer.style.opacity = '1';
        }, 300); // Jeda 300ms
    }

    // 3. Menampilkan pesan sapaan di konsol
    console.log("Website SayurSehat.id berhasil dimuat! Selamat Mencoba Fitur Interaktif.");

    // Tambahan: Contoh interaksi sederhana untuk tombol "Mulai Rekomendasi"
    //const btnRekomendasi = document.querySelector('.hero-text .btn');
    //if (btnRekomendasi) {
        //btnRekomendasi.addEventListener('click', function(event) {
            // Menampilkan alert saat tombol diklik
            //alert('Anda akan diarahkan ke halaman rekomendasi sayuran. Selamat memilih!');
            // Jika Anda ingin mencegah perpindahan halaman, gunakan event.preventDefault() di sini:
            // event.preventDefault();
        //});
    //}


})
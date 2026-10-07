document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    // Pengiriman Form Tanya/Booking ke WhatsApp Pemilik
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Ganti nomor ini dengan nomor WhatsApp pemilik kost (format 62)
        const nomorWA = '6281234567890';

        const nama = document.getElementById('nama').value;
        const telepon = document.getElementById('telepon').value;
        const kamar = document.getElementById('pilihan-kamar').value;
        const tanggal = document.getElementById('tanggal-masuk').value;

        // Susun teks pesan
        const pesan = `Halo, saya berminat untuk memesan/tanya seputar kamar kost:%0A%0A` +
                      `*Nama:* ${encodeURIComponent(nama)}%0A` +
                      `*No. HP:* ${encodeURIComponent(telepon)}%0A` +
                      `*Kamar:* ${encodeURIComponent(kamar)}%0A` +
                      `*Rencana Masuk:* ${encodeURIComponent(tanggal)}%0A%0A` +
                      `Apakah kamar tersebut masih tersedia?`;

        // Buka tautan WhatsApp
        window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
    });
});
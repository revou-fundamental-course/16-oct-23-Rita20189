// Untuk menangani formulir kontak
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Lakukan tindakan Anda di sini, misalnya kirim data ke server, validasi, dll.
    // Contoh sederhana:
    console.log('Nama: ' + name);
    console.log('Email: ' + email);
    console.log('Nomor Telepon: ' + phone);
    console.log('Pesan: ' + message);

    // Atau Anda dapat menambahkan logika lain di sini
    alert('Pesan Anda telah terkirim. Terima kasih!');
});

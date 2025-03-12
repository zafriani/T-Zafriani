// Tampilkan pesan selamat datang setelah beberapa detik
window.onload = function() {
    setTimeout(function() {
        alert("Selamat datang di Perpustakaan T Zafriani!");
    }, 1000);
};

// Tambahkan event untuk tombol interaktif
document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    button.textContent = "Klik untuk Motivasi";
    button.onclick = function() {
        alert("Teruslah belajar dan membaca untuk masa depan yang lebih cerah!");
    };

    let container = document.querySelector(".container");
    container.appendChild(button);
});

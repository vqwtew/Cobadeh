const quotes = [
    "Amsal 23:18 Karena masa depan sungguh ada, dan harapanmu tidak akan hilang."
];

// Event listener untuk memastikan musik diputar setelah interaksi pengguna
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // Function to play music
    function playMusic() {
        // Coba memutar musik setelah interaksi pengguna
        if (audio.paused) {
            audio.play().then(() => {
                console.log("Music started playing.");
            }).catch(error => {
                console.log("Autoplay blocked. Please interact with the page.");
            });
        }
    }

    // Memutar musik saat tombol ditekan atau halaman diklik (pertama kali)
    document.getElementById("generateQuote").addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quoteDisplay = document.getElementById("quoteDisplay");

        quoteDisplay.textContent = quotes[randomIndex];
        quoteDisplay.style.animation = 'fadeIn 1.5s ease-in-out';

        setTimeout(() => {
            quoteDisplay.style.animation = '';
        }, 1500);

        // Coba putar musik saat tombol diklik
        playMusic();
    });

    // Tambahkan event listener lain jika ada interaksi pengguna pertama kali
    window.addEventListener("click", playMusic, { once: true });
    window.addEventListener("keydown", playMusic, { once: true });
});


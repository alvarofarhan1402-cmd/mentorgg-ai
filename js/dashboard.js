// ===== DASHBOARD =====

// Simulasi data user (nanti dari backend)
const userData = {
    username: 'Farhan',
    rank: 'Epic',
    totalMatch: 248,
    winRate: '58%',
    heroFavorit: 'Fanny',
    aiScore: 72
};

// Tampilkan greeting berdasarkan waktu
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi';
    if (hour < 15) return 'Selamat Siang';
    if (hour < 18) return 'Selamat Sore';
    return 'Selamat Malam';
}

// Jalankan saat halaman dibuka
document.addEventListener('DOMContentLoaded', function() {
    console.log(`${getGreeting()}, ${userData.username}!`);
    console.log('Dashboard berhasil dimuat.');
});
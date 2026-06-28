// ===== HANDLE LOGIN =====
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validasi input kosong
    if (email === '' || password === '') {
        alert('Email dan password tidak boleh kosong!');
        return;
    }

    // Validasi format email
    if (!email.includes('@')) {
        alert('Format email tidak valid!');
        return;
    }

    // Sementara tampilkan pesan sukses
    // Nanti akan dihubungkan ke backend
    alert('Login berhasil! Dashboard akan segera dibuka.');
window.location.href = 'dashboard.html';
}// ===== HANDLE REGISTER =====
function handleRegister() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validasi input kosong
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Semua kolom harus diisi!');
        return;
    }

    // Validasi format email
    if (!email.includes('@')) {
        alert('Format email tidak valid!');
        return;
    }

    // Validasi panjang password
    if (password.length < 6) {
        alert('Password minimal 6 karakter!');
        return;
    }

    // Validasi konfirmasi password
    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak sama!');
        return;
    }

    // Sementara tampilkan pesan sukses
    // Nanti akan dihubungkan ke backend
    alert('Registrasi berhasil! Silakan login.');
    window.location.href = 'login.html';
}
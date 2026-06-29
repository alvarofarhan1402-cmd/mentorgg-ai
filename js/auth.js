async function handleLogin() {
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
if (!email || !password) { alert('Isi semua kolom!'); return; }
fetch('http://127.0.0.1:8000/auth/login', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})}).then(r=>r.json()).then(data=>{ if (data.status==='success') { window.location.href='dashboard.html'; } else { alert(data.message); } });
}
async function handleRegister() {
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirm-password').value;
if (!username||!email||!password) { alert('Semua kolom harus diisi!'); return; }
if (password!==confirmPassword) { alert('Password tidak sama!'); return; }
fetch('http://127.0.0.1:8000/auth/register', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,email,password})}).then(r=>r.json()).then(data=>{ if (data.status==='success') { alert('Registrasi berhasil!'); window.location.href='login.html'; } else { alert(data.message); } });
}
// src/js/utils/authGuard.js

export function checkAuthentication() {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        // Jika tidak ada token, arahkan pengguna ke halaman login
        window.location.href = '../login.html';
    }
}

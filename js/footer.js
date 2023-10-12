// JavaScript pentru a afișa data și ora curentă
function displayCurrentTime() {
    const currentTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedTime = currentTime.toLocaleDateString('ro-RO', options);
    document.getElementById('current-time').textContent = formattedTime;
}

// Apelăm funcția pentru a afișa data și ora curentă la încărcarea paginii
displayCurrentTime();

// Adăugăm un eveniment de submit pentru formularul de abonare la newsletter (aici poți adăuga cod pentru a trimite datele la server)
document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Mulțumim pentru abonare! Adresa ta de email: ${email}`);
});
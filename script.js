document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Validation basique de l'email
    if (!validateEmail(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    // Sauvegarde des informations d'inscription (simple exemple en localStorage)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Inscription réussie ! Veuillez vous connecter.");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validation des informations de connexion
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        document.getElementById('downloadSection').classList.remove('hidden');
        alert("Connexion réussie !");
    } else {
        alert("Email ou mot de passe incorrect.");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

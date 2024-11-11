// Registro de usuario
document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    const genero = document.getElementById('genero').value;

    const user = {
        nombres,
        apellidos,
        email,
        contraseña,
        genero
    };

    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'login.html';
});

// Inicio de sesión
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const contraseña = document.getElementById('login-contraseña').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.contraseña === contraseña) {
        localStorage.setItem('loggedIn', true);
        window.location.href = 'profile.html';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});

// Mostrar el nombre del usuario en el perfil
if (localStorage.getItem('loggedIn') === 'true') {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('nombre-usuario').textContent = `${user.nombres} ${user.apellidos}`;
} else {
    window.location.href = 'login.html';
}

// Cerrar sesión
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Cuando se hace clic en el botón hamburguesa, se agrega o elimina la clase 'active' para mostrar el menú
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

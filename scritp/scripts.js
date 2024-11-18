
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

if (localStorage.getItem('loggedIn') === 'true') {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('nombre-usuario').textContent = `${user.nombres} ${user.apellidos}`;
} else {
    window.location.href = 'login.html';
}
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});


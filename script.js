// Credenciales del "super host"
const superUser = {
    username: "migra",
    password: "ponchoro231*"
};

// Función de Inicio de Sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener valores de usuario y contraseña
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar las credenciales
    if (username === superUser.username && password === superUser.password) {
        // Inicio de sesión exitoso: mostrar sección de servicios y ocultar el formulario de login
        document.getElementById("login").style.display = "none";
        document.getElementById("servicios").style.display = "block";
    } else {
        // Inicio de sesión fallido: mostrar mensaje de error
        document.getElementById("loginMessage").style.display = "block";
    }
});

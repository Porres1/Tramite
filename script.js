// Credenciales del "super host" (administrador)
const superUser = {
    username: "migra",
    password: "ponchoro231*"
};

// Función para generar un usuario y contraseña únicos cada día
function generateDailyUser() {
    const today = new Date().toDateString(); // Fecha actual en texto
    const user = "user_" + today.replace(/\s/g, "_"); // Usuario diario
    const pass = Math.random().toString(36).substring(2, 8); // Contraseña aleatoria de 6 caracteres
    return { user, pass };
}

// Generar usuario y contraseña temporal para hoy
const dailyUser = generateDailyUser();

// Mostrar el usuario y contraseña diarios en la página para referencia
const dailyCredentialsElement = document.getElementById("dailyCredentials");
dailyCredentialsElement.innerText = `Usuario del día: ${dailyUser.user}, Contraseña del día: ${dailyUser.pass}`;

// Lógica de Inicio de Sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío automático del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación de credenciales
    if (
        (username === superUser.username && password === superUser.password) ||
        (username === dailyUser.user && password === dailyUser.pass)
    ) {
        // Ocultar el formulario de inicio de sesión y mostrar encabezado y servicios
        document.getElementById("login").style.display = "none";
        document.getElementById("mainHeader").style.display = "block"; // Mostrar encabezado
        document.getElementById("servicios").style.display = "block"; // Mostrar servicios
    } else {
        // Mostrar mensaje de error
        document.getElementById("loginMessage").style.display = "block";
    }
});



//formulario registro


const contrasenaInput = document.getElementById("password");
const confirmContrasenaInput = document.getElementById("confirm_password");

confirmContrasenaInput.addEventListener("blur", (evento) => {
    const contrasena = contrasenaInput.value;
    const confirmContrasena = confirmContrasenaInput.value;

    // Verifica si ambos campos de contraseña no están vacíos antes de verificar si coinciden
    if (contrasena && confirmContrasena && contrasena !== confirmContrasena) {
        alert("Las contraseñas no coinciden.");
        evento.preventDefault();
    }
});








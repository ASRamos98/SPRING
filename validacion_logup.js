

//formulario registro

let contrasena = document.getElementById("password");
let confirm_contrasena = document.getElementById("confirm_password");

contrasena.addEventListener("blur", () => {

    contrasena = document.getElementById("password").value;
    confirm_contrasena = document.getElementById("confirm_password").value;

    if(contrasena && contrasena.length < 8){
        alert("La contraseña debe tener al menos 8 caracteres.");
    }
    else if(contrasena !== confirm_contrasena){
        alert("Las contraseñas no coinciden.");
    }
});







let contra = document.getElementById("contrasena");

contra.addEventListener("blur", () => {
    contra = contra.value;
    if(contra && contra.length < 8){
        alert("La contraseña debe tener al menos 8 caracteres.")
    }
})
var usuario1 = localStorage.getItem("usuarioIngresado");
var contrasena1 = localStorage.getItem("contraIngresado");

function validarCredenciales() {
  // Obtener los valores del usuario y la contraseña
  var logusuario1 = document.getElementById("logusername").value;
  var logcontrasena1 = document.getElementById("logpassword").value;

  // Verificar si el usuario y la contraseña son válidos
  if (logusuario1 === usuario1 && logcontrasena1 === contrasena1) {
    // Redireccionar a la página "inicio.html"
    alert("Inicio de sesión exitoso!")
    window.open("inicio.html");
  } else {
    alert(
      "Usuario y contraseña no existentes!"
    );
  }
}
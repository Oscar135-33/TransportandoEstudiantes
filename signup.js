function validarRegistro() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validación simple, ajusta según tus necesidades
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, completa todos los campos.');
    } else if (username.length > 7 || password.length > 7) {
      alert('El usuario y la contraseña no deben tener más de 7 dígitos.');
    } else if (username > 3000000 || isNaN(username) || username < 0) {
      alert('El usuario debe ser un número entero positivo no mayor a 3,000,000.');
    } else {
      alert('Registro exitoso. ¡Bienvenido, ' + username + '!');
      localStorage.setItem("usuarioIngresado", username);
      localStorage.setItem("contraIngresado", password);
      window.open("inicio.html");
    }
}
function login() {
  const password = document.getElementById("password").value;

  if (password === "benja144") {
    window.location.href = "access.html";
  } else {
    alert("Acceso denegado. Contraseña incorrecta.");
  }
}

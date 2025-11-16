function login() {
  const password = document.getElementById("password").value;

  if (password === "1432828684317753355") {
    window.location.href = "access.html";
  } else {
    alert("Acceso denegado. no intentes acceder donde no estas autorizado.");
  }
}



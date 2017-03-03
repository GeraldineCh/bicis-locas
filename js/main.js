function validateForm(){
 var nombre = document.getElementById("name").value;
 var apellido = document.getElementById("lastname").value;
 var contrasena = document.getElementById("input-password").value;
 var correo = document.getElementById("input-email").value;
 var modelo = document.getElementsByClassName("form-control").value;

if((nombre != "" && apellido  != "") && (contrasena != "" && modelo != "")){
  if(!nombre.match(/[A-Z]{1,}[a-z]+/)){
    alert("Estructura de nombre no válida: \n Primera letra debe ser máyuscula");
  }

  if(!apellido.match(/[A-Z]{1,}[a-z]+/)){
    alert("Estructura de apellido no válida: \n Primera letra debe ser máyuscula");
  }

  if(!correo.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/)){
    alert("Estructura de correo no válida: \n Ingresar email@domain.com");
  }

  if(contrasena.length < 6 || contrasena == "password" || contrasena == "123456" || contrasena == "098754"){
    alert("Estructura de contraseña no válida: \n Ingresar contraseña de 6 caracteres");
  }

}
else
	{alert("Falta ingresar iformación obligatoria.");}

}
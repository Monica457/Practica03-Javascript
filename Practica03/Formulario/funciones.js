function validar() {
    var valor1 = document.getElementById("cedula").value;
    var valor2 = document.getElementById("cedula").value;
    var valor3 = document.getElementById("cedula").value;
    var valor4 = document.getElementById("cedula").value;
    var valor5 = document.getElementById("cedula").value;
    var valor6 = document.getElementById("cedula").value;
    var valor7 = document.getElementById("cedula").value;
    var valor8 = document.getElementById("cedula").value;
    if (valor1.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    if (valor2.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    if (valor3.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    if (valor4.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    if (valor5.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    if (valor6.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    if (valor7.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    if (valor8.length == 0) {
        document.getElementById("Comentarios").innerHTML = ("CAMPOS BACIO");
        return false;
    }
    return true;
}

  function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    var telefono= document.getElementById("telefono").value.trim();
    var telefono= document.getElementById("telefono").value.trim();
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (key < 48 || key > 57) {
      e.preventDefault();
    }
    if (telefono.length == 10){
        e.preventDefault();
    }

    if (cad !== "" && longitud === 10){
        for(i = 0; i < longcheck; i++){
          if (i%2 === 0) {
            var aux = cad.charAt(i) * 2;
            if (aux > 9) aux -= 9;
            total += aux;
          } else {
            total += parseInt(cad.charAt(i));
          }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud-1) == total) {
          document.getElementById("mensajeCedula").innerHTML = ("CEDULA Válida");
          if (!/^([0-9])*$/.test(numero)){
              document.getElementById("mensajeCedula").innerHTML = (" no es un número");
         }
        }else{
          document.getElementById("mensajeCedula").innerHTML = ("CEDULA INVÁLIDA");
        }
    }
    
  }

  function soloLetras(e){
    var key = window.event ? e.which : e.keyCode;
    var tecla = String.fromCharCode(key).toLowerCase();
    var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    var especiales = "8-37-39-46";
  
    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }
     }

    if(letras.indexOf(tecla)==-1 && !tecla_especial){
         return false;
    }


 }

 function validaEdat(e){
    vesSumant();
    var vfalladata = false;
    var vregexNaix = /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    var vdataNaix = document.formu.dataNaix.value;
    var vanyData = vdataNaix.substring(vdataNaix.length-4, 4);

    if((!vregexNaix.test(vdataNaix)) || (/^(\d{4})$/.test(vanyData))){
        alert("Por favor, empleneu la data com dd/mm/aaaa.");
        document.formulario01.fecha.value = "";
        document.formulario01.fecha.focus();
        return false;
    }

    controlaCaselles();
    return true;
}

 function validar_clave(e){
    var clave= document.getElementById("contrasena").value.trim();
    var key = window.event ? e.which : e.keyCode;
    var tecla = String.fromCharCode(key).toLowerCase();
    var letras = "0123456789zxcvbnmasdfghjklqwertyuiop@_$";
    var especiales = "8-37-39-46";
  
    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }
     }
    if(letras.indexOf(tecla)==-1 && !tecla_especial){
         return false;
    }
    
}

function validarCorreo(){
	var correo = document.getElementById("correo").value.trim();
	
	var coValido="@est.ups.edu.ec";
	var coValido2="@ups.edu.ec";

	var corr1 = correo.substr(correo.length-15);
	
	var corr2 = correo.substr(correo.length-11);
	
	if(corr1 != coValido || corr2 != coValido2  ){
		document.getElementById("mensajeCorreo").innerHTML = ("DIRECCION DE CORREO INVÁLIDA ");
		
	}
	if (corr1 ==  coValido){
	    if( correo.length < 18 ){
		    document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DEBE CONTENER AL MENOS 3 VALORES ALFANUMÉRICOS ");
		}else{
			document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DE CORREO ES VÁLIDA");
	    }
			
	}	
	
	else if (corr2 == coValido2 ){
        if( correo.length<14 ){
			document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DEBE CONTENER AL MENOS 3 VALORES ALFANUMÉRICOS ");
		}else{
			document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DE CORREO ES VÁLIDA ");
		}	
	}
	
	if(correo.length == 0){
	document.getElementById("mensajeCorreo").innerHTML = (" El campo del correo esta vacio ");
	
		}
		if(correo.length < 10){
	document.getElementById("mensajeCorreo").innerHTML = (" ");
		}
	}
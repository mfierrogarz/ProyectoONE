function encriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensajes = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");

    let textoCifrado = texto
      .replace(/i/gi, "imes")
      .replace(/e/gi, "enter")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat")

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensajes.textContent = "Texto encriptado con éxito";
        parrafo.textContent ="";
        logo.src = "./img/principal1.jpeg";
    } else {
        logo.src = "./img/principal.png";
        tituloMensajes.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algun texto")
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensajes = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");

    let textoCifrado = texto
     .replace(/imes/gi, "i")
     .replace(/enter/gi, "e")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensajes.textContent = "Texto desencriptado con éxito";
        parrafo.textContent ="";
        logo.src = "./img/principal2.jpeg";
    } else {
        logo.src = "./img/principal.png";
        tituloMensajes.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algun texto")
    }

}


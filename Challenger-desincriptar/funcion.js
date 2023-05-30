function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoEscrito = document.getElementById("texto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        swal("Ooops!", "Solo son permitidas letras minúsculas y sin acentos", "info");
        return true;
    }



    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Informacion encriptado con éxito";
      parrafo.textContent = "Gracias por participar";
      muñeco.src = "./img/incognito.jpg";
    } else {

      swal("Ooops!", "Debes ingresar un texto", "error");
    }
  }




  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Informacion desencriptado con éxito";
        parrafo.textContent = "Gracias por participar";
        muñeco.src = "./img/hacker.jpg";
      } else {

        swal("Ooops!", "Debes ingresar un texto", "error");
      }
  }
  
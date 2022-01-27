
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

let inputUsuario = document.querySelector("#input-texto");
let botonEncriptar = document.querySelector("#btn-encriptar");
let botonDesencriptar = document.querySelector("#btn-desencriptar");
let resultadoEncriptado = document.querySelector("#msg");


botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    resultadoEncriptado.value = inputUsuario.value;
});


// inputUsuario.addEventListener("input", () => console.log(inputUsuario.value));
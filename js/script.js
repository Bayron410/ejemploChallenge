
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

let botonEncriptar = document.querySelector("#btn-encriptar");
let botonDesencriptar = document.querySelector("#btn-desencriptar");
let inputUsuario = document.querySelector("#input-texto");
let respuestaEncriptada = document.querySelector("#msg");
let botonCopiar = document.querySelector("#btn-copy");

botonEncriptar.addEventListener("click", function() {
    let encriptado = encriptar(inputUsuario.value);
    respuestaEncriptada.value = encriptado;
});

function encriptar(texto) {
    let resultado = texto.replaceAll("e", "hola");
    resultado = resultado.replaceAll("i", "chao");
    return resultado;
}

botonDesencriptar.addEventListener("click", function() {
    let desencriptado = desencriptar(inputUsuario.value);
    respuestaEncriptada.value = desencriptado;
});

function desencriptar(texto) {
    let resultado = texto.replaceAll("hola", "e");
    resultado = resultado.replaceAll("chao", "i")
    return resultado;
}

botonCopiar.addEventListener("click", function(){
    navigator.clipboard.writeText(respuestaEncriptada.value);
});
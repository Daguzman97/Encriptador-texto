const textoEntrada = document.getElementById("miTextarea");
const divnoEncontrado = document.getElementById("noEncontrado");
const divEncontrado = document.getElementById("encontradotext");
const textoSalida = document.getElementById("textSalida");
const avisoTextoCopiado = document.getElementById("texCop");
var prohibidos = /[A-ZáéíóúÁÉÍÓÚ]/;


function encriptar(texto){
    return texto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
}

function desencriptar(texto){
    return texto.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g, 'u');
}

function botonCopiar(){
    navigator.clipboard.writeText(textoSalida.textContent);
    avisoTextoCopiado.style.opacity = '1';
    setTimeout(() => {avisoTextoCopiado.style.opacity = '0';}, 700);

}

function encriptarTexto(){
    let textoPuro = textoEntrada.value;

    if(prohibidos.test(textoPuro)){
        alert("Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos.");
    }
    else{
        divnoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoEncriptado = encriptar(textoPuro);
        textoSalida.textContent = textoEncriptado;
    }
}

function desencriptar(texto){
    return texto.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g, 'u');
}

function desencriptarTexto(){
    let textoPuro = textoEntrada.value;
    if(prohibidos.test(textoPuro)){
        alert("Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos.");
    }
    else{
        divnoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoDesencriptado = desencriptar(textoPuro);
        textoSalida.textContent = textoDesencriptado;
    }
    
}

function condicionesInciales(){
    if(textoEntrada.value == ""){
        divnoEncontrado.style.display = 'inline-block';
        divEncontrado.style.display = 'none';
    }
}

setInterval(condicionesInciales,100);
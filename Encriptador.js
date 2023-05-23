const textArea = document.querySelector(".texto-ingreso");
const mensaje = document.querySelector (".Mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value="" ;
    mensaje.style.backgroundImage ="none";
    mensaje.style.fontWeight = "bold";
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = Desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value= " " ;
}

function Desencriptar(stringDesencriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada
}

function btnCopiar(){
    var contenido = document.getElementById('mensaje')
    mensaje.select();
    document.execCommand('copy');
}



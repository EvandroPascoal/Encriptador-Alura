const checkbox = document.getElementById('chk');
const logo = document.getElementById('logo');
const aviso = document.getElementById('avisoImg');
var textInput = document.querySelector("#entradaTexto");
var outInput = document.querySelector("#textoConvertido");
var conteudoOriginal = document.getElementById('caixaDireita').innerHTML;
const caixaDireita = document.getElementById('caixaDireita');


checkbox.addEventListener('change', function() {
    const root = document.documentElement;

    if (this.checked) {
        root.style.setProperty('--preto', '#DFDFDF');
        root.style.setProperty('--branco', '#000000');
        root.style.setProperty('--azulEscuro', '#6A6E79');
        root.style.setProperty('--verde', '#01C38E');
        root.style.setProperty('--amarelo', '#FFDE67');
        root.style.setProperty('--place', '#0000008e');

        logo.src = 'img/logoPreta.png';
        aviso.src = 'img/avisoPreto.png';

    } else {
        // Voltar para as cores originais
        root.style.setProperty('--preto', '#1A1E29');
        root.style.setProperty('--branco', '#fff');
        root.style.setProperty('--azulEscuro', '#132D46');
        root.style.setProperty('--verde', '#01C38E');
        root.style.setProperty('--amarelo', '#FFDE67');
        root.style.setProperty('--place', '#ffffff9c');

        logo.src = 'img/logoEncriptador.png';
        aviso.src = 'img/avisoBranco.png';
    }
});


function criptografar() {
    var texto = textInput.value;

    if (texto.trim() !== "") { // Verifica se o texto não está vazio
        var resultoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        document.getElementById('caixaDireita').innerHTML = 
            '<textarea readonly id="texto2">' + resultoCripto + '</textarea>' + '<div class="botoes2">' +
            '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button class="btn__copiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';

            caixaDireita.style.justifyContent = 'space-between';
    } else {
        alert("Por favor, insira algum texto para criptografar.");
    }
}

function descriptografar() {
    var texto = textInput.value;

    if (texto.trim() !== "") { // Verifica se o texto não está vazio
        var resultoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById('caixaDireita').innerHTML = 
            '<textarea readonly id="texto2">' + resultoDescripto + '</textarea>' + '<div class="botoes2">' +
            '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button class="btn__copiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';

            caixaDireita.style.justifyContent = 'space-between';
    } else {
        alert("Por favor, insira algum texto para descriptografar.");
    }
}


function copiar() {
    var textoCopiar = document.getElementById('texto2');
    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto Copiado!");
}

function limpar() {
    caixaDireita.style.justifyContent = 'center';
    document.getElementById('caixaDireita').innerHTML = conteudoOriginal;

    document.getElementById('entradaTexto').value = "";

    
}


function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


document.getElementById('texto').addEventListener('input', function () {
    
    this.value = removerAcentos(this.value);
});

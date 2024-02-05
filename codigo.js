var textoInput = document.querySelector("#input_texto");
var outInput = document.querySelector("#output_texto");


function criptografar(){
  var texto = textoInput.value;
  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  document.getElementById('output_texto').innerHTML = '<textarea readonly id="resultado_texto" class="texto_resultado">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textoInput.value;
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output_texto').innerHTML = '<textarea readonly id="resultado_texto" class="texto_resultado">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('resultado_texto');
    textoCop.select();
    document.execCommand('copy');
    input_texto.value = "";

}  
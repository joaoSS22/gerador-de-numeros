let listaDeNumeros = [];


function sortear(){
    gerarNumerosAleatorios();
}

function gerarNumerosAleatorios() {
    let quantidadeDeNumeros = document.getElementById('quantidade').value;
    let minimo = document.getElementById('de').value;
    let maximo = document.getElementById('ate').value;

for (let i = quantidadeDeNumeros; i > 0; i--){
    let numerosSorteados = parseInt(Math.random()*maximo +1);

    if (numerosSorteados < minimo) {
      return gerarNumerosAleatorios();  
    }else{

    listaDeNumeros.push (numerosSorteados);}
    console.log (listaDeNumeros);}
        
        return numerosSorteados;
            }

function alterarTexto (tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML(texto);
    
}
  
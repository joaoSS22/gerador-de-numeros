let listaDeNumeros = [];



function sortear(){
    gerarNumerosAleatorios();
}

function gerarNumerosAleatorios() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);

for (let i = quantidadeDeNumeros; i > 0; i--){
    let numerosSorteados = parseInt(Math.random()*maximo +1);

    if (numerosSorteados < minimo) {
      return gerarNumerosAleatorios();  
    }else{

    listaDeNumeros.push (numerosSorteados);}
    console.log (listaDeNumeros);}

        alterarTexto('resultado', `Números sorteados: ${listaDeNumeros}`);

        return numerosSorteados;
        
            }

function alterarTexto (id , texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
    
}

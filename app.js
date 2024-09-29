function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);

    let listaDeNumeros = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = gerarNumerosAleatorios(minimo , maximo);
        listaDeNumeros.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaDeNumeros}</label>`;
    alterarStatusDoBotao();
}

function gerarNumerosAleatorios(min , max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

            }


function alterarStatusDoBotao() {

        let botao = document.getElementById('btn-reiniciar');

        if (botao.classList.contains('container__botao-desabilitado')) {

            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');

        } else {

            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');

        }
            }

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '';
    alterarStatusDoBotao();
}


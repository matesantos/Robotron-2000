import { pecas } from './peca.js';
const controles = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
console.log(estatisticas)

controles.forEach(controle => {
    controle.addEventListener('click', evt => {
        manipulaDados(evt.target.dataset.controle, evt.target.parentNode);
        atualizaEstatistica(evt.target.dataset.peca);
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    peca.value = operacao === "-" 
        ? 
    parseInt(peca.value) - 1 
        : 
    parseInt(peca.value) + 1
}

function atualizaEstatistica(peca){
    estatisticas.forEach(elemento => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
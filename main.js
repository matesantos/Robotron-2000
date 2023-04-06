const controles = document.querySelectorAll("[data-controle]");
import { pecas } from './peca.js';

controles.forEach(controle => {
    controle.addEventListener('click', 
        evt => manipulaDados(evt.target.dataset.controle, evt.target.parentNode))
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    peca.value = operacao === "-" 
        ? 
    parseInt(peca.value) - 1 
        : 
    parseInt(peca.value) + 1
}
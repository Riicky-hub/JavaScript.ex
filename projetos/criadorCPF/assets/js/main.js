import GeraCPF from "./GeraCPF.js";
(() => {
    const newCpf = new GeraCPF;
    const text = document.querySelector('h5.resultado');
    const button = document.querySelector('button.resultado__button');
    button.addEventListener('click', () => {
        const cpf = newCpf.gerar();
        text.innerHTML = cpf;
    })
})();
import criarSenha from "./Geradores.js";
const btn = document.querySelector('button.btn');
const inputLimit = document.querySelector('#input__quantidade');
const inputMaius = document.querySelector('#input__maius');
const inputMinus = document.querySelector('#input__minus');
const inputNum = document.querySelector('#input__num');
const inputSymbol = document.querySelector('#input__symbol');
const response = document.querySelector('div.response');
const text = document.createElement('h3');

btn.addEventListener('click', () => {
    let senha = criarSenha(inputLimit.value, inputMaius.checked, inputMinus.checked, inputNum.checked, inputSymbol.checked);
    text.innerText = senha;
    response.appendChild(text);
});
function meuEscopo() {
    let respostaBlock = document.querySelector('div.resposta');
    let form = document.querySelector('form.form');
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let peso = document.querySelector("input.input-peso");
        let altura = document.querySelector('input.input-altura');
        peso = peso.value;
        altura = altura.value;
        let resultado = Number(peso / (altura * 2));
        if(resultado <= 18,5) {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4>Seu IMC é <span>${resultado}</span> e seu status é: <span>Abaixo do peso!</span></h4></div>`
        } else if(resultado > 18,5 && resultado <= 24,9) {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4>Seu IMC é <span>${resultado}</span> e seu status é: <span>Peso normal!</span></h4></div>`
        } else if(resultado > 24,9 && resultado <= 29) {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4>Seu IMC é <span>${resultado}</span> e seu status é: <span>Sobrepeso!</span></h4></div>`
        } else if(resultado > 29 && resultado <= 34,9) {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4>Seu IMC é <span>${resultado}</span> e seu status é: <span>Obesidade grau 1</span></h4></div>`
        } else if(resultado > 34,9 && resultado <= 39,9) {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4>Seu IMC é <span>${resultado}</span> e seu status é: <span>Obesidade grau 2</span></h4></div>`
        } else if(resultado > 39,9) {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4>Seu IMC é <span>${resultado}</span> e seu status é: <span>Obesidade grau 3</span></h4></div>`
        } else if(peso == NaN || altura == NaN) {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4><span class="error">Valor Inválido</span></h4></div>`
        } else {
            respostaBlock.innerHTML += `<div class="respostaBlock"><h4><span class="error">Valor Inválido</span></h4></div>`
        }
    })
}
meuEscopo();
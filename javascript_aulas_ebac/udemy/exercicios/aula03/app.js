function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('div.resultado');
    const pessoas = [];

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nome = form.querySelector('input.inputUserName');
        const sobrenome = form.querySelector('input.inputUserSurname');
        const peso = form.querySelector('input.inputUserWeight');
        const altura = form.querySelector('input.inputUserHeight');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        resultado.innerHTML += `<p>Seu nome ${nome.value}, seu sobrenome é ${sobrenome.value}, sua altura é ${altura.value}, e seu peso é ${peso.value}!</p>`
    });

    console.log(pessoas);
}
meuEscopo();
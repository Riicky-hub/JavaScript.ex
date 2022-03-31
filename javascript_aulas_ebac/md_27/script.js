const url = 'https://api.github.com/users';
const main = document.querySelector('div.main');
let text = '';

function getUser(user) {
    fetch(`${url}/${user}`)
    .then((response) => response.json())
    .then((data) => {
        text += `${data.name} possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}<br>`
        main.innerHTML = text;
    })
    .catch((error) => console.error('Erro: ', error.message || error))
}
const userInput = document.querySelector('input.username')

userInput.addEventListener('focusout', function(event) {
    getUser(event.target.value)
})
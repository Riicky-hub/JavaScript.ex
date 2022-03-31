const url = 'https://api.github.com/users';
const main = document.querySelector('div.main_response');
let text = '';

function getUser(user) {
    fetch(`${url}/${user}`)
    .then((response) => response.json())
    .then((data) => {
        text += `<p class="main_text">${data.name} possui <span>${data.public_repos} repositórios</span> públicos no GitHub como <span>${data.login}</span></p>`
        main.innerHTML = text;
    })
    .catch((error) => console.error('Erro: ', error.message || error))
}

const userInput = document.querySelector('input.main_input');
const btnInput = document.querySelector('button.main_btn');

btnInput.addEventListener('click', function() {
    getUser(userInput.value)
})

//userInput.addEventListener('focusout', function(event) {
//    getUser(event.target.value)
//})
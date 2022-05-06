(function(){
    class Pessoa {
        constructor(dados) {
            this.users = dados;
            this.newUser();
        }
        criaLinha(user) {
            const div = document.querySelector('.entradaDados');
            const tr = document.createElement('tr');
            const keys = Object.values(user);
            div.appendChild(tr);
            for(let key of keys) {
                const td = document.createElement('td');
                td.innerText = key;
                tr.appendChild(td);
            }
        }
        newUser() {
            for(let user of this.users) {
                this.criaLinha(user);
            }
        }
    }

    const users = [{
        "nome": "Miguel",
        "email": "miguel@email.com.br",
        "salario": 27211,
        "estado": "MG",
        "empresa": "Facebook",
        "idade": 34,
        "sexo": "",
        "cpf": "362.418.524-18"
    }, 
    {
        "nome": "Sophia",
        "email": "sophia@empresa.com.br",
        "salario": 6971,
        "estado": "DF",
        "empresa": "Plastic Co.",
        "idade": 25,
        "sexo": "F",
        "cpf": "742.316.671-52"
    }];
    const linha = new Pessoa(users);
})();
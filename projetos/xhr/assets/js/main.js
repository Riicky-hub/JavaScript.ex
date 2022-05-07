(function(){
    class Pessoa {
        constructor(dados) {
            this.users = dados;
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
    
    fetch('assets/json/pessoas.json') 
      .then(response => {
        if(response.status >= 200 && response.status <= 300) {
            return response.json();
        }
    }).then(json => {
        const linha = new Pessoa(json);
        linha.newUser();
    });
})();
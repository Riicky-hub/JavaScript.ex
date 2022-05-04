(function() {
    class ValidarForm {
        constructor(){
            this.form = document.querySelector('.formulario');
            this.eventos();
        }
        eventos() {
            this.form.addEventListener('submit', e => {
                this.handleSubmit(e);
                this.validar();
            });
        }
        handleSubmit(e) {
            e.preventDefault();
            let validado = this.validar();
            if(validado) {
                alert('Formulário enviado!');
                this.form.submit();
            }
        }
        validar() {
            let valid = true;
            for(let erro of this.form.querySelectorAll('.error')) {
                erro.remove();
            }
            for(let campo of this.form.querySelectorAll('.validar')) {
                let labelText = campo.previousElementSibling.innerText;
                let label = labelText.slice(0, -1);

                if(!campo.value) {
                    this.createError(campo, `O campo "${label}", não pode estar vázio`);
                    valid = false;
                }
                if(campo.classList.contains('cpf')) {
                    if(!this.validarCPF(campo)) {
                        this.createError(campo, `CPF inválido`);
                        valid = false;
                    }
                }
                if(campo.classList.contains('user')) {
                    if(campo.value.length < 3 || campo.value.length > 12) {
                        this.createError(campo, `O campo "${label}", tem que ter mais que 3 e menos que 12 caracteres`);
                        valid = false;
                    }
                    if(!campo.value.match(/^[a-zA-Z0-9]+$/g)) {
                        this.createError(campo, `Pode ter apenas letras e/ou números`);
                        valid = false;
                    }
                }
                if(campo.classList.contains('password')) {
                    if(campo.value.length < 6 || campo.value.length > 12) {
                        this.createError(campo, `O campo "${label}", tem que ter mais que 6 e menos que 12 caracteres`)
                        valid = false;
                    }
                }
                if(campo.classList.contains('repeatPassword')) {
                    let senha = this.form.querySelector('.password').value;
                    let repetirSenha = this.form.querySelector('.repeatPassword').value;
                    if(repetirSenha !== senha) {
                        this.createError(campo, `O campo "${label}", precisa ser igual ao campo "Senha"`);
                        valid = false;
                    }
                }
            }
            return valid;
        }
        validarCPF(campo) {
            const cpf = new ValidaCPF(campo.value);
            if(!cpf.valida()) return false;
            return true;
        }
        
        createError(campo, msg) {
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.innerText = msg;
            p.classList.add('error');
            div.appendChild(p);
            campo.insertAdjacentElement('afterend', div);
        }
    }
    const validarform = new ValidarForm();
})();
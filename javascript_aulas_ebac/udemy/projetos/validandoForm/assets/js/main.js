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
            }
        }
        createError(campo, msg) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = msg;
            p.classList.add('error');
            div.appendChild(p);
            campo.insertAdjacentElement('afterend', div);
        }
    }
    const validarform = new ValidarForm();
})();
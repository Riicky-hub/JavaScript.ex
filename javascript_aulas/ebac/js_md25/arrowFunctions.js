function Pessoa() {

    this.idade = 0
    
    setInterval(() => {
        console.log(this.idade++)
    }, 500);
}

const p1 = new Pessoa()
export default class CriaSenha {
    constructor() {
        this.alfa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        this.symbol = ['@', '!', '?', '$', '#', '&'];
    }
    rand(min, max) {
        return (Math.floor(Math.random() * (max - min) + min));
    }
    comLetras() {
        return this.alfa[this.rand(0, this.alfa.length)];
    }
    comNumeros() {
        return this.numbers[this.rand(0, this.numbers.length)];
    }
    comSymbols() {
        return this.symbol[this.rand(0, this.symbol.length)];
    }
    criarSenha(limite) {
        let campo = '';
        for(let i = 0; i < limite; i++) {
            campo += this.comSymbols();
        }
        return campo;
    }
}

const criaSenha = new CriaSenha;
console.log(criaSenha.criarSenha(10));
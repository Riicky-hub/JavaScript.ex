function rand(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}

const geraMaius = () => String.fromCharCode(rand(65, 91));
const geraMinus = () => String.fromCharCode(rand(97, 122));
const geraNumber = () => String.fromCharCode(rand(48, 57));
const geraSymbol = () => String.fromCharCode(rand(33, 38));

export default function criarSenha(limit, maius, minus, number, symbol) {
    let campo = [];
    for(let i = 0; i <= limit; i ++) {
        maius && campo.push(geraMaius());
        minus && campo.push(geraMinus());
        number && campo.push(geraNumber());
        symbol && campo.push(geraSymbol());
    }
    if(limit > 35) limit = 35;
    if(maius === false && minus === false && number === false && symbol === false) {
        let error = `Por favor selecione uma opção`;
        return error;
    }
    return campo.join('').slice(0, limit);
}
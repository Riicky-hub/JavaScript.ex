export default class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }
    validDigs() {
        const cpfSemDig = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDig(cpfSemDig);
        const digito2 = this.criaDig(cpfSemDig + digito1);

        const newCpf = cpfSemDig + digito1 + digito2;
        if(newCpf !== this.cpfLimpo) return true;
        return false;
    }
    criaDig(cpf) {
        const cpfArray = Array.from(cpf);
        let total = 0;
        let reverse = cpf.length + 1;
        for(let num of cpfArray) {
            total += Number(num) * reverse;
            reverse--;
        }
        let digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
    isSequel() {
        let cpfSequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return cpfSequencia === this.cpfLimpo;
    }
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.isSequel()) return false;
        if(this.validDigs()) return false;
        return true;
    }
}
import ValidaCPF from './ValidarCPF.js';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return (String(Math.floor(Math.random() * (max - min) + min)));
    }
    gerar() {
        const cpfLimpo = this.rand();
        const digito1 = ValidaCPF.criaDig(cpfLimpo);
        const digito2 = ValidaCPF.criaDig(cpfLimpo + digito1);

        const newCPF = cpfLimpo + digito1 + digito2;
        return newCPF;
    }
}
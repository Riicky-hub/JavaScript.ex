class Movimentacao {
    constructor(banco = 'padrao', nome='', saldo='0') {
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}
class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia,
        this.mes = mes,
        this.ano  = ano
        this.movimentacao = []
    }
    novaMovimentacao(... movimentacao) {
        movimentacao.forEach( lancamento => this.movimentacao.push(lancamento));
    }
    resumo() {
        let valorAtualizado = 0;
        let tipo = '';
        this.movimentacao.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(/x$/i, 'Y')
            if(lancamento.banco.match(/y/i)) {
                valorAtualizado += lancamento.saldo;
                tipo += lancamento.nome + ' | ';
                
            }
        })
        return tipo + valorAtualizado;
    }
}
const m01 = new Movimentacao('banco X', 'salario', 1000);

const m02 = new Movimentacao('banco Y', 'salario', 400);

const m03 = new Movimentacao('banco X', 'imposto', -600);

const registro01 = new Registro(22,10,2022)
registro01.novaMovimentacao(m01,m02,m03)
console.log(registro01.resumo());

const movimentacoesGerais = [m01, m02, m03]
movimentacoesGerais.map(elemento => {
    console.log(elemento.nome.length)
})
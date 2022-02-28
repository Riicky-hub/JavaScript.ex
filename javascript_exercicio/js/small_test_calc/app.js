function somar(){
    let tn1Soma = document.querySelector('input#tn1Soma').value;
    let tn2Soma = document.querySelector('input#tn2Soma').value;
    let n1Soma = Number(tn1Soma);
    let n2Soma = Number(tn2Soma);
    r = n1Soma + n2Soma;
    let rText = document.querySelector('h2.resultSoma');
    rText.innerHTML = (`A soma dos números ${n1Soma} e ${n2Soma} é igual a: <span style="font-weight:700;">${r}</span>!`);
}
function sub() {
    let tn1Sub = document.querySelector('input#tn1Sub').value;
    let tn2Sub = document.querySelector('input#tn2Sub').value;
    let n1Sub = Number(tn1Sub);
    let n2Sub = Number(tn2Sub);
    let r = n1Sub - n2Sub;
    let rText = document.querySelector('h2.resultSub');
    rText.innerHTML = (`A subtração dos números ${n1Sub} e ${n2Sub} é igual a: <span style="font-weight:700;">${r}</span>!`)
}
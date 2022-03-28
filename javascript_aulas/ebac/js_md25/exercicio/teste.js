somar = () => {
    let tn1Soma = Number(document.querySelector('input#tn1Soma').value);
    let tn2Soma = Number(document.querySelector('input#tn2Soma').value);   
    resultado = tn1Soma + tn2Soma;
    let rText = document.querySelector('h2.resultSoma');
    rText.innerHTML = (`A soma dos números ${tn1Soma} e ${tn2Soma} é igual a: <span style="font-weight:700;">${resultado}</span>!`);
}

sub = () => {
    let tn1Sub = Number(document.querySelector('input#tn1Sub').value);
    let tn2Sub = Number(document.querySelector('input#tn2Sub').value);
    resultado = tn1Sub - tn2Sub;
    let rText = document.querySelector('h2.resultSub');
    rText.innerHTML = (`A subtração dos números ${tn1Sub} e ${tn2Sub} é igual a: <span style="font-weight:700;">${resultado}</span>!`)
}
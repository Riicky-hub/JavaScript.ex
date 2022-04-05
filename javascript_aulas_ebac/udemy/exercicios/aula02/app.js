// Número Principal
let numeroUser = Number(window.prompt('Digite um número'));
let numeroTitle = document.querySelector('h1.numero');
numeroTitle.innerHTML = `Seu número é ${numeroUser}`;
// Detalhe númericos
let numeroDetalhe = document.querySelector('div.numeroDetalhe');
numeroDetalhe.innerHTML = `
<p>Raiz quadrada: ${numeroUser ** 0.5}</p>
<p>${numeroUser} é inteiro: ${Number.isInteger(numeroUser)}</p>
<p>É NaN: ${Number.isNaN(numeroUser)}</p>
<p>Arrendando para baixo: ${Math.floor(numeroUser)}</p>
<p>Arrendando para cima: ${Math.ceil(numeroUser)}</p>
<p>Com duas casas decimais: ${numeroUser.toFixed(2)}</p>`
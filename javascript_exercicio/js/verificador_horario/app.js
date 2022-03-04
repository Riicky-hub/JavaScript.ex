var agora = new Date();
var agoraHora = agora.getHours();
var container = document.querySelector('div.container');
if (agoraHora >= 6 && agoraHora < 12) {
    container.innerHTML += `<p id="container_p">Bom dia! Agora são ${agoraHora} horas.</p>`
    container.innerHTML += `<img src="./img/morning.jpg" alt="Manhã" id="container_img">`
    document.body.style.backgroundColor = 'rgb(255, 255, 101)';
} else if (agoraHora >= 12 && agoraHora < 16) {
    container.innerHTML += `<p id="container_p">Boa tarde! Agora são ${agoraHora} horas.</p>`
    container.innerHTML += `<img src="./img/afternoon.jpg" alt="Tarde" id="container_img">`
    document.body.style.backgroundColor = 'rgb(255, 190, 69)';
} else if (agoraHora >= 16 && agoraHora < 18) {
    container.innerHTML += `<p id="container_p">Boa tarde! Agora são ${agoraHora} horas.</p>`
    container.innerHTML += `<img src="./img/evening.jpg" alt="Tarde" id="container_img">`
    document.body.style.backgroundColor = 'rgb(255, 255, 101)';
} else if (agoraHora >= 18 || agoraHora < 6) {
    container.innerHTML += `<p id="container_p">Boa noite! Agora são ${agoraHora} horas.</p>`
    container.innerHTML += `<img src="./img/night.jpg" alt="noite" id="container_img">`
    document.body.style.backgroundColor = 'rgb(31, 31, 104)';
}
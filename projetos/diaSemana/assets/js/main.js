function meuEscopo() {
    const data = new Date();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const diaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    const hora = data.getHours() >= 10 ? data.getHours():`0${data.getHours()}`;
    const min = data.getMinutes() >= 10 ? data.getMinutes():`0${data.getMinutes()}`;
    let mesesText = '';
    let diaSemanaText = '';
    const dataText = document.querySelector('h2.data-text');
    const horaText = document.querySelector('h4.hora-text');
    switch(data.getDay()) {
        case 0:
            diaSemanaText = diaSemana[0];
            break;
        case 1:
            diaSemanaText = diaSemana[1];
            break;
        case 2:
            diaSemanaText = diaSemana[2];
            break;
        case 3:
            diaSemanaText = diaSemana[3];
            break;
        case 4:
            diaSemanaText = diaSemana[4];
            break;
        case 5:
            diaSemanaText = diaSemana[5];
            break;
        case 6:
            diaSemanaText = diaSemana[6];
    }
    switch(data.getMonth()) {
        case 0:
            mesesText = meses[0];
            break;
        case 1:
            mesesText = meses[1];
            break;
        case 2:
            mesesText = meses[2];
            break;
        case 3:
            mesesText = meses[3];
            break;
        case 4:
            mesesText = meses[4];
            break;
        case 5:
            mesesText = meses[5];
            break;
        case 6:
            mesesText = meses[6];
            break;
        case 7:
            mesesText = meses[7];
            break;
        case 8:
            mesesText = meses[8];
            break;
        case 9:
            mesesText = meses[9];
            break;
        case 10:
            mesesText = meses[10];
            break;
        case 11:
            mesesText = meses[11];
    }

    dataText.textContent = `${diaSemanaText}, ${data.getDate()} de ${mesesText} de ${data.getFullYear()}`
    horaText.textContent = `${hora}:${min}`
}
meuEscopo();

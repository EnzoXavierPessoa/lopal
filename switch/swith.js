function meuSwitch() {
    let dia;
    let data = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

    switch (data) {
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Segunda-feira";
            break;
        case 2:
            dia = "Terça-feira";
            break;
        case 3:
            dia = "Quarta-feira";
            break;
        case 4:
            dia = "Quinta-feira";
            break;
        case 5:
            dia = "Sexta-feira";
            break;
        case 6:
            dia = "Sábado";
            break;
        default:
            dia = "Dia inválido";
    }

    document.getElementById("demo").innerHTML = "Hoje é " + dia;
}

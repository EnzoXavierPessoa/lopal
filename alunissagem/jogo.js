let canvas = document.querySelector("#jogo");
let ctx = canvas.getContext("2d");
 
let moduloLunar = {
    posicao: {
        x: 700,
        y: 100
    },
    angulo: Math.PI / 2,
    largura: 20,
    altura: 20,
    cor: "#000000d3",
    velocidade: {
        x: -2,
        y: 0
    },
    motorLigado: false,
    combustivel: 1000,
    rotacaoAntiHorario: false,
    rotacaoHorario: false
}
 
function mostrarVelocidadeVertical() {
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "left";
    ctx.testBaseline = "middle";
    ctx.fillStyle = "lightgray";
    ctx.fillText(
        `Velocidade Vertical: ${(moduloLunar.velocidade.y * 10).toFixed(2)}`,
        50,
        60
    );
}
 
function mostrarCombustivel() {
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "left";
    ctx.testBaseline = "middle";
    ctx.fillStyle = "lightgray";
    ctx.fillText(
        `Combustível: ${(moduloLunar.combustivel / 10).toFixed(0)} %`,
        50,
        80
    );
}
 

function desenhar(){
    contexto
}

function desenharModuloLunar() {
    //desenhar módulo lunar
    //ctx = contexto de desenho do canvas
    ctx.save();
    ctx.beginPath();
    //move o ponto de origem das coordenadas para o centro do módulo lunar
    ctx.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    ctx.rotate(moduloLunar.angulo);
    ctx.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5, moduloLunar.largura, moduloLunar.altura);
    ctx.fillStyle = moduloLunar.cor;
    ctx.fill();
    ctx.closePath();
 
   
    if (moduloLunar.motorLigado) {
        desenharChama();
        moduloLunar.combustivel --;
        if (moduloLunar.combustivel <= 0) {
            moduloLunar.motorLigado = false;
        }
    }
 
    ctx.restore();
}
 
function desenharChama() {
        ctx.beginPath();
    //desenhar linha da base do fogo no canto inferior esquerdo do módulo lunar
    ctx.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    //desenhar linha da base do fogo no canto inferior direito do módulo lunar
    ctx.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
 
    //tamanho da chama
    //desenha uma linha de posição y aleatória entre a base do módulo e 35 pixels
    ctx.lineTo(0, moduloLunar.altura *0.5 + Math.random() * 45);
    ctx.closePath();
    ctx.fillStyle = "orange"; //desenha automaticamente a chama do motor
    ctx.fill();
}
 
 
function desenharFundo() {
//desenhar fundo da tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = "#7fb22d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
 
function desenhar() {
    atracaoGravitacional();
 
    desenharFundo();
    desenharModuloLunar();
    mostrarVelocidadeVertical();
    mostrarCombustivel();
   
    if (moduloLunar.posicao.y > canvas.height - moduloLunar.altura * 0.5) {
        if(moduloLunar.velocidade.y <= 0.5){
            //você ganhou!
            mostarResultado("Parabéns, você conseguiu pousar o módulo lunar com segurança!", cor = "#1ca700")
        } else {
            //você perdeu
            mostarResultado("Você não conseguiu pousar o módulo lunar com segurança. Tente novamente!", cor = "#000000");
        }
        return
    }
    requestAnimationFrame(desenhar);
}
 
function mostarResultado(mensagem, cor) {
    ctx.font = "bold 24px Calibri";
    ctx.textAlign = "center";
    ctx.fillStyle = cor;
    ctx.fillText(mensagem, canvas.width / 2, canvas.height / 2);
}
 
document.addEventListener("keydown", teclaPressionada);
function teclaPressionada(evento) {
    if (evento.key === "ArrowUp" && moduloLunar.combustivel > 0){
        moduloLunar.motorLigado = true;
        moduloLunar.velocidade.y -= 0.02;
    } else if (evento.key === "ArrowRight") {
        moduloLunar.rotacaoHorario = true;
    } else if (evento.key === "ArrowLeft") {
        moduloLunar.rotacaoAntiHorario = true;
    }
}
 
document.addEventListener("keyup", teclaSolta);
function teclaSolta(evento) {
    if (evento.key === "ArrowUp"){
        moduloLunar.motorLigado = false;
    } else if (evento.key === "ArrowRight") {
        moduloLunar.rotacaoHorario = false;
    } else if (evento.key === "ArrowRight") {
        moduloLunar.rotacaoHorario = false;
    } else if (evento.key === "ArrowLeft") {
        moduloLunar.rotacaoAntiHorario = false;
    }
}
 
const gravidade = 0.01;
function atracaoGravitacional() {
    //atração gravitacional
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
    moduloLunar.velocidade.y += gravidade;
 
    if (moduloLunar.rotacaoHorario) {
        moduloLunar.angulo += Math.PI / 180;
    } else if (moduloLunar.rotacaoAntiHorario) {
        moduloLunar.angulo -= Math.PI / 180;
    }
 
    if (moduloLunar.motorLigado) {
        moduloLunar.velocidade.y -= 0.0115 * Math.cos(moduloLunar.angulo);
        moduloLunar.velocidade.x += 0.0115 * Math.sin(moduloLunar.angulo);
    }
}
 
desenhar();
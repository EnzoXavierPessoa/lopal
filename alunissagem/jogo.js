/** @type {HTMLCanvasElement} */
let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

let lancamento = (Math.round(Math.random()) == 0);

// ⭐ ESTRELAS
let estrelas = [];

function criarEstrelas(qtd){
    for(let i = 0; i < qtd; i++){
        estrelas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            tamanho: Math.random() * 2,
            brilho: Math.random()
        });
    }
}
criarEstrelas(100);

function desenharEstrelas(){
    estrelas.forEach(estrela => {
        estrela.brilho += (Math.random() - 0.5) * 0.05;

        if(estrela.brilho < 0.1) estrela.brilho = 0.1;
        if(estrela.brilho > 1) estrela.brilho = 1;

        contexto.beginPath();
        contexto.arc(estrela.x, estrela.y, estrela.tamanho, 0, Math.PI * 2);
        contexto.fillStyle = `rgba(255,255,255,${estrela.brilho})`;
        contexto.fill();
    });
}

// 🚀 MÓDULO LUNAR
let moduloLunar = {
    posicao: {
        x: lancamento ? 100 : 700,
        y: 100
    },
    angulo: 0,
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade:{
        x: lancamento ? 2 : -2,
        y: 0
    },
    motorLigado: false,
    combustivel: 1000,
    rotacaoAntiHorario: false,
    rotacaoHorario: false
};

// 🧭 HUD VERTICAL
const uiX = 20;
let uiY = 30;
const espacamento = 25;

function resetarUI(){
    uiY = 30;
}

function mostrarIndicador(texto){
    contexto.font = "bold 18px Arial";
    contexto.fillStyle = "lightgray";
    contexto.fillText(texto, uiX, uiY);
    uiY += espacamento;
}

// 📊 INDICADORES
function mostrarHUD(){
    mostrarIndicador(`Vel Horizontal: ${(moduloLunar.velocidade.x * 10).toFixed(2)}`);
    mostrarIndicador(`Vel Vertical: ${moduloLunar.velocidade.y.toFixed(2)}`);
    mostrarIndicador(`Combustível: ${(moduloLunar.combustivel / 10).toFixed(0)}%`);
    mostrarIndicador(`Altitude: ${(canvas.height - moduloLunar.posicao.y).toFixed(0)}`);
    mostrarIndicador(`Ângulo: ${(moduloLunar.angulo * 180 / Math.PI).toFixed(0)}`);
}

// 🎨 FUNDO
function desenharFundo(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillStyle = "#000";
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    desenharEstrelas();
}

// 🚀 NAVE
function desenharmodulolunar(){
    contexto.save();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    contexto.rotate(moduloLunar.angulo);

    contexto.fillStyle = moduloLunar.cor;
    contexto.fillRect(-10, -10, 20, 20);

    if(moduloLunar.motorLigado){
        contexto.beginPath();
        contexto.moveTo(-10, 10);
        contexto.lineTo(10, 10);
        contexto.lineTo(0, 20 + Math.random()*20);
        contexto.fillStyle = "orange";
        contexto.fill();

        moduloLunar.combustivel -= 0.5;
        if(moduloLunar.combustivel <= 0){
            moduloLunar.motorLigado = false;
        }
    }

    contexto.restore();
}

// 🌍 FÍSICA
const gravidade = 0.01;

function atracaoGravitacional(){
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;

    moduloLunar.velocidade.y += gravidade;

    if(moduloLunar.rotacaoHorario){
        moduloLunar.angulo += Math.PI/180;
    }
    if(moduloLunar.rotacaoAntiHorario){
        moduloLunar.angulo -= Math.PI/180;
    }

    if(moduloLunar.motorLigado){
        moduloLunar.velocidade.x += Math.sin(moduloLunar.angulo) * 0.02;
        moduloLunar.velocidade.y -= Math.cos(moduloLunar.angulo) * 0.02;
    }
}

// 🔁 LOOP
function desenhar(){
    atracaoGravitacional();
    desenharFundo();
    desenharmodulolunar();

    resetarUI();     // ← começa a coluna
    mostrarHUD();    // ← desenha tudo vertical

    if(moduloLunar.posicao.y > canvas.height - 10){
        contexto.fillStyle = "white";
        contexto.font = "30px Arial";
        contexto.fillText("parabens vc conseguiu aterrisar!!", 170, 300);
        return;
    }

    requestAnimationFrame(desenhar);
}

// 🎮 CONTROLES
document.addEventListener("keydown", e => {
    if(e.key === "ArrowUp" && moduloLunar.combustivel > 0){
        moduloLunar.motorLigado = true;
    }
    if(e.key === "ArrowLeft"){
        moduloLunar.rotacaoAntiHorario = true;
    }
    if(e.key === "ArrowRight"){
        moduloLunar.rotacaoHorario = true;
    }
});

document.addEventListener("keyup", e => {
    if(e.key === "ArrowUp"){
        moduloLunar.motorLigado = false;
    }
    if(e.key === "ArrowLeft"){
        moduloLunar.rotacaoAntiHorario = false;
    }
    if(e.key === "ArrowRight"){
        moduloLunar.rotacaoHorario = false;
    }
});

desenhar();
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você e seus amigos houvem sobre uma casa  mal assombrada que abriga um fantasma supostamente",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a descoberta seus amigos sugerem que vocês vãoinvestigar. Qual atitude você toma?",
        alternativas: [
            {  
                texto: "vai junto",
                afirmacao: "afirmação"
            },
            {
                texto: "decide ficar em casa",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "no outro dia todos ja sabem das historias então você?",
        alternativas: [
            {
                texto: "Dis que é tudo mentira ",
                afirmacao: "afirmação"
            },
            {
                texto: "alimenta com mais historias",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "eles voltarão lá e você vai junto o que você faz ",
        alternativas: [
            {
                texto: "levo um lençol para assusta-los",
                afirmacao: "afirmação"
            },
            {
                texto: "levo lanterna para não ter medo.",
                afirmacao: "afirmação"
            }
        ]
    },
    
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No dia seguinte encontraram seus corpos...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "fim";
}

mostraPergunta();

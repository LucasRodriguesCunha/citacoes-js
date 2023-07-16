const citacoes = [
    {
        citacao: "A persistência é o caminho do êxito.",
        autor: "- Charles Chaplin",
    },
    {
        citacao: "A única forma de fazer um grande trabalho é amar o que se faz.",
        autor: "- Steve Jobs",
    },
    {
        citacao: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        autor: "- Robert Collier",
    },
    {
        citacao: "O fracasso é a oportunidade de começar de novo, com mais experiência.",
        autor: "- Henry Ford",
    },
    {
        citacao: "Não espere por oportunidades, crie você mesmo as suas.",
        autor: "Autor desconhecido",
    },
    {
        citacao: "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
        autor: "- Ziglar",
    },
    {
        citacao: "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
        autor: "- Winston Churchill",
    },
    {
        citacao: "Acredite em si próprio e todo o resto virá naturalmente.",
        autor: "- Elon Musk",
    },
    {
        citacao: "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
        autor: "Autor desconhecido",
    },
    {
        citacao: "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
        autor: "- Jim Rohn",
    },
    {
        citacao: "O sucesso não tem a ver com a quantidade de dinheiro que você ganha, mas sim com o impacto que você tem na vida dos outros.",
        autor: "- Michelle Obama",
    },
];

const botao = document.querySelector("button");
const texto = document.querySelector(".texto");
const autor = document.querySelector(".autor");

function gerarCitacao() {
    const index = Math.floor(Math.random() * citacoes.length);

    texto.textContent = citacoes[index].citacao;
    autor.textContent = citacoes[index].autor;

}

botao.addEventListener("click", gerarCitacao);
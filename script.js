window.revelar = ScrollReveal({ reset: true })

// TOPO DO SITE
revelar.reveal('.efeito-para-rolagem', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-para-rolagem2', {
    duration: 2000,
    distance: '90px'
})


const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá! Meu nome é ${nome}.

${mensagem}`;

    const telefone = "5521968244513";

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});


const texto = "Desenvolvedora Front-End";
const elemento = document.querySelector(".paragrafo");

let i = 0;

function escrever() {

    if (i < texto.length) {

        elemento.textContent += texto.charAt(i);

        i++;

        setTimeout(escrever, 100);
    }
}

escrever();


// =================================
// ÁRVORE - SOBRE MIM
// =================================

const sobreItens = document.querySelectorAll(".sobre-item");
const informacoes = document.querySelectorAll(".informacao");

sobreItens.forEach(item => {

    item.addEventListener("click", () => {

        sobreItens.forEach(botao => {
            botao.classList.remove("ativo");
        });

        informacoes.forEach(informacao => {
            informacao.classList.remove("ativa");
        });

        item.classList.add("ativo");

        const id = item.dataset.conteudo;

        document.getElementById(id).classList.add("ativa");

    });

});

revelar.reveal('#Sobre-mim', {
    duration: 1500,
    distance: '60px',
    origin: 'bottom',
    opacity: 0
});
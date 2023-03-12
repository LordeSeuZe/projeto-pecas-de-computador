/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a descrição anterior 
    - passo 8 - fazer que aparece a descrição de cada imagem ao cliclar no botão
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const descricao = document.querySelectorAll('.descricao');
const logoPeca = document.querySelectorAll('.logo');
const nomePeca = document.querySelectorAll('.nome');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelionado();

        selecionarBotaoCarrossel(botao);

        escoderImagemAtiva();

        mostrarImagemDeFundo(indice);

        desativarDescricoes();
        
        mostrarDescricaoResp(indice);

        const logoAtiva = document.querySelector('.peca');
        logoAtiva.classList.remove('peca');
        logoPeca[indice].classList.add('peca');

        const nomeAtiva = document.querySelector('.pecaResp');
        nomeAtiva.classList.remove('pecaResp');
        nomePeca[indice].classList.add('pecaResp')

    })
})

function mostrarDescricaoResp(indice) {
    descricao[indice].classList.add('ativo');
}

function desativarDescricoes() {
    const descricaoAtiva = document.querySelector('.ativo');
    descricaoAtiva.classList.remove('ativo');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function escoderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

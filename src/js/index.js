/*

OBJETIVO 1 - quando o usuario clicar no botao de seleção de plataformas - deve abrir uma caixa com os botoes de seleção de plataforma

    PASSO 1 - pegar o botao de seleçao de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

    PASSO 2 - pegar o elemento do conteudo que precisa ser mostrado

    PASSO 3 - pegar o clique do usuário no JS

    PASSO 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo dele apareça

OBJETIVO 2 -  caso a lista de botoes de plataformas ja esteja aparecendo e o usuário clicar em cima dele, o conteúdo deve ser ESCONDIDO.

    PASSO 1 - Verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra  que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

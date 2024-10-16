// script.js
// Selecionar os elementos HTML que o JS irá manipular
let txtComentario = document.querySelector("#txtComentario");
let btnComentar = document.querySelector("#btnComentar");
let divComentarios = document.querySelector(".comentarios")
let selAcoes = document.querySelector("#selAcoes");

// Ações que serão executadas 
btnComentar.addEventListener("click", postarComentario)
selAcoes.addEventListener("change", administrarPost);

// Funções que serão chamadas pelas ações
function administrarPost () {
    let acao = selAcoes.value;
    alert(acao);

    selAcoes.value = '';
}

function postarComentario () {
    let coment = txtComentario.value;

    // Verificar se o comentário está em branco
    if ( coment == "") {
        alert("Por favor, digite um comentário.")
        return;     // força a saída da função
    }

    let html = `
        <div class="comentario">
            <span class="autor">Bianca</span>
            ${coment}
        </div>`;
        divComentarios.insertAdjacentHTML('beforeend', html);

        // Limpando a caixa de comentários
        txtComentario.value = "";
}


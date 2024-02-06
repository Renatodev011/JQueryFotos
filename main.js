$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#butCancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDeImagem = $('#url-imagem').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDeImagem}"/>`).appendTo(novoItem);
        $(`<div class="link-imagem">
        <a href="${enderecoDeImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#enderecoDeImagem').val('')
    })
})

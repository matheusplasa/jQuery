$(document).ready(function() {
    // Verifica estado vazio
    function checkEmptyState() {
        if ($('#lista-tarefas li').length === 0) {
            $('.empty-state').addClass('show');
        } else {
            $('.empty-state').removeClass('show');
        }
    }
    
    // Adiciona tarefa
    $('#btn-adicionar').click(function(e) {
        e.preventDefault();
        const tarefaTexto = $('#nome-tarefa').val().trim();
        
        if (tarefaTexto) {
            $('#lista-tarefas').append(
                $('<li>').text(tarefaTexto)
            );
            $('#nome-tarefa').val('').focus();
            checkEmptyState();
        }
    });
    
    // Alterna estado completado
    $(document).on('click', '#lista-tarefas li', function() {
        $(this).toggleClass('completed');
    });
    
    // Permite adicionar com Enter
    $('#nome-tarefa').keypress(function(e) {
        if (e.which === 13) {
            $('#btn-adicionar').click();
        }
    });
    
    // Verifica estado inicial
    checkEmptyState();
});
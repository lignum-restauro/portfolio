document.addEventListener('DOMContentLoaded', () => {
    
    //console.log("Sistema Lignum - Interface de Luxo Ativada.");

    const btnProjetos = document.getElementById('btnProjetos');
    const secaoProjetos = document.getElementById('projetos');

    // Mágica: Mostra a seção quando o botão for clicado
    btnProjetos.addEventListener('click', function(e) {
        
        // Se a seção já estiver visível, não faz nada
        if (secaoProjetos.classList.contains('visivel')) {
            return;
        }

        // Adiciona a classe que mostra e anima a seção
        secaoProjetos.classList.add('visivel');
        
        // Pequeno delay para garantir que a animação CSS funcione
        setTimeout(() => {
            console.log("Projetos Revelados.");
        }, 100);
    });
});

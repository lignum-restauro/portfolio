document.addEventListener('DOMContentLoaded', () => {
    const btnVerPortfolio = document.querySelector('#ver-portfolio');
    const menuPortfolio = document.querySelector('#menu-portfolio');
    const secaoProjetos = document.querySelector('#projetos');

    function mostrarPortfolio(e) {
        if (e) e.preventDefault();
        
        // Mostra a seção
        secaoProjetos.classList.add('revelar');
        
        // Scroll Suave
        setTimeout(() => {
            secaoProjetos.scrollIntoView({ behavior: 'smooth' });
        }, 100);

        // Esconde o botão da Hero para limpar o visual
        if(btnVerPortfolio) {
            btnVerPortfolio.style.opacity = '0';
            setTimeout(() => { btnVerPortfolio.style.display = 'none'; }, 500);
        }
    }

    // Escuta clique no botão da Home
    if(btnVerPortfolio) btnVerPortfolio.addEventListener('click', mostrarPortfolio);
    
    // Escuta clique no link do Menu
    if(menuPortfolio) menuPortfolio.addEventListener('click', mostrarPortfolio);
});

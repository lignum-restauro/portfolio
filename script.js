document.addEventListener('DOMContentLoaded', () => {
    // 1. Mapeia os elementos
    const botaoVerPortfolio = document.querySelector('#ver-portfolio');
    const secaoProjetos = document.querySelector('#projetos');

    // 2. Escuta o clique no botão
    botaoVerPortfolio.addEventListener('click', () => {
        // 3. Adiciona a classe que revela a seção
        secaoProjetos.classList.add('revelar');
        
        // 4. Faz a página descer suavemente até os projetos
        setTimeout(() => {
            secaoProjetos.scrollIntoView({ behavior: 'smooth' });
        }, 150);

        // 5. Opcional: Remove o botão após o clique para limpar o visual
        botaoVerPortfolio.style.opacity = '0';
        setTimeout(() => { botaoVerPortfolio.style.display = 'none'; }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-projeto');

    const observerOptions = {
        threshold: 0.15 // Dispara quando 15% do card aparece
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        revealOnScroll.observe(card);
    });
});

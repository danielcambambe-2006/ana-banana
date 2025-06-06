document.addEventListener("DOMContentLoaded", function() {
    // Ajusta a transição para 2 segundos nas divs .ana e #imagem
    document.querySelectorAll('.ana, #imagem').forEach(el => {
        el.style.transition = "opacity 2s, transform 2s";
    });

    function revealOnScroll() {
        // Revela .ana
        const elements = document.querySelectorAll('.ana');
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                el.classList.add('visible');
            }
        });

        // Revela #imagem
        const imagem = document.getElementById('imagem');
        if (imagem) {
            const rect = imagem.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                imagem.classList.add('visible');
            }
        }
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

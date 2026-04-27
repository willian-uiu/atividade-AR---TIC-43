AFRAME.registerComponent('gesture-handler', {
    init: function () {
        const el = this.el;
        let isAnimating = false;

        // INTERAÇÃO 1: Toque Rápido (Gesture-Tap)
        // Dispara ou pausa a animação interna do modelo
        el.addEventListener('click', function () {
            isAnimating = !isAnimating;

            // Feedback Visual/Funcional: Ativa o mixer de animação
            el.setAttribute('animation-mixer', {
                timeScale: isAnimating ? 1 : 0
            });

            console.log("Animação: " + (isAnimating ? "Ligada" : "Pausada"));
        });

        // INTERAÇÃO 2: Pressionar e Segurar (Mousedown/Mouseup)
        // Altera a escala para dar feedback de "pulso"
        el.addEventListener('mousedown', function () {
            // Feedback Visual: O modelo cresce levemente ao ser pressionado
            el.setAttribute('animation__scale', {
                property: 'scale',
                to: '0.6 0.6 0.6',
                dur: 200
            });
        });

        el.addEventListener('mouseup', function () {
            // Retorna à escala original
            el.setAttribute('animation__scale', {
                property: 'scale',
                to: '0.5 0.5 0.5',
                dur: 200
            });
        });
    }
});
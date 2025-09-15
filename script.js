document.addEventListener('DOMContentLoaded', () => {
    const mainSunflower = document.getElementById('main-sunflower');
    const container = document.getElementById('sunflower-container');
    const firefliesContainer = document.getElementById('fireflies-container'); // Nuevo: Contenedor de luciérnagas
    let animationTimeout;

    function applyShineEffect() {
        mainSunflower.classList.add('shine');
        setTimeout(() => {
            mainSunflower.classList.remove('shine');
        }, 600);
    }

    function createFallingSunflower() {
        const sunflower = document.createElement('img');
        sunflower.src = 'girasol.PNG';
        sunflower.classList.add('falling-sunflower');

        sunflower.style.left = `${Math.random() * 100}vw`;
        const randomSize = Math.random() * 40 + 20;
        sunflower.style.width = `${randomSize}px`;
        sunflower.style.animationDuration = `${Math.random() * 2 + 4}s`;

        container.appendChild(sunflower);

        setTimeout(() => {
            sunflower.remove();
        }, 6000);
    }

    function startSunflowerRain() {
        applyShineEffect();

        mainSunflower.style.pointerEvents = 'none';

        const rainInterval = setInterval(createFallingSunflower, 100);

        setTimeout(() => {
            clearInterval(rainInterval);
        }, 5000);

        clearTimeout(animationTimeout);
        animationTimeout = setTimeout(() => {
            mainSunflower.style.pointerEvents = 'auto';
        }, 9000);
    }

    mainSunflower.addEventListener('click', startSunflowerRain);

    function createButterfly() {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly');
        container.appendChild(butterfly);
    }

    createButterfly(); // Crea la mariposa al cargar la página

    // --- Funcionalidad de las luciérnagas ---
    function createFireflies(numFireflies) {
        for (let i = 0; i < numFireflies; i++) {
            const firefly = document.createElement('div');
            firefly.classList.add('firefly');
            
            // Posición inicial aleatoria
            firefly.style.left = `${Math.random() * 100}vw`;
            firefly.style.top = `${Math.random() * 100}vh`;

            // Retraso de animación aleatorio para que no brillen todas a la vez
            firefly.style.animationDelay = `${Math.random() * 10}s`; 
            
            firefliesContainer.appendChild(firefly);
        }
    }

    // Crea 15 luciérnagas al cargar la página
    createFireflies(15); 
});

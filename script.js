document.addEventListener('DOMContentLoaded', () => {
    const mainSunflower = document.getElementById('main-sunflower');
    const container = document.getElementById('sunflower-container');
    let animationTimeout; // Variable para controlar el reinicio

    // --- Funcionalidad del efecto de brillo ---
    function applyShineEffect() {
        mainSunflower.classList.add('shine');
        setTimeout(() => {
            mainSunflower.classList.remove('shine');
        }, 600); // Duración de la animación de brillo (un poco más que 0.5s)
    }

    // --- Funcionalidad de la lluvia de girasoles ---
    function createFallingSunflower() {
        const sunflower = document.createElement('img');
        sunflower.src = 'girasol.PNG';
        sunflower.classList.add('falling-sunflower');

        // Posición y tamaño aleatorios para un efecto más natural
        sunflower.style.left = `${Math.random() * 100}vw`;
        const randomSize = Math.random() * 40 + 20; // Tamaño entre 20px y 60px
        sunflower.style.width = `${randomSize}px`;
        sunflower.style.animationDuration = `${Math.random() * 2 + 4}s`; // Duración de caída entre 4 y 6s

        container.appendChild(sunflower);

        // Elimina el girasol del DOM después de que termine la animación
        setTimeout(() => {
            sunflower.remove();
        }, 6000); // Un poco más que la duración máxima de la animación
    }

    // Función principal para iniciar la lluvia de girasoles
    function startSunflowerRain() {
        applyShineEffect(); // Llama al efecto de brillo al iniciar la lluvia

        // Desactiva el clic temporalmente para evitar múltiples activaciones
        mainSunflower.style.pointerEvents = 'none';

        // Crea girasoles a intervalos durante 5 segundos
        const rainInterval = setInterval(createFallingSunflower, 100);

        // Detiene la creación de nuevos girasoles después de 5 segundos
        setTimeout(() => {
            clearInterval(rainInterval);
        }, 5000);

        // Reinicia la animación y reactiva el clic después de 9 segundos
        clearTimeout(animationTimeout); // Limpia cualquier reinicio anterior
        animationTimeout = setTimeout(() => {
            mainSunflower.style.pointerEvents = 'auto'; // Vuelve a hacer el girasol clicable
        }, 9000);
    }

    // Evento de clic en el girasol principal
    mainSunflower.addEventListener('click', startSunflowerRain);

    // --- Funcionalidad de la mariposa ---
    function createButterfly() {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly');
        container.appendChild(butterfly);
    }

    // Llama a la función para crear la mariposa al cargar la página
    createButterfly();
});

document.addEventListener('DOMContentLoaded', () => {
    // --- Obtener elementos del DOM ---
    const mainSunflower = document.getElementById('main-sunflower');
    const container = document.getElementById('animation-container');
    const particleContainer = document.getElementById('particle-container');
    const butterfly = document.getElementById('butterfly');
    const magicSound = document.getElementById('magic-sound');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    let isAnimating = false;

    // --- 1. Lluvia de Girasoles ---
    const startSunflowerRain = () => {
        if (isAnimating) return;
        isAnimating = true;
        
        // Reproducir sonido y crear partículas
        magicSound.currentTime = 0;
        magicSound.play();
        createParticleBurst();

        const numberOfSunflowers = 30;
        for (let i = 0; i < numberOfSunflowers; i++) {
            setTimeout(() => {
                createFallingSunflower();
            }, i * 100);
        }

        setTimeout(() => {
            isAnimating = false;
        }, 5000);
    };

    const createFallingSunflower = (isSpecial = false) => {
        const sunflower = document.createElement('div');
        sunflower.classList.add('falling-sunflower');
        if (isSpecial) {
            // Un estilo diferente para la lluvia especial de la mariposa
            sunflower.style.filter = 'hue-rotate(150deg) saturate(2)'; 
        }
        
        sunflower.style.left = `${Math.random() * 100}vw`;
        sunflower.style.animationDuration = `${Math.random() * 2 + 3}s`; // Dura entre 3 y 5s
        const size = Math.random() * 50 + 20; // Tamaño entre 20px y 70px
        sunflower.style.width = `${size}px`;
        sunflower.style.height = `${size}px`;

        container.appendChild(sunflower);

        sunflower.addEventListener('animationend', () => {
            sunflower.remove();
        });
    };

    mainSunflower.addEventListener('click', startSunflowerRain);

    // --- 2. Explosión de Partículas ---
    const createParticleBurst = () => {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const x = (Math.random() - 0.5) * 400; // Dispersión horizontal
            const y = (Math.random() - 0.5) * 400; // Dispersión vertical
            
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);
            
            // Posicionamos las partículas en el centro del contenedor
            particle.style.left = '50%';
            particle.style.top = '50%';
            const size = Math.random() * 8 + 2; // Tamaño entre 2px y 10px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particleContainer.appendChild(particle);

            particle.addEventListener('animationend', () => {
                particle.remove();
            });
        }
    };

    // --- 3. Mariposa Interactiva ---
    const triggerSpecialRain = () => {
        if (isAnimating) return;
        isAnimating = true;
        magicSound.play();

        for (let i = 0; i < 50; i++) { // Más girasoles y de colores
            setTimeout(() => {
                createFallingSunflower(true);
            }, i * 50);
        }
        
        setTimeout(() => {
            isAnimating = false;
        }, 5000);
    };

    butterfly.addEventListener('click', triggerSpecialRain);

    // --- 4. Ciclo de Día/Noche ---
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.remove('day');
            body.classList.add('night');
        } else {
            body.classList.remove('night');
            body.classList.add('day');
        }
    });
});

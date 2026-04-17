document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio');
    
    function playMusic() {
        audio.play()
            .then(() => {
                document.querySelector('.music-indicator').style.display = 'none';
                document.removeEventListener('click', playMusic);
                document.removeEventListener('touchstart', playMusic);
            })
            .catch(error => console.log("Esperando interacción..."));
    }

    document.addEventListener('click', playMusic, { once: true });
    document.addEventListener('touchstart', playMusic, { once: true });
});

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio');
    const starsContainer = document.getElementById('stars-overlay');
    const starImageUrl = 'img/estrella.png'; // Ruta de tu imagen de estrella

    // 1. Generar estrellas aleatorias
    for (let i = 0; i < 25; i++) {
        const star = document.createElement('img');
        star.src = starImageUrl;
        star.className = 'star-img';
        
        // Posición aleatoria
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Duración y retraso aleatorio para que no todas se muevan igual
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 5;
        
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = delay + 's';
        
        starsContainer.appendChild(star);
    }

    // 2. Control de música por interacción
    function playMusic() {
        audio.play().then(() => {
            document.querySelector('.music-indicator').style.display = 'none';
            document.removeEventListener('click', playMusic);
        }).catch(err => console.log("Esperando clic..."));
    }

    document.addEventListener('click', playMusic, { once: true });
});
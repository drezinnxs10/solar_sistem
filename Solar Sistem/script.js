const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
    planet.addEventListener('click', () => {
        const currentScale = planet.style.transform.includes('scale') ? parseFloat(planet.style.transform.split('(')[1].split(')')[0]) : 1;
        const newScale = currentScale === 1 ? 1.5 : 1;
        planet.style.transform = `scale(${newScale})`;
    });
});

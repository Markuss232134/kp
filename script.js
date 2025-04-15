const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const planet = {
    radius: 150,
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 0.02,
    angle: 0,
    oceanColor: 'rgba(35, 91, 156, 1)',
    landColor: 'rgba(34, 139, 34, 0.7)',
    glowColor: 'rgba(35, 91, 156, 0.5)',
};

function drawPlanet() {
    ctx.shadowBlur = 40;
    ctx.shadowColor = planet.glowColor;

    ctx.beginPath();
    ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = planet.oceanColor;
    ctx.fill();
    ctx.closePath();

    drawNorthAmerica();

    ctx.shadowBlur = 0;
}

function drawNorthAmerica() {
    ctx.beginPath();
    ctx.moveTo(planet.x - 60, planet.y - 70);
    ctx.lineTo(planet.x - 90, planet.y - 50);
    ctx.lineTo(planet.x - 100, planet.y - 10);
    ctx.lineTo(planet.x - 80, planet.y + 40);
    ctx.lineTo(planet.x - 40, planet.y + 60);
    ctx.lineTo(planet.x + 10, planet.y + 50);
    ctx.lineTo(planet.x + 30, planet.y + 10);
    ctx.lineTo(planet.x + 40, planet.y - 20);
    ctx.lineTo(planet.x + 10, planet.y - 50);
    ctx.lineTo(planet.x - 60, planet.y - 70);
    ctx.closePath();

    ctx.fillStyle = planet.landColor;
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    planet.x = canvas.width / 2 + Math.cos(planet.angle) * 300;
    planet.y = canvas.height / 2 + Math.sin(planet.angle) * 300;

    drawPlanet();

    planet.angle += planet.speed;

    requestAnimationFrame(animate);
}

animate();

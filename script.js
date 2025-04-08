
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const planet = {
    radius: 100, 
    x: canvas.width / 2,  
    y: canvas.height / 2,
    speed: 0.02,  
    angle: 0,      
    color: 'rgba(255, 204, 0, 0.9)', 
    glowColor: 'rgba(255, 204, 0, 0.5)', 
};


function drawPlanet() {
    
    ctx.shadowBlur = 40;
    ctx.shadowColor = planet.glowColor;

    
    ctx.beginPath();
    ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = planet.color;
    ctx.fill();
    ctx.closePath();

    
    ctx.shadowBlur = 0;
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

// Set up canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Make sure canvas fills the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Planet properties
const planet = {
    radius: 100,  // Radius of the planet
    x: canvas.width / 2,  // Start position at the center of the canvas
    y: canvas.height / 2,
    speed: 0.02,  // Speed of movement (orbital speed)
    angle: 0,      // Angle for circular movement
    color: 'rgba(255, 204, 0, 0.9)', // Yellow color of the planet (glowing effect)
    glowColor: 'rgba(255, 204, 0, 0.5)', // Yellow glow effect
};

// Draw the planet with a glowing effect
function drawPlanet() {
    // Create glowing effect
    ctx.shadowBlur = 40;
    ctx.shadowColor = planet.glowColor;

    // Draw the planet
    ctx.beginPath();
    ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = planet.color;
    ctx.fill();
    ctx.closePath();

    // Reset shadow for other elements
    ctx.shadowBlur = 0;
}

// Animate the planet moving in a circular path
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update the planet's position to move it in a circle
    planet.x = canvas.width / 2 + Math.cos(planet.angle) * 300;  // Orbit radius of 300px
    planet.y = canvas.height / 2 + Math.sin(planet.angle) * 300;

    // Draw the planet
    drawPlanet();

    // Increment angle for movement to create a continuous orbit
    planet.angle += planet.speed;

    // Loop the animation
    requestAnimationFrame(animate);
}

// Start the animation
animate();

javascript:(function(){
    if (window.bouncingBallsLoaded) return;
    window.bouncingBallsLoaded = true;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });
    
      const balls = [];
      const colors = ['#e74c3c', '#2ecc71', '#3498db', '#f1c40f', '#9b59b6'];
    
      for (let i = 0; i < 50; i++) {
        balls.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          radius: 10 + Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let ball of balls) {
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
        ball.vx *= -1;
      }
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
        ball.vy *= -1;
      }

      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }

  animate();
})();
const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');
const bricksContainer = document.getElementById('bricks');

let ballX = 190;
let ballY = 100;
let dx = 2;
let dy = 2;
let paddleX = 160;

function moveBall() {
  ballX += dx;
  ballY += dy;
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
  
  if (ballX >= 380 || ballX <= 0) {
    dx = -dx;
  }
  if (ballY <= 0) {
    dy = -dy;
  }
  if (ballY >= 590) {
    alert("Game Over");
    document.location.reload();
  }
  if (ballY >= 550 && ballX >= paddleX && ballX <= paddleX + 80) {
    dy = -dy;
  }
  
  requestAnimationFrame(moveBall);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft' && paddleX > 0) {
    paddleX -= 20;
  }
  if (e.key === 'ArrowRight' && paddleX < 320) {
    paddleX += 20;
  }
  paddle.style.left = paddleX + 'px';
});

function createBricks() {
  const rowCount = 5;
  const columnCount = 6;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const brick = document.createElement('div');
      brick.classList.add('brick');
      brick.style.top = (i * 25) + 'px';
      brick.style.left = (j * 70) + 'px';
      bricksContainer.appendChild(brick);
    }
  }
}

createBricks();
moveBall();

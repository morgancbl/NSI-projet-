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

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      // calculs
    }
  }
}

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
        dy = -dy;
      }
    }
  }
}


var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}






createBricks();
moveBall();

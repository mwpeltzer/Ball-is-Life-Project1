console.log('connected')
//WELCOME PAGE//
//////////////
$('#home-page-directions').append('<p id="directions">Watch out for the blocks that come towards you! Make sure keep the ball alive by jumping over the blocks with the space bar! #ballislife</p>')

// $('button').on('click', function(){
//     var removeHome = $('name-input').val()
//
// })

//add form to the div that recieves name input//
//add click listener to the begin button. Once button is clicked remove directions and su bmit name form and relocate name to gameplay page. This will also add the elements for the gameplay page (includes: canvas, new name box, live score feed, previous scores)//



//GAMEPLAY PAGE//
////////////////

var canvas = document.getElementById('canvasScreen');
var ctx = canvas.getContext('2d');
var score = 0;
var spacebar = false;

var obstacle = {
  obstaclex: 650,
  obstacley: 290,
  obstaclevx: 5,
  obstaclevy: 0,
  obstaclew: 40,
  obstacleh: 40,
  obstacleColor: 'red',
  obstacleStart: true
}

var ball = {
  ballx: 100,
  bally: 300,
  ballvx: 0,
  ballvy: -5,
  ballRadius: 30,
  ballColor: 'orange'
}

var terrain = {
  terrainx: 600,
  terrainy: 330,
  terrainColor: 'blue'
}

function drawObstacle() {
  if (obstacle.obstacleStart){
  ctx.beginPath();
  ctx.fillRect(obstacle.obstaclex, obstacle.obstacley, obstacle.obstaclew, obstacle.obstacleh);
  ctx.fillStyle = obstacle.obstacleColor;
  ctx.fill();
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.ballx, ball.bally, ball.ballRadius, 0, Math.PI * 2, true);
  ctx.fillStyle = ball.ballColor;
  ctx.closePath();
  ctx.fill();
}

function drawTerrain() {
  ctx.beginPath();
  ctx.fillRect(0, 330, terrain.terrainx, terrain.terrainy);
  ctx.fillStyle = terrain.terrainColor;
  ctx.closePath();
  ctx.fill();
}

function obstacleMove() {
  obstacle.obstaclex + obstacle.obstaclevx > 0
  obstacle.obstaclex -= obstacle.obstaclevx
}

function ballJump() {
  if (ball.bally + ball.ballvy > 305) {
    ball.ballvy = -ball.ballvy
    spacebar = false
  } else if (ball.bally + ball.ballvy < 175) {
    ball.ballvy = -ball.ballvy
  }
  ball.bally += ball.ballvy;
}

function keyDownHandler(e) {
  if (e.keyCode == 32) {
    spacebar = true
  }
}

function draw() {
  if (canvas.getContext) {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTerrain();
    // XXX:
    drawTerrain();
    drawBall();
    if (spacebar) {
      ballJump()
    }
    drawObstacle();
    // XXX:
    drawObstacle();
    obstacleMove();
    scoreText();
  }
  window.requestAnimationFrame(draw)
}

function checkCollision() {
  var collided = (((ball.ballx + (ball.ballRadius) > obstacle.obstaclex) && (obstacle.obstaclex + obstacle.obstaclew > ball.ballx)) && (((ball.ballRadius) + ball.bally > obstacle.obstacley) && (obstacle.obstacleh + obstacle.obstacley > ball.bally)))
  if (collided && obstacle.obstacleStart) {
    obstacle.obstacleStart = false
    alert('you suck')
    window.cancelAnimationFrame(draw)
  }
}

function scoreText() {
  checkCollision()
  if (obstacle.obstacleStart){
  score++
  ctx.font = '20px Ariel serif';
  ctx.fillStyle = 'Black';
  ctx.fillText('Score: ' + score, 475, 30);
  }
  ctx.font = '20px Ariel serif';
  ctx.fillStyle = 'Black';
  ctx.fillText('Score: ' + score, 475, 30);
}

$(document).keydown(keyDownHandler)




// background colors?
// function canvasGradient() {
//   var linearGradient = ctx.createLinearGradient(0, 0, 150, 150)
// }


//GAME OVER PAGE//
/////////////////
//once a player hits an object initiate this page.
//show title 'loser!' in the div
//show score that was obtained
//show button that will reset the game. Upon click it will reset the canvas to begin position(eric talked about this) and add the score into the list of past sores div

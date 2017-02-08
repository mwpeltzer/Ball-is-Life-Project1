console.log('connected')

//GLOBAL VARIABLES//
///////////////////



//WELCOME PAGE//
//////////////

//jQuery/////
//add directions to the div//
$('#home-page-directions').append('<p id="directions">Watch out for the blocks that come towards you! Make sure keep the ball alive by jumping over the blocks with the space bar! #ballislife</p>')

// $('button').on('click', function(){
//     var removeHome = $('name-input').val()
//
// })

//add form to the div that recieves name input//
//add click listener to the begin button. Once button is clicked remove directions and su bmit name form and relocate name to gameplay page. This will also add the elements for the gameplay page (includes: canvas, new name box, live score feed, previous scores)//



//GAMEPLAY PAGE//
////////////////
//canvas algorithms
////gravity, objects, timers, live score
var canvas = document.getElementById('canvasScreen');
var ctx = canvas.getContext('2d');
var score = 0;
var spacebar = false;

var obstacle = {
  obstaclex: 50,
  obstacley: 50,
  obstaclevx: 3,
  obstaclevy: 0,
  obstacleColor: 'blue'
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
  terrainColor: '#0000ff'
}

function drawObstacle() {
  ctx.beginPath();
  ctx.fillRect(540, 280, obstacle.obstaclex, obstacle.obstacley);
  ctx.fillStyle = obstacle.obstacleColor;
  ctx.fill();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.ballx, ball.bally, ball.ballRadius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = ball.ballColor;
    ctx.fill();
  }

function drawTerrain() {
  ctx.beginPath();
  ctx.fillRect(0, 330, terrain.terrainx, terrain.terrainy);
  ctx.closePath();
  ctx.fillStyle = terrain.terrainColor;
  ctx.fill();
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

// function keyUpHandler(e) {
//   if (e.keyCode == 32) {
//     spacebar = false
//   }
// }

function draw() {
  if (canvas.getContext){
    ctx.beginPath();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawTerrain();
    drawBall();
    drawObstacle();
    if (spacebar) {
      ballJump()

      // spacebar = false
    }

//get the draw function to completely animate the balljump as long as it's within it's limits

    // obstacle.obstaclex += obstacle.obstaclevx;

    // if (obstacle.obstaclex + obstacle.obstaclevx > 250 || obstacle.obstaclex + obstacle.obstaclevx < 30) {
    //   obstacle.obstaclevx = -obstacle.obstaclevx
    // }
  score++
  raf = window.requestAnimationFrame(draw);
  }
scoreText();
}

function scoreText(){
  ctx.font = '20px Ariel serif';
  ctx.fillStyle = 'Black';
  ctx.fillText('Score: ' + score, 475, 30);
}

$(document).keydown(keyDownHandler)
//JUMP CODE?//
/////////////



// var keys = {};
// var keyCodes = {
//   32: 'space'
// }
// for (var kc in keyCodes) {
//   keys[keyCodes[kc]] = false;
// }
// window.onkeydown = function(event) {
//   if (keyCodes.hasOwnProperty(event.keyCode)) {
//     keys[keyCodes[event.keyCode]] = true;
//   }
// }
// window.onkeyup = function(event) {
//   if (keyCodes.hasOwnProperty(event.keyCode)) {
//     keys[keyCodes[event.keyCode]] = false;
//   }
// }


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

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

var obstacle = {
  obstaclex: 50,
  obstacley: 50,
  obstaclevx: 3,
  obstaclevy: 0,
  obstacleColor: 'blue',
  drawObstacle: function() {
    ctx.beginPath();
    ctx.fillRect(540, 280, this.obstaclex, this.obstacley);
    ctx.fillStyle = this.obstacleColor;
    ctx.fill();
  }
}

var ball = {
  ballx: 100,
  bally: 300,
  ballvx: 0,
  ballvy: -5,
  ballRadius: 30,
  ballColor: 'orange',
  drawBall: function() {
    ctx.beginPath();
    ctx.arc(this.ballx, this.bally, this.ballRadius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.ballColor;
    ctx.fill();
  }
}

var terrain = {
  terrainx: 600,
  terrainy: 330,
  terrainColor: '#0000ff',
  drawTerrain: function() {
    ctx.beginPath();
    ctx.fillRect(0, 330, this.terrainx, this.terrainy);
    ctx.closePath();
    ctx.fillStyle = 'this.terrainColor;'
    ctx.fill();
    }
}

function drawBall() {
  if (ball) {

  }
}


function draw() {
  if (canvas.getContext){
    ctx.beginPath();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    terrain.drawTerrain();
    ball.drawBall();
    obstacle.drawObstacle();

    // ball.bally += ball.ballvy; // this makes the ball move
    // obstacle.obstaclex += obstacle.obstaclevx;

    if (obstacle.obstaclex + obstacle.obstaclevx > 250 || obstacle.obstaclex + obstacle.obstaclevx < 30) {
      obstacle.obstaclevx = -obstacle.obstaclevx
    }
    if (ball.bally + ball.ballvy > 300 || ball.bally + ball.ballvy < 175) {
      ball.ballvy = -ball.ballvy
    }
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

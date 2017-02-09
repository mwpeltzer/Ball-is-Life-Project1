console.log('connected')
//WELCOME PAGE//
//////////////
$('#home-page-directions').append('<p id="directions">Watch out for the blocks that come towards you! Make sure keep the ball alive by jumping over the blocks with the space bar! #ballislife</p>')

$('#beginButton').on('click', function(){
    beginGame()
})

//add form to the div that recieves name input//
//add click listener to the begin button. Once button is clicked remove directions and su bmit name form and relocate name to gameplay page. This will also add the elements for the gameplay page (includes: canvas, new name box, live score feed, previous scores)//



//GAMEPLAY PAGE//
////////////////


function beginGame() {
  $(document).keydown(keyDownHandler)
  setInterval(function() {
    draw(), update()
  }, 20)
  //!!THE BELOW LINE WILL NOT WORK USING JQUERY!!//
  var canvas = document.getElementById('canvasScreen');
  var ctx = canvas.getContext('2d');
  var score = 0;
  var spacebar = false;
  var obstacleArray = [];

  //Obstacle constructor//
  function Obstacle(xcord) {
    this.obstaclex = xcord;
    this.obstacley = 290;
    this.obstaclevx = 5;
    this.obstaclevy = 0;
    this.obstaclew = 40;
    this.obstacleh = 40;
    this.obstacleColor = 'red';
    this.obstacleStart = true;
    this.drawObstacle = function() {
      if (this.obstacleStart) {
        ctx.beginPath();
        ctx.fillRect(this.obstaclex, this.obstacley, this.obstaclew, this.obstacleh);
        ctx.fillStyle = this.obstacleColor;
        ctx.fill();
      }
    }
  }

  //Object variables//
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

  //function logic//

  ////Obstacle loops////
  function randomObstacle() {
    for (i = 0; i < 100; i++) {
      var newObstacle = new Obstacle(650 + i * getRandomInt(350, 450))
      obstacleArray.push(newObstacle)
    }
  }
  randomObstacle();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Canvas objects//
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

  function obstacleMove(obstacle) {
    obstacle.obstaclex + obstacle.obstaclevx > 0
    obstacle.obstaclex -= obstacle.obstaclevx
  }

  //Object movement logic//
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

  //Canvas drawing function//
  function draw() {
    if (canvas.getContext) {
      ctx.beginPath();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawTerrain();
      // XXX:
      drawTerrain();
      score++
      ctx.font = '20px Ariel serif';
      ctx.fillStyle = 'Black';
      ctx.fillText('Score: ' + score, 475, 30);
      drawBall();
      if (spacebar) {
        ballJump()
      }
    }
    // window.requestAnimationFrame(draw)
  }

  function update() {
    obstacleCreate()
    for (i = 0; i < obstacleArray.length; i++) {
      obstacleMove(obstacleArray[i]);
      checkCollision(obstacleArray[i])
    }
  }

  function obstacleCreate() {
    for (i = 0; i < obstacleArray.length; i++) {
      obstacleArray[i].drawObstacle()
    }
  }

  //Canvas collision detection//
  function checkCollision(obstacle) {
    var collided = (((ball.ballx + (ball.ballRadius - 5) > obstacle.obstaclex) && (obstacle.obstaclex + obstacle.obstaclew > ball.ballx)) && (((ball.ballRadius - 5) + ball.bally > obstacle.obstacley) && (obstacle.obstacleh + obstacle.obstacley > ball.bally)))
    if (collided && obstacle.obstacleStart) {
      obstacle.obstacleStart = false
      $('.loserPage').css('display', 'inline-block')
      $('#scores, #score').text(score)
      obstacleArray = []
      $('#retryButton').on('click', function() {
        $('.loserPage').css('display', 'none')
        reset()
      })
    }
  }

  //Canvas reset//
  function reset() {
    score = 0
    obstacleArray = []
    randomObstacle()
    obstacleCreate()
    draw()

  }
}
//GAME OVER PAGE//
/////////////////
//once a player hits an object initiate this page.


//show title 'loser!' in the div
//show score that was obtained
//show button that will reset the game. Upon click it will reset the canvas to begin position(eric talked about this) and add the score into the list of past sores div

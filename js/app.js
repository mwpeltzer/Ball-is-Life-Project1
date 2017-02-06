console.log('connected')

//GLOBAL VARIABLES//
///////////////////
var gamePiece
var obstacles = []
var scoreText


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
function draw() {
  var canvas = document.getElementById('canvasScreen');
  var raf;
  if (canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath();
  }
  function scoreText(){
    ctx.font = '20px Ariel serif';
    ctx.fillStyle = 'Black';
    ctx.fillText('Score: ', 475, 30);
  }
  var ball = {
  x: 100,
  y: 250,
  vx: 0,
  vy: -4,
  radius: 30,
  color: 'orange',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }
}

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
scoreText();
}



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

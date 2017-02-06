console.log('connected')

//GLOBAL VARIABLES//
///////////////////
var gamePiece
var obstacles = []
var myScore


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
  var canvas = document.getElementById('canvasScreen')
  if (canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath();
    ctx.fillStyle = 'orange'
    ctx.arc(100, 250, 30, 0, Math.PI * 2, true);
    //use moveTo() method later to draw ball lines?
    ctx.fill();
  }
  function scoreText(){
  ctx.font = '20px Ariel serif';
  ctx.fillStyle = 'Black';
  ctx.fillText('Score: ', 475, 30);
}
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

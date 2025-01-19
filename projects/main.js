const score = JSON.parse(localStorage.getItem('score')) ||  {
  wins : 0,
  losses : 0,
Ties: 0          };
/*   if (!score) {
score = {
wins : 0,
losses : 0,
Ties: 0          }
} */
updateScoreElement();
function pickComputermove (){

const randomNumber = Math.random();
let computerMove= '';
if (randomNumber > 0 && randomNumber < 1 / 3) {
computerMove = '✊';
} else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
computerMove= '🖐';
}  else if (randomNumber > 2 / 3 && randomNumber < 1) {
computerMove = '✌';

}  
return computerMove;
}
function playGame(playerMove) {

const computerMove = pickComputermove();
console.log(computerMove);

let result = '';
if (playerMove === '✌' ) {
if (computerMove === '✊') {
result = 'You Lose';
} else if (computerMove === '🖐') {
result = 'You Win';
} else if (computerMove === '✌') {
result = 'Tie';
} 
}  else if (playerMove === '🖐') {
if (computerMove === '✊') {
result = 'You win';
} else if (computerMove === '🖐') {
result = 'Tie';
} else if (computerMove === '✌') {
result = 'You lose';
} 

}  else if(playerMove === '✊'){
      if (computerMove === '✊') {
result = 'Tie';
} else if (computerMove === '🖐') {
result = 'You lose';
} else if (computerMove === '✌') {
result = 'You win';
} 
}

if (result === 'You win') {
score.wins += 1;
} else if (result === 'You lose') {
score.losses += 1;
} else if (result === 'Tie') {
score.Ties += 1;
}

updateScoreElement();
localStorage.setItem('score', JSON.stringify(score));


document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move').innerHTML = `You ${playerMove}  -  ${computerMove} Computer`;     
}

function updateScoreElement() {

document.querySelector('.js-p').innerHTML = `wins : ${score.wins} , losses : ${score.losses} , Ties : ${score.Ties}`
}

  
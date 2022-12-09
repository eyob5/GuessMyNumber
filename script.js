'use strict';
let number=Math.trunc(Math.random() * 20 + 1);
let score=20;
let highScore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent='NoNumber';
    }
       else if(guess === number){
        document.querySelector('.number').textContent=number;
        document.querySelector('.message').textContent='Correct Number';
        score++;
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='green';
if(score>highScore){
    highScore=score;
    document.querySelector('.highscore').textContent=highScore;
}
       }
      else if(guess !== number){
        if(score > 1){
        score--;
        document.querySelector('.message').textContent=guess > number ? 'Too High': 'Too Low';
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='Lost the game';
            document.querySelector('.score').textContent=0;
         }
       }
});
document.querySelector('.again').addEventListener('click',function(){
number=Math.trunc(Math.random() * 20 + 1);
// console.log(number);
score=20;
document.querySelector('.score').textContent=score;
document.querySelector('body').style.backgroundColor='black';
document.querySelector('.message').textContent='Start guessing...';
document.querySelector('.guess').value='';
document.querySelector('.number').textContent='?';
// document.querySelector('.highscore').textContent=0;
});

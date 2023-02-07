//1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

function playGame(score1, score2) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  for (let i = 0; i < 3; i++) {
    score1 += getRandomInt(1, 7);
    score2 += getRandomInt(1, 7);
  }
  score1 > score2
    ? console.log("Выиграл игрок номер 1")
    : score2 > score1
    ? console.log("Выиграл игрок номер 2")
    : console.log("Ничья!");
}
playGame(0, 0);

//2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )
let startDate = new Date(2000,0,13);
let endDate = new Date();
let sum=0;

for(let t= startDate; t<=endDate; t.setMonth(startDate.getMonth()+1)){
if(t.getDate()===5){
  sum++;
}
 }
console.log(sum)
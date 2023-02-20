//1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function playGame(score1, score2) {
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
let startDate = new Date(2000, 0, 13);
let endDate = new Date();
let sum = 0;

for (let t = startDate; t <= endDate; t.setMonth(t.getMonth() + 1)) {
  if (t.getDay() === 5) {
    sum++;
  }
}
//3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)
// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
// макс 10

// function getRandomIntInclusive(min, max) {
//   let arr7 = [];
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   let runNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   let t1 = max - runNumber;
//   arr7.push(t1);
//   // не нашла пока решения
// }
//
// getRandomIntInclusive(2, 9);

//1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция
// setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2,
// третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите
//результат его работы на экран.

function returnRandomNumber(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}
let time1 = returnRandomNumber(1, 6) * 1000;
let time2 = returnRandomNumber(1, 6) * 1000;
let time3 = returnRandomNumber(1, 6) * 1000;

let p1 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("один");
  }, time1);
});
let p2 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("два");
  }, time2);
});
let p3 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("три");
  }, time3);
});
Promise.race([p1, p2, p3]).then(function (value) {
  console.log(value);
});

//2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.
const prom = getNum();
function getNum() {
  return new Promise(function (resolve) {
    let ranNum = returnRandomNumber(1, 5);
    setTimeout(() => {
      resolve(ranNum);
    }, 3000);
  });
}
async function showResult() {
  let result2 = await prom;
  return result2;
}
showResult().then((r) => console.log(r * r));

//3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum,
// а затем найдет сумму полученных чисел и выводит на экран.
const prom2 = getNum2();
function getNum2() {
  return new Promise(function (resolve) {
    let ranNum = returnRandomNumber(6, 10);
    setTimeout(() => {
      resolve(ranNum);
    }, 5000);
  });
}
async function showResult2() {
  let resultProm1 = await prom;
  let resultProm2 = await prom2;
  let sum = resultProm1 + resultProm2;
  return sum;
}
showResult2().then((r2) => console.log(r2));

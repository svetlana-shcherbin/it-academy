//1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция
// setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2,
// третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите
//результат его работы на экран.

function returnRandomNumber(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}
function createPromise(res, rej) {
  return new Promise(function (resolve, reject) {
    const time = returnRandomNumber(1, 6) * 1000;
    setTimeout(() => {
      resolve(res);
      reject(rej);
    }, time);
  });
}
let p1 = createPromise("один", "error");
let p2 = createPromise("два", "error");
let p3 = createPromise("три", "error");
Promise.race([p1, p2, p3]).then(function (value) {
  console.log(value);
});

//2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.
const prom1 = getNum(1, 5, 3000);
function getNum(number1, number2, timeout) {
  return new Promise(function (resolve) {
    let ranNum = returnRandomNumber(number1, number2);
    setTimeout(() => {
      resolve(ranNum);
    }, timeout);
  });
}
async function showResult() {
  let result2 = await prom1;
  return result2;
}
showResult().then((r) => console.log(r * r));

//3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum,
// а затем найдет сумму полученных чисел и выводит на экран.
const prom2 = getNum(6, 10, 5000);

async function showResult2() {
  let resultProm1 = await prom1;
  let resultProm2 = await prom2;
  let sum = resultProm1 + resultProm2;
  return sum;
}
showResult2().then((r2) => console.log(r2));

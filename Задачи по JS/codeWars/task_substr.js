//Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
//Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

//Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
function areYouPlayingBanjo(name) {
    // Implement me
    const str = name.substring(0, 1);
    if (str == 'R' || str == 'r')
    console.log(name + " plays banjo");
    else
      console.log(name + " does not play banjo");
  }
  areYouPlayingBanjo('Ruslan');



  //Напишите вызываемую функцию, repeatStrкоторая повторяет 
  //заданную строку stringточное количество nраз.

  function repeatStr (num, str) {
    let newStr = '';
    for (let i = 1; i <= num; i++){
      newStr += str;
    }
    console.log(newStr);
  }
  repeatStr(5, 'Hi');
// альтернативный вариант 
// Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество 
//соединённых вместе копий строки, на которой он был вызван.
function repeatStrSecond (num, str) {
    console.log(str.repeat(num));
  }
  repeatStrSecond(3, 'Kafka');

  //Учитывая массив целых чисел, вернуть 
  //новый массив с удвоением каждого значения.

  function maps(x){
    let result = [];  
    for (let i = 0; i < x.length; i++){
      let newArr = x[i] * 2;
      result.push(newArr);  
    }
    console.log(result);
  }
  maps([1,2,3]);


  function maps(x){
    console.log(x.map(n => n * 2));
  }
  maps([2,1,2]);



// Первое столетие охватывает период с 1 года по 100 год включительно , 
// второе столетие — с 101 года по 200 год включительно и т. д.
// Учитывая год, верните столетие, в котором он находится.
function century(year) {
    // Finish this :)
    let age = Math.ceil(year / 100);
    console.log(age);
  }
  century(1100);

  const centurySec = year => Math.ceil(year/100)

  function century(year) {
    let  century = 0;
    
    for(let i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }
  //------------------------
  //Создайте простую функцию с именем приветствие , которая возвращает самое известное «привет, мир!».
  //Конечно, это настолько просто, насколько это возможно. Но насколько умным вы можете быть, 
  //чтобы создать самый креативный приветственный мир, какой вы только можете себе представить? 
  //Какое решение «hello world» вы хотели бы показать своим друзьям?
  /*
⢳⣿⣿⡏⢚⠿⠓⡨⠒⠒⠒⠲⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⣾⣿⣿⢣⢿⡕⠫⠊⢀⢌⠹⡐⡟⢣⠄⠄⠄⢀⣠⣤⣤⣤⣤⣤⣀⠄⠄⠄
⣸⣿⣿⣿⣠⠏⡔⠁⠄⠐⠢⠣⢡⣙⠄⡇⣶⣿⣿⣿⣿⢟⣻⣿⣿⠏⠄⠄
⣿⣿⣿⡇⢩⠘⣴⣿⣥⣤⢦⢁⠄⠉⡄⡇⠛⠛⠛⢛⣭⣾⣿⣿⡏⠄⠄⠄
⣿⣿⣿⡇⠹⢇⡹⣿⣿⣛⣓⣿⡿⠞⠑⣱⠄⢀⣴⣿⣿⣿⣿⡟⠄⠄⠄⠄
⣿⣿⣿⣧⣸⡄⣿⣪⡻⣿⠿⠋⠄⠄⣀⣀⢡⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄
⠘⣿⣿⣿⣿⣷⣭⣓⡽⡆⡄⢀⣤⣾⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄
⠄⢨⡻⡇⣿⢿⣿⣿⣭⡶⣿⣿⣿⣜⢿⡇⡿⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠸⣷⡅⣫⣾⣿⣿⣿⣷⣙⢿⣿⣿⣷⣦⣚⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⢉⣾⡟ */ function greet() {
    return "hello world!"}/*⠄
⠄⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿⢟⣫⣾⣿⣷⡹⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄
⠄⠄⠄⠄⢮⣭⣍⡭⣭⡵⣾⣿⣿⣿⡎⣿⣿⣌⠻⠿⠿⠿⠟⠋⠄⠄⠄⠄
⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣹⣿⣿⣿⡇⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⣀⣴⣾⣶⡞⣿⣿⣿⣿⣿⣿⣿⣾⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⣠⣾⣿⣿⣿⣿⣿⣹⣿⣿⣿⣿⣿⡟⣹⣿⣳⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
*/

  function greet () {

    let teerg = "!DLROW OLLEH"
    
    console.log(teerg.split("").reverse().join("").toLowerCase());
    }
    greet();
//---
//
    const rps = (p1, p2) => {
        if (p1 === p2) console.log("Draw!");
        let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
        console.log(`Player 1 choice ${p1}!`);
        console.log(`Player 2 choice ${p2}!`);
        if (p2 === rules[p1]) {
            console.log("Player 1 won!");
        }
        else {
            console.log("Player 2 won!");
        }
      };
      rps("rock","paper");



      function rps(p1, p2) {
        var choices = ['rock', 'paper', 'scissors'];
        var x = choices.indexOf(p1);
        var y = choices.indexOf(p2);
        
        if (x === y) return 'Draw!';
        if (x === 0 && y === 2) return 'Player 1 won!';
        if (x === 2 && y === 0) return 'Player 2 won!';
        if (x > y) return 'Player 1 won!'
        else return 'Player 2 won!';
      }


//Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
//Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
//Функция должна возвращать числовой результат после применения выбранной операции.

function basicOp(operation, value1, value2)
{ 

  // Code
  //return eval(value1 + operation + value2);
  switch(operation){
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
    default: return 'Its not math symbol!';
  }
}
console.log(basicOp('/',2,6));




//Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», 
//а любую цифру 5 и выше на «1». Верните полученную строку.
//Примечание: ввод никогда не будет пустой строкой
function fakeBin(str){
let newStr = "";
for(let i = 0; i < str.length; i++){
  if(Number(str[i]) >= 5){
    newStr += "1"
    }
  else{
    newStr += "0";
    }
  }
  return newStr;
}
console.log(fakeBin('12316'));


function fakeBin(str){
  let arr = str.split('');
  let newarr = [];

  for (let i = 0; i < arr.length; i ++){
    if (arr[i] >= 5 ){
      arr[i] = 1;
      newarr.push(arr[i]);
    } else {
      arr[i] = 0;
      newarr.push(arr[i]);
    }
    //newarr.join('');
  }
  //newarr.join('');
  return newarr.join('');
}
console.log(fakeBin('12316'));

fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');
console.log(fakeBin('12316'));


//Часы показывают hчасы, mминуты и sсекунды после полуночи.
//Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.

function past(hour, minutes, seconds){
  //#Happy Coding! ^_^
  return (('3600' * hour) + ('60' * minutes) + seconds)* 1000 ;
}
console.log(past(0,1,1));

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
console.log(past(0,1,1));


function past(h, m, s){
  let hours = h * 3600 * 1000;
  let minutes = m * 60 * 1000;
  let seconds = s * 1000;
  
  return hours + minutes + seconds;
}
console.log(past(0,1,1));



//Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"
//После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
//"found the needle at position "плюс indexон нашел иглу

function findNeedle(haystack) {
  // your code here
  for (let needle of haystack){
    let index = haystack.indexOf('needle');
    if (needle == 'needle'){
      return `found the needle at position ${index}`;
    } 
  }
}

console.log(findNeedle(['hay', 'needle', 'junk', 'hay', 'hay', 'moreJunk']));


// Завершите решение так, чтобы оно возвращало true, если первый переданный 
// аргумент(строка) заканчивается 2-м аргументом (также строкой).

function solution(str, ending){
  // TODO: complete
  return str.indexOf(ending, str.length - ending.length) !== -1;
}
console.log(solution('abcde', 'c1e'));

// 2 вариант
// метод endsWith() определяет, совпадает ли конец данной строки с указанной строкой, или символом, возвращая при этом логическое 
// значение (true если данная строка заканчивается указанной строкой, в противном случае false). 
// Обращаю Ваше внимание, что метод endsWith() является регистрозависимым.

function solution(str, ending){
  return str.endsWith(ending);
}

const solution = (str, ending) => str.endsWith(ending);

// Создайте функцию, которая принимает целое число в качестве 
// аргумента и возвращает "Четное" для четных чисел или "Нечетное" для нечетных чисел.


function even_or_odd(number) {
  if (number % 2 === 0){
    console.log ('Число - чётное');
  } else {
    console.log ('Число - нечетное');
  }
}
even_or_odd(5);

const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd' ;
console.log(even_or_odd(3));





// Возвращает количество гласных в данной строке.
// Мы рассмотрим a, e, i, o, u как гласные для этого Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.


function getCount(str) {
  let vowelsCount = 0;
  const arrSym = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str){
    if (arrSym.includes(char) && str.toLowerCase()){
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(getCount('absv'));

// /[aeiou]/ig - это регулярное выражение, который соответствует любой гласной. 
// Он будет соответствовать любому из a, e, i, o, u, флаг i (/ [aeiou] / яg) 
// делает его нечувствительным к регистру, а флаг g означает «глобальный» или, другими словами, «не останавливаться после первый матч».

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


// В этом ката вы создадите функцию,которая берет список неотрицательных целых чисел 
// и строк и возвращает новый список с отфильтрованными строками.

function filter_list(data) {
  // Return a new array with the strings filtered out
  return data.filter(function(num) {
    if ( typeof(num) === 'number'){
      return true;
    }
  })
}

function filter_list(l) {
  var res = [];
              for(var item=0;item<l.length;item++)
              {
                  if (typeof l[item] === "number")
                  {
                      res.push(l[item]);
                  }
    
              }
              return res;
  }


let arr = [1,2,4,'a',7,0,'n'];
console.log(filter_list(arr));


// В вашем классе был тест, и вы его прошли. Поздравления!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.

// Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат.!

// Возврат True если тебе лучше, иначе False!

// Примечание:
//Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!

function betterThanAverage(classPoints, yourPoints) {
// Your code here
let sumPointsClass = classPoints.reduce((previous, current) => previous + current);
let lengthPointsClass = sumPointsClass / classPoints.length;

if (lengthPointsClass > yourPoints){
return false
} else {
return true
}
}
 
function betterThanAverage(classPoints, yourPoints) {
// Your code here
var classAvg = 0;
for (var i = 0; i < classPoints.length; i++){
classAvg += classPoints[i];
}
classAvg = classAvg/classPoints.length;
return yourPoints > classAvg;
}


// Учитывая массив целых чисел, удалите наименьшее значение. Не изменять исходный массив/список. 
// Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. Если вы получаете пустой массив/список, верните пустой массив/список.
// Не меняйте порядок оставшихся элементов.

function removeSmallest(numbers) {
numbers = numbers.slice(0); // создаем новый массив
const min = Math.min(...numbers);
numbers.splice(numbers.indexOf(min), 1); // удаляем один элемент массива с наименьшим индексом
return numbers;
}


// Банкоматы допускают 4 или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 цифр или ровно 6 цифр.

// Если функции передается допустимая строка PIN-кода, return true, else return false.
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


  function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] > '9' || pin[i] < '0') {
       return false;
    }

  }
  return true;
}


console.log(validatePIN("12.2"));




// Завершите функцию квадратной суммы так, чтобы она квадратировала каждое переданное в нее число, а затем суммировала результаты вместе.

// Например, для [1, 2, 2]него следует вернуть 9because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++){
    let pow = Math.pow(numbers[i], 2);
    result = result + pow;
  }
  return result;
}

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

console.log(squareSum([1,2,3]));





String.prototype.toJadenCase = function () {
D
};


function toJadenCase(str) {
  //...
  let newStr = str.split(" ");
  let res = "";
  let arr = [];
  for (let i = 0; i < newStr.length; i++){
    let elem = newStr[i];
    let firstSymb = elem.substring(0, 1).toUpperCase();
    let otherSymb = elem.substring(1, elem.length);
    res += firstSymb + otherSymb + " ";
    arr.push(res);
    arr.join(' ');
  }
  return arr.join(' ');
   //res;
};


console.log(toJadenCase('выше ярче веселее сильнее'));


// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. 
// Все пробелы в строке должны быть сохранены.

function reverseWords(str) {
  // Go for it
  str = str.split(" ");
  let newArr = [];
  for (let i = 0; i < str.length; i++){
    newArr.push(str[i].split("").reverse().join(""))
  }
  return newArr.join(" ");
}


function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}

console.log(reverseWords('Hello motherfucker'))


function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}

function addBinary(a,b){
  return Number(a + b).toString(2);
}


console.log(addBinary(2,2))



//Завершите решение, чтобы оно перевернуло переданную в него строку..

function solution(str){
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--){
      reverse += str[i];
    }
    return reverse;
}

function solution(str){
   let reverse = str.split('').reverse().join('');
   return reverse;
}
const solution = str => str.split('').reverse().join('');

console.log(solution('удачи тебе дед макар'));

function removeEveryOther(arr){
  //your code here
  return arr.filter(function(item, index) {
    return index % 2 === 0;
  } );
  
}
function removeEveryOther(arr){
  let newArr=[];
for (let i = 0; i < arr.length; i += 2){
  newArr.push(arr[i]);
  }
return newArr;
}

let arra =  ["Привет", "тебе", "мальчик", "Миша"];

console.log(removeEveryOther(arra));
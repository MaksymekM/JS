//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
function higher(y){
    console.log(y.toUpperCase());
};
higher('hello world');
higher('lorem ipsum');
higher('javascript is cool');
higher('hello world');

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
    x='HELLO WORLD';
    console.log(x.toLowerCase());
    console.log(('LOREM IPSUM').toLowerCase());
    console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.replaceAll(' ',''));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
     let str2 = 'Ревуть воли як ясла повні'; //-> ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    console.log(str2.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numArr =[10,8,-7,55,987,-1011,0,1050,0];
    let aToS =numArr.toString();
    console.log(numArr.toString());
    console.log(typeof aToS);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let rslt =[ ];
let thisnum = nums[0];
function sort(nmbs,direction){
        if (direction === 'ascending') {
            for (let nmb of nmbs) {
                if (nmb < thisnum){
                    rslt.unshift(nmb);
                } else {rslt.push(nmb)}
            }return rslt
    }else if (direction === 'descending') {
            for (let nmb of nmbs) {
                if (nmb > thisnum) {
                    rslt.unshift(nmb)
                }else {rslt.push(nmb)}
            } return rslt
        }
};
console.log(sort(nums,'descending'))
// ==========================
// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
//  -- відсортувати його за спаданням за monthDuration 1:15
let spad =
    coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration
});
console.log(spad);
//
//let rlstByMonth =[];
//function sortdesc (qwerty) {
//   for (let i = 0; i < qwerty.length; i++) {
//       const qwertyElement = qwerty[i];
//       if (qwertyElement.monthDuration > qwerty[0].monthDuration) {
//           rlstByMonth.unshift(qwertyElement);
//               } else {rlstByMonth.push(qwertyElement);}
//   }
//    return coursesAndDurationArray = rlstByMonth;
//}
//  for (let qwertyElement of qwerty) {
//      if (qwertyElement.monthDuration > qwerty[0].monthDuration) {
//          coursesAndDurationArray.unshift(qwertyElement);
//      }
//      return coursesAndDurationArray;
//  }

console.log(sortdesc(coursesAndDurationArray));
console.log(coursesAndDurationArray);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(xyz=>xyz.monthDuration>5);
console.log(filter);
//longer option,if you don't know about filer :) :
//let rlstlongerthen5 =[];
//function filtr (qwerty) {
//    for (let i = 0; i < qwerty.length; i++) {
//        const qwertyElement = qwerty[i];
//        if (qwertyElement.monthDuration > 5) {
//            rlstlongerthen5.push(qwertyElement)
//        }
//    }
//    return coursesAndDurationArray = rlstlongerthen5
//};
//console.log(filtr(coursesAndDurationArray));

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((aa,index) => {
    return {id:index+1,title: aa.title,monthDuration: aa.monthDuration}
});
console.log(map);
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)

//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
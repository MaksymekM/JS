// Дано список іменНаписати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter'
//  let n2 = 'Ron---Whisley'
//  let n3 = 'Hermione__Granger'

// let name = (string, symbol) => {
//  let clear = [];
//  if (string.includes(symbol)) {
//  let a = string.split(symbol)
//  a.forEach((item) => {
//   if (item) clear.push(item)
//   })
//   console.log(a.join(' '))
//  }
// }
// name(n1, '..')

//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//let msvgen = (lenht, limit) => {
// let x = [];
// for (let i = 0; i < lenht; i++) {
//  x.push(Math.floor(Math.random()*limit));
// }
// console.log(x)
//}
//msvgen(10,100);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

//let msv2= [2,6,1,0,456,4,100]
//console.log(msv2.sort(function (aaa,bbb) {
// return aaa - bbb
//} ));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//let msv3= [1,2,9,44,896,100,5,8]
//
// let funktion = (x) => {
//  let newM = [];
//  for (let i = 0; i < x.length; i++) {
//   newM.push(x.filter(value => value % 2 ===0))
//   return newM
//   }
//
//  }
// console.log(funktion(msv3))


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let msv4 = [1, 896, 100, 5,];
//
 let funkt =(x) =>{
         let newM = []
         for (let i = 0; i < x.length; i++) {
             newM.push(x[i]);

         }
     return newM.map(value => value.toString());
     }
         console.log(funkt(msv4))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//let nums = [11,21,3];
//let fnkt = (x, direction) => {
//    for (let i = 0; i < x.length; i++) {
//        if (direction ==='ascending') {
//            x.sort(function (a,b){return a-b})
//        }
//        else if (direction ==='descending') {
//            x.sort(function (a,b){return b-a})
//        }
//        return x
//        }
//    }
//    console.log(fnkt(nums,'descending'))
//
//// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
////  -- відсортувати його за спаданням за monthDuration
//let sortFun = coursesAndDurationArray.sort(function (a,b){
//    return b.monthDuration - a.monthDuration
//})
//console.log(sortFun)
//
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців;
let long = coursesAndDurationArray.filter(value => value.monthDuration >5)
console.log(long);


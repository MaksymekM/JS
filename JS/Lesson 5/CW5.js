//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

//let smallestNum = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     } else {
//         console.log('error')
//     }
// }
// smallestNum(1,4,66)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//let largestNum = (a,b,c) => {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else if (c > a && c > b) {
//         console.log(c)
//     } else {
//         console.log('error')
//     }
// }
// largestNum(5,7,24235)
// - створити функцію яка повертає найбільше число з масиву
//let msv = [11,2,3,4,5,6,7,8,9];
//   let lrgstNum = (x) => {
//        let max = x[0];
//        for (const element of x) {
//            if (element > max) {
//                max = element;
//            }
//       }
//      console.log(max);
//   }
//   lrgstNum(msv)

// - створити функцію яка повертає найменьше число з масиву
//let msv = [11,2,3,4,5,6,7,8,9];
// let lwstNum =(x) =>{
//     let min = x[0];
//     for (const element of x) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log(min);
// }
// lwstNum(msv)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//let msv = [1,2,10];
// let mSum =(x) =>{
//     let sum = 0;
//     for (const mSumElement of x) {
//         sum = mSumElement + sum;
//     }
//     document.write(sum)
// }
// mSum (msv)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//let msv = [11,2,3,4,5,6,7,8,9];
// let averM = (x) => {
//     let avg = 0;
//     for (const xElenent of x) {
//         avg = xElenent+avg
//     }
//     avg = avg/x.length
//     console.log(avg)
// }
// averM(msv)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
//let msv = [11,2,3,4,5,6,7,8,9];
// let  fnktLrLw = (x) => {
//     let max = x[0];
//     let min = x[0];
//     for (const maxElement of x) {
//         if (maxElement > max) {
//             max = maxElement
//         }
//     }
//     document.write(max)
//     for (const minElement of x) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     console.log(min)
// }
// fnktLrLw(msv)


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//let anyMsv = (length) => {
//     let ar = [];
//     for (let i = 0; i < length; i++) {
//         ar.push (Math.floor (Math.random()*100));
//     }
//     console.log(ar);
//     return ar;
// }
// anyMsv (5)


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
//let anyMsv = (length, limit) => {
//     let ar = [];
//     for (let i = 0; i < length; i++) {
//         ar.push (Math.floor (Math.random()*limit));
//     }
//     console.log(ar);
//     return ar;
// }
// anyMsv (5,10)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let msv = [11,2,3,4,5,6,7,8,9]
    let reverse = (y) => {
    let i = y.length-1;
    while (i>=0) {
        document.write(`<div>${y[i]}</div>`);
        i--
    }
}
reverse (msv)

//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//let ar = [1,2,3,4,5,6,7,8,9,11];
// function smallest (a,b,c) {
//    if (a < b && a < c) {
//         console.log(a);
//    } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c <a && c<b){
//          console.log(c);
//    }
//    else {console.log('error')}
// }
// smallest(1,2,4)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//function largest (a,b,c) {
//     if (a>b && a>c) {
//         console.log(a)
//     }
//     else if (b>a && b>c) {
//         console.log(b)
//     }
//     else if (c>a && c>b){
//         console.log(c)
//     }
//     else {console.log('error')}
// }
// largest(1,1,true)

// - створити функцію яка повертає найбільше число з масиву
//let msv = [11,2,3,4,5,6,7,8,9];
//  function lrgstNum (x) {
//      let max = x[0];
//      for (const element of x) {
//          if (element > max) {
//              max = element;
//          }
//          console.log(max);
//          break;
//      }
//  }
//  lrgstNum(msv)

// створити функцію яка повертає найменьше число з масиву
//let msv = [11,2,3,4,5,6,7,8,9];
// function lovestNum (x) {
//     let min = x[0];
//     for (const element of x) {
//         if (element < min)
//             min=element
//     }
//     console.log(min);
// }
// lovestNum(msv)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
//let num = [1,2,10];
//  function sumNum (x){
//     let sum = 0;
//      for (const xElement of x) {
//         sum = xElement + sum;
//      }
//      console.log(sum);
//  }
//  sumNum(num)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//let msv = [11,2,3,4,5,6,7,8,9];
//  function averOfNum (y) {
//      let avg = 0;
//      for (const yElement of y) {
//          avg = yElement+avg
//      }
//      avg=avg/y.length
//      console.log(avg)
//  }
//  averOfNum(msv)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// Не додумався як це вирішити
//function lrgLwt (j) {
//     for (let i = 0; i < j.length; i++) {
//         const jElement = j[i];
//     }
//
// }

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//function rndm (length) {
//     let ar = [];
//     for (let i = 0; i < length; i++) {
//         ar.push (Math.floor(Math.random()*100));
//         }
//     console.log(ar)
//     return ar;
//
// }
// rndm (5)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let msv = [11,2,3,4,5,6,7,8,9]
function rvrs (x) {
    let i = x.length-1;
    while (i>=0) {
    console.log(x[i]);
    i--
    }
}
rvrs (msv)
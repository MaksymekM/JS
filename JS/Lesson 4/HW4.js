//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//function calc1 (a,b) {
//     return a*b;
// }
// console.log (calc1 (2,20))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

//function calc2 (r) {
//    let P = 3.14;
//    return  Math.pow (r,2)*P;
//}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//function calc3 (r,h) {
//     let P = 3.14;
//     return (2*P*(r+h));
// }

// - створити функцію яка приймає масив та виводить кожен його елемент


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

//function paragraph (w) {
//     document.write (`<p>${w}</p>`);
// }
// paragraph('Some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//function listCreator3 (a) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write('</ul>');
// }
// listCreator3('the same');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//function listCreator4(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// listCreator4('some text', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//let ar = [1,true,'two',false,23];
// function arra(a) {
//     document.write(`<ul>`);
//     for (let i=0; i<a.length;  i++) {
//         document.write(`<li>${a[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arra(ar)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {id: 153, name: 'Vasia', age: 21},
    {id: 12, name: 'Kolia', age: 23},
    {id: 953, name: 'Misha', age: 20},
    {id: 13, name: 'Andriy', age: 21},
    ];
function arra2(x) {
for (let item of x) {
    document.write(`<div>${item.id}.${item.name} . ${item.age}</div>`);
}
}
arra2 (users)

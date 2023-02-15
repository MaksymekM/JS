//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    function ploshcha (a,b) {
     let s =a * b;
     return s;
    }
    let x = ploshcha(5,6);
    console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function pround (r) {
    let p = r*r*(3.14);
    return p;
}
let z = pround(5,);
console.log(z);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function clnd (h,r1) {
    let ressult = 2*3.14* h * r1;
    console.log(ressult);
}
clnd(5,5);

// - створити функцію яка приймає масив та виводить кожен його елемент
function arr (m) {
    for (const mElement of m) {
        console.log(mElement);
    }
};
let masv = ['t','e','s','t'];
arr(masv);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par (x) {
    document.write(`<p>${x}</p>`);
}
let text = par(`levangardius poataifd qwertios`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function uelki (y) {
    document.write(`<ul><li>${y}</li><li>${y}</li><li>${y}</li></ul>`);
}
let list = uelki('Any text, but same for all');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function uelki2 (y,l) {
    document.write(`<ul>`);
    for (let i = 0; i < l; i++) {
        const yElement = y[i];
        document.write(`<li>${y}</li>`);
    }
    document.write(`</ul>`)
}
uelki2('Any text, but same for all',2);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function flist (array){
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
};

let masyv = [1, true, 'three', false, 5];
flist(masyv);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let usersarr = [id = 45,name = 'Lolik', age = 23];
function divb (k) {
    for (let i = 0; i < k.length; i++) {
        let kElement = k[i];
        document.write(`<div>${kElement}</div>`);
    };
};
divb(usersarr);

// - створити функцію яка повертає найменьше число з масиву
let numbersarray = [1,2,3,4,5,6,7,-8,9,22,0];
let lowestnum = numbersarray[0];
function lowest (n) {
    for (let nElement of n) {
        if (lowestnum > nElement) {
             lowestnum=nElement;
        };
    };
    return lowestnum
};
console.log(lowest(numbersarray));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function summa (s) {
    let rslt = 0;
    for (const sElement of s) {
        rslt = rslt+sElement;
    }
    return rslt
    }
    document.write(summa(numbersarray))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let i1 = arr[index1];
    let i2 = arr[index2];
    arr[index1] =i2;
    arr[index2] =i1;
    return arr
}
console.log(swap([11,22,33,44],2,3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exch (sumUAH,currencyValues,exchangeCurrency) {
    if (exchangeCurrency ==='USD') {
       kupylybaksiv = sumUAH*currencyValues[0].value;
       console.log(kupylybaksiv);
        }
    }
exch(1000,[{currency:'USD',value:40},{currency: 'EUR',value: 42}],'USD');

//це я просто простішу зробив:
function exchange(currency, ammount) {
    if (currency === 'EUR') {
        let UAH = ammount*42;
        console.log(UAH)
    } else if (currency === 'USD'){
        let UAH =ammount*40
        console.log(UAH)
    } else {console.log('you can exchange only USD or EUR. Please enter correct curency and ammount')}
return UAH
}

console.log(exchange('EUR',100))


//Всі функції повинні бути описані стрілочним типом!!!!
let P = 3.14;
// - створити функцію яка обчислює та повертає площу прямокутника

let ploshcha = (a,b) => {
    return a*b
}
console.log(ploshcha(4,6))
// - створити функцію яка обчислює та повертає площу кола
let plschKola = (r) => {return P*(Math.pow(r, 2))}
console.log(plschKola(2))

// - створити функцію яка обчислює та повертає площу циліндру
let plschCyl = (radius) => {return P*(Math.pow(radius,2))}
console.log(plschCyl(5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let msv = [1,2,3,10,25,2];
let itr = (x)=> {
    for (let i = 0; i < x.length; i++) {
        const x1 = x[i];
        console.log(x[i])
    }
}
itr(msv);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let prgr = (pText) => {
    document.write(pText)
}
prgr('ipsum lorem or smth else')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulli = (liTxt) => {
    document.write(`<ul>`);
    document.write(`<li>${liTxt}</li>`);
    document.write(`<li>${liTxt}</li>`);
    document.write(`<li>${liTxt}</li>`);
    document.write(`</ul>`);
}
ulli ('Li with some text');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulli2 = (liTxt,z) => {
    document.write(`<ul>`);
    for (i=0; i<z+1; i++){
    document.write(`<li>${liTxt}</li>`);
    }
    document.write(`</ul>`);
}
ulli2 ('Li with other text',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let prmtv = (...masyv) => {
    document.write(`<ul>`);
    for (q=0; q<masyv.length; q++){
        document.write(`<li>${masyv[q]}</li>`);
    }
    document.write(`</ul>`);
}
prmtv(2,3,5,false,'tru')
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// тут робив спочатку таким чином, оскільки не виводило мені це в div, то зайшов в resolve...
// не переписув це з ресолву. Цікаво чи можна це вивести таким способом, як я побудував чи тільки таким,
// як в ресолві?
let prmtv2 = (...masyv2) => {
    for (w=0; w<masyv2.length; w++){
        document.write(`<div>${masyv2[w]}</div>`);
        console.log(masyv2[w])
    }
}
prmtv2 ({id: 23, name: 'Jonny', age: 12}, {id: 27, name: 'Jim', age: 4}, {id: 12, name: 'James', age: 18})


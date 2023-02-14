
//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let msv = ['one', true, 3, 'four', 'false', 6, 7, 'eight', 'nine', 10];

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let hp = {
    title: 'Harry Potter',
    pageCount: 234,
    genre: 'fantastic'
};
let sh = {
    title: 'Serlok Holmes',
    pageCount: 123,
    genre: 'detective'
}
let tp = {
    title: 'Toyota Philosophy',
    pageCount: 333,
    genre: 'biography'
}


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let hp1 = {
    title: 'Harry Potter',
    pageCount: 234,
    genre: 'fantastic',
    author: ['Joanne Roaling', 73]
};
let sh1 = {
    title: 'Serlok Holmes',
    pageCount: 123,
    genre: 'detective',
    author:['Artur Konan D', 81]
}
let tp1 = {
    title: 'Toyota Philosophy',
    pageCount: 333,
    genre: 'biography',
    author:['Hukama Toyota', 104]
}
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users =[
    {name: 'John',username: 'JD', password: 1234 },
    {name: 'Leo' , username:'LL' , password: 'qwerty' },
    {name: 'Sara', username:'Sara', password: 'Sara2002'},
    {name: 'Vasyl',username: 'Vasyl', password: 'Vasyl'},
    {name: 'Jereny',username: 'Clark', password: 'TopG123' },
    {name: 'Oleandr' , username:'Ooo' , password: 'Iknowmyname7' },
    {name: 'George', username:'Gorgy', password: 'cocacola'},
    {name: 'Violetta',username: 'Vasyl', password: 'Vasyl'},
    {name: 'Tommy',username: 'TH', password: 'H1lfiger' },
    {name: 'Ueake' , username:'Peter' , password: 'uuuoa' },
];

    let psws = [users[0].password, users[1].password, users[2].password, users[3].password, users[4].password,users[5].password,
        users[6].password, users[7].password, users[8].password, users[9].password];
    console.log(psws);

//
//Логічні розгалуження:
//    - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x===0) {
    document.write('false');
}else {
    document.write('true')
};


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time =555;

if (time >=0 && time <16) {
    console.log('1st quarter ')
} else if(time >=16 && time <31){
    console.log('2nd quarter')
} else if (time >=31 && time <46){
    console.log('3rd quarter')
} else if (time >=46 && time <=60){
    console.log('4th quarter')
} else { console.log('error!, hour has only 60 min!')}


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('enter day');

if (day >=1 && day <11) {
    console.log('1st part of month')
} else if(day >=11 && day <21){
    console.log('2nd part of month')
} else if (day >=21 && day <=31){
    console.log('3rd part of month')
} else { console.log('error!, there no such day in month!')};

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let daynum = prompt('enter number of the weekday');
switch (daynum){
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('please enter a valid day number (1-7)')
};

//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.
let number1 = 5;
let number2 = -6;

if (number1 === number2) {
    console.log('numbers are the same');
} else if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2)
} else {
    console.log('error, not a number');}


//
//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let y = NaN;
y = y || 'default';
console.log(y);
//
//    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Great');
} else if (coursesAndDurationArray[1].monthDuration){
    console.log('Great');
} else if (coursesAndDurationArray[2].monthDuration){
    console.log('Great');
} else if (coursesAndDurationArray[3].monthDuration){
    console.log('Great');
} else if (coursesAndDurationArray[4].monthDuration){
    console.log('Great');
} else if (coursesAndDurationArray[5].monthDuration){
    console.log('Great');
} else {
    console.log('too short');
}
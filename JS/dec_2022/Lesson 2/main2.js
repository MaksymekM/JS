
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
    let psws = users.password
//
//Логічні розгалуження:
//    - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.
//
//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
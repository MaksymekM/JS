//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
//let str1 = 'hello world';
//console.log(str1.length)
// let str2 = 'lorem ipsum';
//console.log(str2.length)
// let str3 = 'javascript is cool';
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
//let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase())
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase())
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//let str = ' dirty string   '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Каждый охотник желает знать';
// let msvCr = (x) => {
//     return x.split(' ');
// }
// console.log(msvCr(str))
// document.write(msvCr(str));



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із
// зазначеної кількості символів.
//let str = 'Каждый охотник желает знать';
// let delete_characters = (strx, length) => {
//      return  strx.substr(0, length);
//  }
//  document.write(delete_characters(str,7))

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//  При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//let str = 'Каждый охотник желает знать';
// let fnkt = (x) =>{
//     let i = x.replaceAll(' ','-');
//     i = i.toUpperCase()
//     return i
// }
// document.write(fnkt(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.
//let str = 'каждый охотник желает знать';
// let fun = (x) => {
//     let i = x.substr(0,1);
//     let b = x.substr(1, x.length);
//      i = i.toUpperCase()
//     return i + b
//  }
//  document.write(fun(str))


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//let str = 'каждый охотник желает знать';
//let capitalize = (x) => {
//    let z =  x.split(' ');
//    for (const z1 of z)
//    {
//        for (let i = 0; i < z1.length; i++) {
//            const z1 = z[i];
//            let a = z1.substr(0, 1);
//            let b = z1.substr(1, z1.length);
//            a = a.toUpperCase();
//            return a+b;
//        }
//    }
//}
//document.write(capitalize(str))
// не можу зрозуміти чому воно і++ не спрацьовує і виводить тільки перше слово...
// глянув розвязання з ресолву, суть того, що можна по черзі висавляти все зрозіміла,
//але про те що word буде сприйматися як літера не знав...  i про charAt чомусь в цій ситуації взагалі не дувма..
// Тепер знатиму

 let capitalize = (str) => {
     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
 };
 document.write(capitalize('okten hi you are welcome'));
 console.log(capitalize('okten hi you are welcome'));
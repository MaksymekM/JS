//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

//let frst = +prompt('Please input 1st number');
//let scnd = +prompt ('Please input 2nd nubmer')
//if (frst>scnd) {console.log('FIRST')}
//else if (frst<scnd) {console.log(('SECOND'))}
//else if (frst===scnd) {console.log('Numbers are the same')}
//else {console.log ('EROR')}

//let flat = +prompt('Пліз ентер номер квартири');
// if (flat >=1 && flat <21) {document.write('This flat is in the 1st підїзді')}
// else if (flat>=21 &&flat<49) {document.write('This flat is in the 2nd підїзді')}
// else if (flat>=49 && flat <91) {document.write('This flat is in the 3rd підїзді')}
// else {document.write('Васильок, або такої квартири немає в цьому будинку, або ти ввів якусь біліберду')}


//let number = +prompt('please enter 10');
// if (number === '10') {alert ('YES IT IS TEN')}
// else {alert('THIS IS NOT 10!!')}

//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

//let qstn = +prompt('Яка сьгодні температура?');
//if (qstn >=10 && qstn <=22) {document.write ('ми йдемо ВЧИТИСЯ')}
//else {document.write('сидимо вдома і вчимося ОНЛАЙН')}

let vctrn = prompt('Хто купив білетів пачку, той получить водокачку! Введіть номер вашого білету(від 1 до 5)');
switch (vctrn) {
    case '1' :
        alert('You won an iphone');
        break;
    case '2':
        alert('You won a sport bike');
    break;
    case '3':
        alert('You won a boat')
        break;
    case '4':
        alert('you won a Lada largus :(')
        break;
    case '5':
        alert('you won a house')
        break;
    default:
        alert('ЧИСЛО НЕ ВІРНО, ВИ ПРОГРАЛИ')
}

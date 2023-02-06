//let time = prompt('please enter the time');
//if (time <=15) {console.log (`First`);}
//else if (time >15 && time <=30) {console.log (`Second`)}
//else if (time >30 && time <=45) {console.log (`Third`)}
//else if (time >45 && time <=60) {console.log (`Fourth`)}
//else {console.log (`ERROR`);}



//let day = + prompt('please enter the day');
//if (day <=10) {console.log (`First`);}
//else if (day >10 && day <=20) {console.log (`Second`)}
//else if (day >20 && day <=31) {console.log (`Third`)}
//else {console.log (`ERROR`);}

//let test =prompt('true or false?')
//if (test === `true`) { console.log ('true')}
//else {console.log('false')}


//let test = confirm(`true or false?`,'') ? 'true' : 'false';
//console.log (test)

//let a = +prompt (`please input the number`);
//if (a === 0) {console.log(`correct`)}
//else {console.log (`incorrect`)}

let scq = +prompt('please enter week #');
document.write('<ul>')
switch (scq) {

   case '1':
            document.write   (
                '<li>9:00-10:00:Breakfas</li> ' + '<li>10-17:Visiting family</li>');
         break;
     case '2':
         document.write(
             '<li>8:00-8:30:Morning excercises</li> ' + '<li>9-17:Work</li>' + '<li>17:30: Shopping</li>');
         break;
    case '3':
        document.write(
            '<li>8:00-9:30:Denist</li> ' + '<li>9:30-17:30:Work</li>' + '<li>18:00: Dinner with mom</li>');
    case '4':
        document.write(
            '<li>8:00-8:45:Pool</li> ' + '<li>9:00-17:00:Work</li>' + '<li>17:30: Cooking classes</li>');
        break;
    case '5':
        document.write(
            '<li>8:00-8:30:Morning excercises</li> ' + '<li>9-17:Work</li>' + '<li>17:30: Shopping</li>');
        break;
    case '6':
        document.write(
            '<li>8:00-8:30:Morning excercises</li> ' + '<li>9-17:Work</li>' + '<li>17:30: Cooking classes</li>');
        break;
    case '7':
        document.write(
            '<li>8:00-9:00:Squash with Peter</li> ' + '<li>9:00-11:00:Breakfast with Lou</li>' + '<li>17:00 Cinema (and maybe afterparty)</li>');
        break;
     default:
         document.write('Please be adviced that week has only 7 days (1-Sun/7-Sat). Please refresh the page and enter day # from 1 to 7');
         }
document.write('</ul>')


/// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4. Як 366 ділиться на 4?


//let year = prompt (`введіть к-сть днів в році`);
//if ((year % 4 === 0)) {console.log(`Цей рік високосний`)}
//else {console.log (`Цей рік не високосний`)}

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

//let xxx = prompt('Яка «офіційна» назва JavaScript?');
//if (xxx === 'ECMAScript') alert('Правильно')
//else {alert('Не знаєте? ECMAScript!')}
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name, surname,email,phone ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}
let msv = [
new User(1,'Artur','Poroh','aporoh@gmail.com', 383502334455),
new User(2,'Orest','Zorest','o45@gmail.com', 380532324455),
new User(3,'Anna','Kuna','akuna@gmail.com', 380503332455),
new User(4,'Olga','Duh','ooood@gmail.com', 380502334245),
new User(5,'Viktor','Orkish','vorko@gmail.com', 330524334455),
new User(6,'James','Jameson','jj@gmail.com', 380532324435),
new User(7,'John','Do','dodododo@gmail.com', 380532324435),
new User(8,'Jonny','Walker','jw@gmail.com', 380503332455),
new User(9,'William','Lawsons','Wl@gmail.com', 383502434855),
new User(10,'Agata','Kri','anema@gmail.com', 380302244485),
]
console.log(msv)

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let parniF = msv.filter(value => {return value.id%2===0;});
console.log(parniF)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortuj = msv.sort(function (a,b) {
    return a.id-b.id
})
console.log(sortuj)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let msv2 = [
new Client(1,'Artur','Poroh','aporoh@gmail.com', 383502334455, ['kabaczok','ogirok']),
new Client(2,'Orest','Zorest','o45@gmail.com', 380532324455,['pomidor','kabaczok','ogirok']),
new Client(3,'Anna','Kuna','akuna@gmail.com', 380503332455, ['ketchup','shashlyk']),
new Client(4,'Olga','Duh','ooood@gmail.com', 380502334245,['kabaczok','cukinia']),
new Client(5,'Viktor','Orkish','vorko@gmail.com', 330524334455,['kabaczok','ogirok']),
new Client(6,'James','Jameson','jj@gmail.com', 380532324435,['pomidor','kabaczok','ogirok']),
new Client(7,'John','Do','dodododo@gmail.com', 380532324435, ['water']),
new Client(8,'Jonny','Walker','jw@gmail.com', 380503332455, ['Jim Bim', 'apple juice']),
new Client(9,'William','Lawsons','Wl@gmail.com', 383502434855,['Whiski','Coca-Cola','shashlyk','kabaczok','ogirok']),
new Client(10,'Agata','Kri','anema@gmail.com', 380302244485,['pomidor','ketchup','shashlyk','kabaczok','ogirok']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortByOrd = msv2.sort(function (a,b) {
    return a.order.length - b.order.length;
})
console.log(sortByOrd)
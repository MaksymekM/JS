//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};
let usersArr =[
    new User(1,'Kostiantyn','Korobko','fetch@gmail.com', 4569871213),
    new User(2,'Maksym','M','email@mail.com',555709555),
    new User(3,'Valentyn','Val','Petro123@gmail.com', 1569843513),
    new User(4,'Olga','Antoniuk','olgaa@gmail.com', 1423523522),
    new User(5,'Tetiana','Tetianiuk','teti123@gmail.com', 123888999),
    new User(6,'Grygorii','Skovoroda','patelnia@gmail.com', 321456987),
    new User(7,'John','Biden','usa1@gmail.com', 123000945),
    new User(10,'Vladyslav','Muliak','fetch@gmail.com', 4569871213),
    new User(9,'Volodymyr','Korobko','mech@gmail.com', 45644871213),
    new User(8,'Agata','Kristsa','Kristsa@gmail.com', 4569871213),
    new User(11,'Dorian','Dubets','dd213@gmail.com', 213111213),
];
console.log(usersArr);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let parni = usersArr.filter(parni=>parni.id %2===0);
console.log(parni);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(parni.sort(function (a,b){return a.id-b.id}));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client(id, name, surname , email, phone, order){
    User.call(this, id, name, surname, email,phone, order)
    this.order = order
};
let clientArr =[
    new Client(1,'Kostiantyn','Korobko','fetch@gmail.com', 4569871213, ['Iphone', 'Ipad']),
    new Client(2,'Maksym','M','email@mail.com',555709555, ['Iphone', 'MacBook','Airpods']),
    new Client(3,'Valentyn','Val','Petro123@gmail.com', 1569843513,['Jameson','Dewars','Black Velvet']),
    new Client(4,'Olga','Antoniuk','olgaa@gmail.com', 1423523522, ['Hortycia','Nemiroff']),
    new Client(5,'Tetiana','Tetianiuk','teti123@gmail.com', 123888999, ['Iphone','Jameson','Apple juice']),
    new Client(6,'Grygorii','Skovoroda','patelnia@gmail.com', 321456987,['item125','item445','MacBook']),
    new Client(7,'John','Biden','usa1@gmail.com', 123000945,['Dewars', 'Jameson','JW']),
    new Client(10,'Vladyslav','Muliak','fetch@gmail.com', 4569871213, ['item125','Orange juise','oranges']),
    new Client(9,'Volodymyr','Korobko','mech@gmail.com', 45644871213,['Iphone','Donuts']),
    new Client(8,'Agata','Kristsa','Kristsa@gmail.com', 4569871213,['chebureki','hinkali','hachapuri','saperavi']),
    new Client(11,'Dorian','Dubets','dd213@gmail.com', 213111213,['hinkali','jameson']),
];
console.log(clientArr);
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorted = [];
console.log(clientArr.sort(function (a,b){
     return a.order.length - b.order.length
 }));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    function Carr(model, manufacturer, year, maxSpeed,engine){
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engine=engine;
    }
    console.log(new Carr('XC90','Volvo',2022,230,3.0));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, year, maxSpeed,engine){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engine=engine;
    }
    drive(){
        return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info(){
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }
    increaseMaxSpeed(newSpeed){
        return this.maxSpeed = newSpeed
    }
    changeYear(newValue){
        this.year = newValue
    }

}
let car1 =new Car('Golf GTI', 'VW', 2011, 330,3.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(350);
console.log(car1);
car1.changeYear(2015);
console.log(car1);


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name,age,shoeSize) {
        this.name=name;
        this.age=age;
        this.shoeSize=shoeSize;
    }


}
let cinderellaArr = [
    new Cinderella('Anna',21,35),
    new Cinderella('Bella',23,37),
    new Cinderella('Julia',24,36),
    new Cinderella('Ola',27,38),
    new Cinderella('Natalia',22,39),
    new Cinderella('Georgiana',28,34),
    new Cinderella('Holly',29,40),
    new Cinderella('Elen',30,41),
];
console.log(cinderellaArr );

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, shoeSizeFound) {
        this.name=name;
        this.shoeSizeFound=shoeSizeFound;
    }
    tinder(list){
        for (const cind of list) {
            if (cind.shoeSize === this.shoeSizeFound){
                return cind
            }
        }
    }
    tinder2(list){
        return list.find((cind)=>cind.shoeSize===this.shoeSizeFound);
    }

}
let prince1 = new Prince('John',36);
let prince2 = new Prince('Paul',40);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(prince1.tinder(cinderellaArr));
console.log(prince2.tinder2(cinderellaArr));

//function Tinder(cind,prin){
//    for (const cindElement of cind) {
//        for (const prinElement of prin) {
//            let pairs= {};
//            if (cindElement.shoeSize===prinElement.shoeSizeFound){
//                //pairs.push(`${cindElement.name}${prinElement.name}`);
//                pairs.push(cindElement.name)
//               // pairs.push('+')
//               // pairs.push(prinElement.name)
//                all.push(pairs)
//        }
//
//    }
//
//    }
//};
//Tinder(cinderellaArr ,PrinceArr);
//console.log(all);
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//function Car(model, manufacturer, year, maxSpeed, capacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`model: ${this.model}; manufacturer: ${this.manufacturer}; year: ${this.year};max speed: ${this.maxSpeed};
//          capacity: ${this.capacity}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(`New max speed will be:${this.increaseMaxSpeed = this.maxSpeed + newSpeed}`)
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.addDriver = driver;
//     };
// }
//
// let firstCar = new Car('Passat', 'VW', 2010, 230, 2000);
// console.log(firstCar);
// firstCar.drive();
// firstCar.info();
// firstCar.increaseMaxSpeed(50);
// firstCar.changeYear(2020)
// console.log(firstCar)
// firstCar.addDriver(`Stig`)
// console.log(firstCar)

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//class Cars {
//     constructor(model, manufacturer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//         this.info = function () {
//             console.log(`model: ${this.model}; manufacturer: ${this.manufacturer}; year: ${this.year};max speed: ${this.maxSpeed};
//           capacity: ${this.capacity}`)
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(`New max speed will be:${this.increaseMaxSpeed = this.maxSpeed + newSpeed}`)
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function (driver) {
//             this.addDriver = driver;
//         }
//
//     };
// }
// let secondCar = new Cars ('350Z','Nissan', 2012, 333, 3300)
//     console.log(secondCar);
// secondCar.drive();
// secondCar.info();
// secondCar.increaseMaxSpeed(50);
// secondCar.changeYear(2020)
// console.log(secondCar)
// secondCar.addDriver(`Stig`)
// console.log(secondCar)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popeliushka {
    constructor(name, age, sizeOfShoe) {
        this.name = name;
        this.age = age;
        this.sizeOfShoe = sizeOfShoe;
    }
}
let popeliushkas = [
    new Popeliushka('Jacquiline', 19, 35),
    new Popeliushka('Vanessa', 22, 39),
    new Popeliushka('Kate', 29,42),
    new Popeliushka('Britney',49,40),
    new Popeliushka('Jenifer', 20,36),
    new Popeliushka('Anemari',21,37),
    new Popeliushka('Jessica', 23,38),
    new Popeliushka('Angelina',24,36.5),
    new Popeliushka('Sara',23,37.5),
    new Popeliushka('Shrrlott', 24, 41),
]
console.log(popeliushkas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, sizeOfShoe) {
        this.name = name;
        this.age = age;
        this.sizeOfShoe = sizeOfShoe;

    }
}
let prince = new Prince('John', 19, 35);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let = newMatch = (popeliushkas, prince) => {
    for (const popeliushka of popeliushkas) {
        if (popeliushka.sizeOfShoe = prince.sizeOfShoe) {
            return `Hey ${prince.name}, your popeliushka is ${popeliushka.name}`
        }
    }
}
console.log (newMatch(popeliushkas,prince))

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let matchNew = popeliushkas.find(element => (element.sizeOfShoe===prince.sizeOfShoe));
console.log(matchNew)
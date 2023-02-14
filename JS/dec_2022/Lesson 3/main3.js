//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let arr = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//for (let i=0; i< arr.length; i++) {
//    let name= arr[i].name;
//    document.write(`<div>${name}</div>`)
//}
//
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let a=0; a<11;a++) {
    document.write(`<div>number: ${a} </div>`)
};

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let w = 0;
while (w<11) {
    document.write(`<h1>any text</h1>`);
    w++;
};

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let q = 0;
while (q<11) {
    document.write(`<h1>smth ${q}</h1>`);
    q++;
};
//
//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:
//
   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//ШАБЛОН:
//    <ul>
//        <li>ITEM OF ARRAY</li>
//        <!--
//            і тд інші об'єкти масиву
//             ...
//             ...
//             ...
//        -->
//    </ul>
//
//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з
// масиву
//
document.write(`<ul>`);
for (let e = 0; e < listOfItems.length; e++) {
    const listOfItem = listOfItems[e];
    document.write(`<li>${listOfItem}</li>`);
}
document.write (`</ul>`)
//
//    Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

//ШАБЛОН
//<div class="product-card">
//    <h3 class="product-title">TITLE. Price - PRICE</h3>
//<img src="IMAGE" alt="" class="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write(`<div class="product-card">`);
for (let d = 0; d < products.length; d++) {
    let product = products[d];
    document.write(`<h3 class="product-title">${product.title} ${product.price} <img src="${product.image}" alt=""/></h3>`);
};


//--------------------
//    є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//за допомоги циклу вивести:
//    - користувачів зі статусом true
for (let tt = 0; tt < users.length; tt++) {
    const user = users[tt];
    if (user.status === true){
        document.write(`<h3>${user.name}</h3>`)
    };
};
//- користувачів зі статусом false
for (let ff = 0; ff < users.length; ff++) {
    const userr = users[ff];
    if (userr.status === false){
        document.write(`<h2>${userr.name}</h2>`)
    };
};
//- користувачів які старші за 30 років

for (let aa = 0; aa < users.length; aa++) {
    const userrr = users[aa];
    if (userrr.age > 30){
        document.write(`<h4>${userrr.name}</h4>`)
    };
};


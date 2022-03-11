//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

let click = document.getElementById('text')
let button = document.getElementById('button')
button.onclick = function () {
    click.style.display = 'none';
}

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button2 = document.getElementById('button2');
button2.onclick = function () {
    button2.style.display = 'none'
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let age = document.getElementById('inputN').value;
let submt = document.getElementById('button3');
submt.onclick = function () {
    if (+age<18) {
        alert('you are too young');
    } else {
        alert('you are good to go');
    }
} // чомусь функція спрацьовує раз через раз не розумію чому...

// - Создайте меню, которое раскрывается/сворачивается при клике
 let menuElement = document.querySelector(`.menu`);
 let titleElement = menuElement.querySelector(`.title`);
 titleElement.onclick = function () {
     menuElement.classList.toggle('hidden');
 };

 // тут не розумію як зробити щоб воно ховалося, resolve подивився, спробував,
// але не виходить...

//
// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
//
let f1 = document.forms.f1
f1.onsubmit = function (e) {
    e.preventDefault();
    let nameInput = e.target.username.value;
    let ageInput = e.target.age.value;
    let user = {nameInput, ageInput};
    localStorage.setItem(nameInput, JSON.stringify(user));
}
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carsArray = JSON.parse(localStorage.getItem('cars')) || [];
document.forms.carForm.onsubmit = function (f) {
    f.preventDefault();
    let modelInput = f.target.model.value;
    let typeInput = f.target.type.value;
    let numberInput = f.target.volume.value;
    let car = {modelInput, typeInput, numberInput}
    carsArray.push (car);
    localStorage.setItem('cars', JSON.stringify((carsArray)))
}

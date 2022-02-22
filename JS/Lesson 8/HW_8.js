// - Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content'));
//     -- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules'))
//     -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerHTML = 'any other text';
//     -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerHTML = 'another any other text'
//     -- змініть кожному елементу колір фону на червоний
let chld = document.body.children;
for (const chldElement of chld) {
    chldElement.style.backgroundColor = `red`;
}
//     -- змініть кожному елементу колір тексту на синій
let chldd = document.body.children
for (const chldEl of chldd) {
    chldEl.style.color= 'blue'
}
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rls = document.getElementById('rules');
console.log(rls.classList)
//     -- поміняти колір тексту у всіх елементів fc_rules на червони
let fcRls = document.getElementsByClassName('fc_rules');
for (const fcRl of fcRls) {
    fcRl.style.color = 'green' //тут дав зелений бо червоний зливався з фоном
}
// 1) Напишіть код, який :
//     a) додає клас з назвою групи, елементу з ід main_header
let a = document.getElementById('main_header');
a.classList.add('group_name')
//     b) робить шириниу елементу ul 400px
let b = document.body.getElementsByTagName(`ul`)
b[0].style.width = '400px'
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
let c = document.body.getElementsByClassName('linkList');
for (let i = 0; i < c.length; i++) {
    const cElement = c[i];
    c[i].style.width = '50%'
}
//     d) отримує текст який зберігається в елементі з класом listElement2
let d = document.body.getElementsByClassName('listElement2');

let addd =(txt) => {
    for (let i = 0; i < d.length; i++) {
        const dElement = d[i];
        d[i].innerHTML = `${txt}`
    }
    return
}
addd('new text')
//     e) отримує всі елементи li та змінює ім колір фону на сірий
let e = document.body.getElementsByTagName('li');
for (let i = 0; i < e.length; i++) {
    const eElement = e[i];
    e[i].style.backgroundColor ='grey'
}
//     f) отримує всі елементи 'a' та додає їм клас anchor
let f = document.getElementsByTagName('a')
for (let i = 0; i < f.length; i++) {
    const fElement = f[i];
    f[i].classList.add('anchor')
}
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//     змінює йому розмір тексту на 40 пікселів
let g = document.getElementsByTagName('a')
for (let i = 0; i < g.length; i++) {
    const gElement = g[i];
    if (g[i].innerText === 'link3') {
        g[i].style.fontSize = '40px'
    }

}
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let h = document.getElementsByTagName('a')
for (let i = 0; i < h.length; i++) {
    const hElement = h[i];
    h[i].classList.add(`element_${h[i].innerText}`)
}
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//let ii = document.body.getElementsByClassName('sub-header');
//for (const iiElement of ii) {
//    iiElement.style.backgroundColor = prompt('please enter color for the headers')
//}
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо
//     текст елемнту = content 2 segment . Колір отримати з prompt()
let j = document.body.getElementsByClassName('sub-header');
for (const jElement of j) {
    if (jElement.innerText === 'content 2 segment' )  {
        jElement.style.color = prompt('enter text color')
    }
}
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
//     Текст отримати з prompt()
let k = document.body.getElementsByClassName('content_1');
for (const kElement of k) {
    kElement.innerHTML = prompt('enter text that need to be added instead of content')
}
//     l) отримати елементи p та змінити їм padding на 20px
let l = document.body.getElementsByTagName('p');
for (const lElement of l) {
    lElement.style.padding = '20px'
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи 
//     (mon-year. Пример sep-2021)
let m = document.body.getElementsByClassName('text2')
for (const mElement of m) {
    mElement.innerHTML = 'dec-2021'
}
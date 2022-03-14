//1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться
// в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let container = document.createElement('div');
        container.classList.add('container');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('divCard');
            divCard.innerHTML = `
            <h3>${comment.id}</h3>
            <h4>${comment.name}</h4>
            <p>${comment.email}</p>
            <p>${comment.body}</p>
            `;
            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText='click for details';
            btn.onclick = (id) => {

            }

        }

});
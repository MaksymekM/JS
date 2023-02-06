//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
//fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(value => value.json())
//    .then(posts => {
//    let wrapper = document.createElement('div');
//    wrapper.classList.add('wrapper');
//        for (const post of posts) {
//            let divCard = document.createElement('div');
//            divCard.classList.add('divCard');
//            divCard.innerHTML = `
//                <h3>${post.id}</h3>
//                <h4>${post.title}</h4>
//                <p>${post.body}</p>
//            `
//            wrapper.appendChild(divCard);
//            document.body.appendChild(wrapper)
//  }
//});

// 2.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
    let wrapper2 = document.createElement('div');
    wrapper2.classList.add('wrapper');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');
            divCard.innerHTML = `
            <h3>${comment.id}</h3>;
            <p>${comment.name}</p>;
            <p>${comment.email}</p>
            <p>${comment.body}</p>
            `
        wrapper2.appendChild(divCard);
            document.body.appendChild(wrapper2)
        }
});
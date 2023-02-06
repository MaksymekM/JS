let usersContainer = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const userItem of value) {
            let userContainer = document.createElement('div');
            userContainer.classList.add('user');
            let content = document.createElement('a')
            content.innerHTML = `${userItem.id} - ${userItem.name}`;
            content.href = `./user-details.html?data=${JSON.stringify(userItem)}`;
            userContainer.appendChild(content);
            usersContainer.appendChild(userContainer)
        }

    });

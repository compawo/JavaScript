//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається
// перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

const showUsersBtn = `Click me`;

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const div = document.createElement('div');
            div.innerText = `${user.id}. ${user.name}`;

            container.append(div);
            div.classList.add('block_div');

            const a = document.createElement('a');
            a.innerText = showUsersBtn;
            div.append(a);
            a.classList.add('a_click');
            a.href = `user-details.html?data=${user.id}`;
        }
    });

//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const user in value) {

            const div = document.createElement('div');
            if (typeof value[user] !== 'object') {

                div.innerHTML = `<b>${user}</b> - ${value[user]}`;
            } else {
                div.innerHTML = `<b>${user}:</b>`

                for (const key in value[user]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[user][key] !== 'object') {
                        userInnerDiv.innerHTML = `${key} - ${value[user][key]}`;

                    } else {
                        userInnerDiv.innerHTML = `<b>${key}:</b>`;

                        for (const element in value[user][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[user][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} - ${value[user][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    div.append(userInnerDiv);
                }
            }
            document.body.append(div);
        }
    });

let button = document.createElement('button');
button.innerText = 'post of current user';
document.body.append(button)

button.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {

            console.log(posts);

            for (const post of posts) {
                const div = document.createElement('div');
                div.classList.add('divPost');
                div.innerText = `${post.title}`;
                document.body.append(div);

                let a = document.createElement('a');
                a.innerText = ` Post information`;
                div.append(a);
                a.href = `post-details.html?post=${post.id}`;
            }
        });


}

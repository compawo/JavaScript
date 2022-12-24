//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const postId = url.searchParams.get('post');
let container = document.createElement('div');
document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(posts => {

        for (const post in posts) {

            const div = document.createElement('div');
            div.innerHTML = `<b>${post}:</b> ${posts[post]}`;
            div.style.border = '2px solid black';
            div.style.margin = '5px';
            container.append(div);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const div = document.createElement('div');
            container.append(div);
            div.innerHTML =`<b>Comment:</b> ${comment.body}`;
            div.style.border = '2px solid black';
            div.style.margin = '5px';
        }
    });
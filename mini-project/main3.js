//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const postId = url.searchParams.get('post');
let container = document.createElement('div')
document.body.append(container)

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(posts => {

        for (const post in posts) {

            const div = document.createElement('div');
            div.innerText = `${post}: ${posts[post]}`;
            container.append(div);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
    .then(value => value.json())
    .then(comments => {

        const container2 = document.createElement('div')
        container.append(container2)

        for (const comment in comments) {
            const div = document.createElement('div')
            container2.append(div)
            div.innerText =`${comment}: ${comments[comment]}`
            
        }
    });
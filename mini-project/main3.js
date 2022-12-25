//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const postId = url.searchParams.get('post');
let container = document.createElement('div');
container.classList.add('container')
document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(posts => {

        for (const post in posts) {

            const postDiv = document.createElement('div');
            postDiv.innerHTML = `<b>${post}:</b> ${posts[post]}`;
            postDiv.classList.add('post_div')
            container.append(postDiv);
        }
    });

const container_2 = document.createElement('div')
container_2.classList.add('container_2')
container.append(container_2);

fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const commentsDiv = document.createElement('div');
            container_2.append(commentsDiv);
            commentsDiv.innerHTML =`<b>Comment:</b> ${comment.body}`;
            commentsDiv.classList.add('comments_div')

        }
    });
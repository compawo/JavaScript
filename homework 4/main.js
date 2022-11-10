//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let form = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
];

for (let us of form) {
    document.write(
        ` 
    <div>OBJECT</div>
        `
    )
}


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let text = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false}
]

for (let i = 0; i < text.length; i++) {

    document.write(
        ` 
  <div>Object ${i + 1}</div>
 
        `
    )
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let files = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
]
let i = 0;
while (i < files.length) {
    let user = files[i]
    if (user.status) {
        document.write(
        `
        <div>
        <h1>Text</h1>
        </div>
        `
        )
    }
    i++
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let file = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
]
let ind = 0;
while (ind < file.length) {
    let user = file[ind]
    if (user.status) {
        document.write(
            `
        <div>
        <h1>Text</h1>
        </div>
        `
        )
    }
    i++
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону Масив

//за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let inf of users) {
    if (inf.status) {
        document.write(
            `
            <div>
            <p>${inf.name} ${inf.status} </p>
            </div> 
            `
        )
    }

}
for (let inf of users) {
    if (!inf.status) {
        document.write(
            `
            <div>
            <p>${inf.name} ${inf.status} </p>
            </div> 
            `
        )
    }
}

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age >= 30) {
        document.write(
            `
            <div>
            <h1>${user.name}</h1>
            <p>${user.age}</p>
            </div> 
            `
        )
    }

}
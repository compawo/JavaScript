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

let tex = [
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

for (let i=0; i < tex.length; i++) {
    document.write(
        ` 
  <div>Object ${tex[i]}</div>
 
        `
    )
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

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

for( let inf of users) {
    if (inf.status){
        document.write(
            `
            <div>
            <p>${inf.name} ${inf.status} </p>
            </div> 
            `
        )
    }

}
for( let inf of users) {
    if (!inf.status){
        document.write(
            `
            <div>
            <p>${inf.name} ${inf.status} </p>
            </div> 
            `
        )
    }
}

for( let inf of users) {
    if (inf.age){
        document.write(
            `
            <div>
            <h1>${inf.name}</h1>
            <p>${inf.age>30}</p>
            </div> 
            `
        )
    }
}
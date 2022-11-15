//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s(a, b, action) {
    let result = NaN;
    if (action === '*') {
        result = a * b
    }
    return result;
}

let fun = s(5, 10, '*');
console.log(fun)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function rad(r, action) {
    let result = NaN;
    if (action === '*') {
        result = Math.PI * r ** 2
    }
    return result;
}

let data = rad(10, '*');
console.log(data)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function radius(r, h, action) {
    let result = NaN;
    if (action === '*') {
        result = 2 * Math.PI * r * (r + h);
    }
    return result;
}

let calc = radius(10, 5, '*');
console.log(calc)

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayPrinter(arr) {
    for (const item of arr) {
        console.log(item)
    }

}

arrayPrinter([200, 20, 11])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par(tag, parag) {
    document.write(`<p><${tag}>${parag}</${tag}></p>`)
}

par('h1', 'Hello, Jon!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write(`<ul>`);

function list(tag, text) {
    document.write(`<li><${tag}>${text}</${tag}></li>`);
}

list('h3', 'hello');
list('h3', 'hello');
list('h3', 'hello');
document.write(`</ul>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<ul>`)

function list2(tag, text,) {
    for (i = 0; i < 3; i++) {
        document.write(`<li><${tag}>${text}</${tag}></li>`)
    }
}

list2('h3', 'Bye');
document.write(`</ul>`)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(`<ul>`)

function arr(elements) {
    for (const arrElement of elements) {
        document.write(`<li>${arrElement}</li>`)
    }
    return arr;
}

let object = arr([1, 'Lorem ipsum', 12]);
console.log(object)
document.write(`</ul>`)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let user = [
    {id: 12345, name: 'petya', age: 30},
    {id: 12345, name: 'kolya', age: 29},
    {id: 12345, name: 'olya', age: 28},
    {id: 12345, name: 'max', age: 30},
    {id: 12345, name: 'anya', age: 31},
]

function userLog(custum) {
    for (const custumElement of custum) {
        document.write(`<div>${custumElement.id} ${custumElement.name} ${custumElement.age}</div>`)
    }
}

userLog(user);

// - створити функцію яка повертає найменьше число з масиву
function numbers(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else if (num3 < num1 && num3 < num2) {
        return num3;
    }
}

find = numbers(23, 10, 7)
console.log(find)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let calculate = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i;
};


let fin = calculate([12, 21, 32, 4])
console.log(fin)
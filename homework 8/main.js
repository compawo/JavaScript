//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(123, 'Tolik', 'Tkach', 'peijweij@t.a', '+380295852847')
// let user2 = new User(255, 'Borya', 'sany', 'htccefij@t.a', '+380297877647')
// let user3 = new User(388, 'Kolya', 'tonr', 'peijwfhcfeij@t.a', '+38025252847')
// let user4 = new User(21, 'Anna', 'Tsdfghjk', 'xtheij@t.a', '+3802925847')
// let user5 = new User(567, 'Nina', 'Tsgrsghjk', 'xsgreij@t.a', '+3802925847')
// let user6 = new User(56, 'Toma', 'Tykfh', 'peijweij@t.a', '+380297392847')
// let user7 = new User(17, 'Luka', 'tufnftc', 'peijweij@t.a', '+3805692847')
// let user8 = new User(844, 'Alex', 'tfuc', 'pskbhhbj@t.a', '+38068692847')
// let user9 = new User(129, 'Iryna', 'erty', 'fngeij@t.a', '+38023522847')
// let user10 = new User(103, 'Bodya', 'mnb', 'peifgeij@t.a', '+3802987852847')
//
// let arr = [];
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = arr.filter((value => value.id % 2 === 0))
// console.log(filter)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = arr.sort(( a, b )=> {
// //     return a.id - b.id;
// // });
// // console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let client1 = new Client(230, 'tony', 'kony', 'pokjhgvc@gmail.com', +3803274047274, ['TV', 'tablet'])
// let client2 = new Client(12330, 'tony', 'kony', '52325jhgvc@gmail.com', +3803456771274, ['iPad', 'mouse', 'bag', 'decorations'])
// let client3 = new Client(7230, 'tony', 'kony', 'pjfrjf6dc@gmail.com', +3803765427274, ['Xbox', 'phone', 'list'])
// let client4 = new Client(30, 'tony', 'kony', 'pcnncgvc@gmail.com', +3803243634274, ['book', 'pen'])
// let client5 = new Client(110, 'tony', 'kony', 'sssjhgvc@gmail.com', +3803098704274, ['clock', 'cloth'])
// let client6 = new Client(2140, 'tony', 'kony', 'dfghgfd765hgvc@gmail.com', +3802345997273, ['ball', 'tablet'])
// let client7 = new Client(21410, 'tony', 'kony', 'pokjh345@gmail.com', +3803242244274, ['album', 'CD'])
// let client8 = new Client(234560, 'tony', 'kony', '23456sdgvc@gmail.com', +3803274363674, ['airpods'])
// let client9 = new Client(270, 'tony', 'kony', 'df7654hgvc@gmail.com', +3803255247274, ['tea', 'cafe'])
// let client10 = new Client(98730, 'tony', 'kony', 'dhfhrde46e4@gmail.com', +3803278557274, ['cookies', 'tablet', 'item'])
//
// let custumer = [];
// custumer.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
// console.log(custumer);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = custumer.sort(( a, b )=> {
//     return a.order.length - b.order.length;
// });
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Item(model, producer, year, maxspeed, vEngine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.vEngine = vEngine;

    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function') {
                console.log(`${carKey} -- ${this[carKey]}`)
            }

        }
    };

}

let car = new Item('Hyundai Genesis G70', 'Hyundai', 2017, 200, '2.2 CRDi');
console.log(car);

car.info()
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// Item.prototype.drive = function () {
//     return `їдемо зі швидкістю ${this.maxspeed} на годину`;
// };
// console.log(car.drive());

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`





//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// Item.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxspeed = this.maxspeed + newSpeed;
// };
// car.increaseMaxSpeed(50)
// console.log(car);

//     -- changeYear (newValue) - змінює рік випуску на значення newValue

// Item.prototype.changeYear = function (newValue) {
//     this.year = newValue;
// };
// car.changeYear(2015)
// console.log(car);

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// Item.prototype.addDriver = function (driver) {
//     this.driver = driver;
// };
// car.addDriver({name:'hobi', age: 27})
// console.log(car);

// - (Те саме, тільки через клас)

// class Item {
//
//     constructor(model, producer, year, maxspeed, vEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.vEngine = vEngine;
//
//     }
// }
// let car = new Item('Hyundai Genesis G70', 'Hyundai', 2017, 200, '2.2 CRDi');
// console.log(car);

//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// Item.prototype.drive = function () {
//     return `їдемо зі швидкістю ${this.maxspeed} на годину`;
// };
// console.log(car.drive());

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// Item.prototype.info = function () {
//     return `model - ${this.model} producer - ${this.producer} year - ${this.year} maxspeed - ${this.maxspeed} vEngine - ${this.vEngine}`;
// };
// console.log(car.info());


//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// Item.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxspeed = this.maxspeed + newSpeed;
// };
// car.increaseMaxSpeed(50)
// console.log(car);

//     -- changeYear (newValue) - змінює рік випуску на значення newValue

// Item.prototype.changeYear = function (newValue) {
//     this.year = newValue;
// };
// car.changeYear(2015)
// console.log(car);

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// Item.prototype.addDriver = function (driver) {
//     this.driver = driver;
// };
// car.addDriver({name:'hobi', age: 27})
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cindrella {

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let cindrella1 = new Cindrella('lisa', 23, 37)
let cindrella2 = new Cindrella('Nika', 30, 34)
let cindrella3= new Cindrella('mika', 31, 73)
let cindrella4 = new Cindrella('tina', 18, 33)
let cindrella5 = new Cindrella('nina', 22, 38)
let cindrella6 = new Cindrella('polina', 25, 39)
let cindrella7 = new Cindrella('mila', 23, 40)
let cindrella8 = new Cindrella('dina', 21, 36)
let cindrella9 = new Cindrella('tonya', 44, 39)
let cindrella10 = new Cindrella('lilya', 32, 33)

let cindrellas = [];
cindrellas.push(cindrella1, cindrella2, cindrella3, cindrella4, cindrella5, cindrella6, cindrella7, cindrella8, cindrella9, cindrella10)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
console.log(cindrellas);

class Prince {

    constructor(name, age, findSize) {
        this.name = name;
        this.age = age;
        this.findSize = findSize;
    }
}

let prince = new Prince('luka', 24, 36)
console.log(prince);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const findSize = (arr, marriage) => {
for (const first of arr) {
    if (first.size === marriage.findSize) {
        console.log(`I will marry on ${first.name}`);

    }

}
}
findSize(cindrellas, prince)


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let find = cindrellas.find(value => value.size === prince.findSize)
console.log(find);
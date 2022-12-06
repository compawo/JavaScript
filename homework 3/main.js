//Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let y = +prompt(`Введіть число`)
// if (y !== 0) {
//     document.write(`<h1>Невірно</h1>`)
// } else if (y) {
//     document.write(`<h1>Вірно</h1>`)
// } else

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

// let time = +prompt(`whats time?`);
// if (time >= 0 && time <= 15) {
//     console.log(`firstHalf`)
// } else if (time >= 15 && time <= 30) {
//     console.log(`secondHalf`)
// } else if (time >= 30 && time <= 45) {
//     console.log(`thirdHalf`)
// } else if (time >= 45 && time <= 59) {
//     console.log(`fourthHalf`)
// }

//У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt(`whats day?`)
// if (day > 0) {
//     console.log(`first`)
// } else if (day >= 10) {
//     console.log(`second`)
// } else if (day >= 20) {
//     console.log(`third`)
// } else if (day <= 31) {
//     console.log(`third`)
// }

//Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let Weak = prompt('enter day of weak')

switch (Weak) {
    case `1`:
        console.log(`Monday`);
        break;
    case `2`:
        console.log(`Tuesday`);
        break;
    case `3`:
        console.log(`Wednesday`);
        break;
    case `4`:
        console.log(`Thursday`);
        break;
    case `5`:
        console.log(`Friday`);
        break;
    case `6`:
        console.log(`Saturday`);
        break;
    case `7`:
        console.log(`Sunday`);
        break;
    default:
        console.log(`??`)

}

//Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.

let a = +prompt(`num1`)
let b = +prompt(`num2`)
if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
} else if (a === b) {
    console.log(a)
}

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)

let x = prompt() || `default`;
if (x === `falsy`) {
    console.log(`default`)
} else if (x === null) {
    console.log(prompt())
} else if (x === undefined) {
    console.log(prompt())
}
console.log(x);
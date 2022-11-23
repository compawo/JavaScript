//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

//let str = 'hello world'
//console.log(str.length)
//let str2 = 'lorem ipsum'
//console.log(str2.length)
//let str3 = 'javascript is cool'
//console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// console.log(str.toUpperCase())
// let str2 = 'lorem ipsum'
// console.log(str2.toUpperCase())
// let str3 = 'javascript is cool'
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD'
// console.log(str.toLowerCase())
// let str2 = 'LOREM IPSUM'
// console.log(str2.toLowerCase())
// let str3 = 'JAVASCRIPT IS COOL'
// console.log(str3.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.length)
// let s = str.trim();
// console.log(s);
// console.log(s.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// function stringToarray(str) {
//     return str.trim().split(' ');
// }
// let arr = stringToarray(str);
// console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let str = nums.map (x => x+'');
// console.log(str)

//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
//  const sortNums = (direction, arr) => {
//     if (direction === 'ascending') {
//         arr.sort ((a, b) => a - b);
//     } else if (direction === 'descending') {
//         arr.sort ( (a, b) => b - a);
//     }
//     return arr;
// };
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort( (a, b) =>
//     b.monthDuration - a.monthDuration) );

// let filter = coursesAndDurationArray.filter((index) => index.monthDuration > 5);
// console.log(filter);

//  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let deck = [
//     {cardSuit: 'Spade', value: 6, color: 'Black'},
//     {cardSuit: 'Clubs', value: 6, color: 'Black'},
//     {cardSuit: 'Hearts', value: 6, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 6, color: 'Red'},
//     {cardSuit: 'Spade', value: 7, color: 'Black'},
//     {cardSuit: 'Clubs', value: 7, color: 'Black'},
//     {cardSuit: 'Hearts', value: 7, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 7, color: 'Red'},
//     {cardSuit: 'Spade', value: 8, color: 'Black'},
//     {cardSuit: 'Clubs', value: 8, color: 'Black'},
//     {cardSuit: 'Hearts', value: 8, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 8, color: 'Red'},
//     {cardSuit: 'Spade', value: 9, color: 'Black'},
//     {cardSuit: 'Clubs', value: 9, color: 'Black'},
//     {cardSuit: 'Hearts', value: 9, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 9, color: 'Red'},
//     {cardSuit: 'Spade', value: 10, color: 'Black'},
//     {cardSuit: 'Clubs', value: 10, color: 'Black'},
//     {cardSuit: 'Hearts', value: 10, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 10, color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'},
//     {value: 'Joker', color: 'Red'},
//     {value: 'Joker', color: 'Black'}
// ];
// let filter = deck.find((value) => value.cardSuit === 'Spade' && value.value === 'Ace')
// console.log(filter)
// let filter2 = deck.filter((index) => index.value === 6)
// console.log(filter2)
// let filter3 = deck.filter((card) => card.color === 'Red')
// console.log(filter3)
// let filter4 = deck.filter((suit) => suit.cardSuit === 'Diamonds')
// console.log(filter4)
// let filter5 = deck.filter(suit => suit.cardSuit === 'Clubs' && (suit.value >= 9 || suit.value.length > 2));
// console.log(filter5)


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = deck.reduce((accum, value) => {
//     if (value.cardSuit === 'Spade') {
//         accum.spades.push(value);
//     } else if (value.cardSuit === 'Clubs') {
//         accum.clubs.push(value);
//     } else if (value.cardSuit === 'Diamonds') {
//         accum.diamonds.push(value);
//     } else if (value.cardSuit === 'Hearts') {
//         accum.hearts.push(value);
//     }
//     return accum;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
// console.log(reduce);

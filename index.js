// Задание 7.6.1

// const word = prompt("Введите слово для проверки:");
// if (word === null || word.trim() === "") {
//     console.log("Вы ничего не ввели!");
// } else {
//     const cleanWord = word.toLowerCase().replace(/\s/g, '');
    
//     const reversedWord = cleanWord.split('').reverse().join('');
    
//     if (cleanWord === reversedWord) {
//         console.log(`Слово "${word}" является палиндромом`);
//     } else {
//         console.log(`Слово "${word}" не является палиндромом`);
//     }
// }



// Задание 7.6.2.

// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr); //в консоли браузереа или через node.js должен быть ответ [1, 2, 3, 5, 4, 'they', 'don\'t', 'know', 'that', 'we'];


// Задание 7.6.3.

// const userInput = prompt("Введите любое число:");

// if (userInput === null) {
//   console.log("отменили ввод!");
// } else {
//   const number = Number(userInput);
  
//   if (isNaN(number)) {
//     console.log("ввели не число!");
//   } else {
//     const numbersArray = [];
//     for (let i = 0; i <= number; i++) {
//       numbersArray.push(i);
//     }
    
//     console.log(`Массив чисел от 0 до ${number}:`, numbersArray);
//   }
// }

// Задание 7.6.4.

// const board = [
//     ['x', 'o', 'x'],
//     ['o', 'x', 'o'],
//     ['x', 'o', 'x']
//   ];
  
//   for (let i = 0; i < 3; i++) {
//     let row = '';
//     for (let j = 0; j < 3; j++) {
//       row += board[i][j];
//       if (j < 2) {
//         row += ' ';
//       }
//     }
//     console.log(row);
//   }


// Задание 7.6.5.


const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (let key in obj) {
    const value = obj[key];
    
    if (Array.isArray(value)) {
        arrValues.push(...value);
    } else {
        arrValues.push(value);
    }
}

console.log(arrValues);
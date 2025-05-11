// // Задание 8.7.1.

// function printInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
//   const person = {
//     name: 'Иван',
//     age: 30
//   };
//   printInfo.call(person);

// // Задание 8.7.2.

// function calculate(a, b, operator) {
//     switch (operator) {
//       case '+':
//         return a + b;
//       case '-':
//         return a - b;
//       case '*':
//         return a * b;
//       case '/':
//         return a / b;
//     }
//   }
//   const params = {
//     a: 2,
//     b: 3,
//     operator: '+'
//   };
//   const result = calculate.apply(null, [params.a, params.b, params.operator]);
//   console.log(result);

// // Задание 8.7.3.

// const users = [
//     { name: 'Таня', age: 23 },
//     { name: 'Игорь', age: 16 },
//     { name: 'Людмила', age: 26 },
//     { name: 'Андрей', age: 13 },
//     { name: 'Елена', age: 21 }
//   ];
  
//   const adults = users.filter(user => user.age >= 18);
//   console.log('Совершеннолетние пользователи:', adults);
  
//   const names = adults.map(user => user.name);
//   console.log('Имена совершеннолетних пользователей:', names);

// // Задание 8.7.4.

// function setFullName(fullName) {
//     this.fullName = fullName;
//   }
//   const person = {
//     name: 'Джон',
//     age: 33
//   };
//   const setPersonFullName = setFullName.bind(person);
//   setPersonFullName("John Smith");
//   console.log(person);

// Задание 8.7.5.


function getUniqueSortedNumbers(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
    
    return sortedNumbers;
  }
  const numbers = [6, 8, 4, 7, 5, 1, 2, 9, 5, 7, 1];
  const result = getUniqueSortedNumbers(numbers);
  console.log(result);
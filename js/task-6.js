//Написати функцію, яка буде рахувати загальну сумму елементів масива спочатку циклом for потім for of
const numbers = [1, 23, 37, 44, 59];

// function calculation(dataArray) {
//   let number = 0;
//   for (let i = 0; i < dataArray.length; i++) {
//     number += dataArray[i];
//   }
//   return number;
// }

// console.log(calculation(numbers));

function calculation(dataArray) {
  let numberSum = 0;
  for (const number of dataArray) {
    numberSum += number;
  }
  return numberSum;
}

console.log(calculation(numbers));

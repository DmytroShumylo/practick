/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? 70 === 01:10
 */
const minutes2 = 75;
const MINUTES = 70;

function convertTime(time) {
  const hours = String(Math.floor(time / 60)).padStart(2, "0");

  const minutes = String(time % 60).padStart(2, "0");

  return `${hours}:${minutes}`;
}

console.log(convertTime(70));
console.log(convertTime(65));

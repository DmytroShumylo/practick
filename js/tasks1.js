/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */
const ansver = prompt("Яка офіційна назва JavaScript?").trim();
const CORRECT_VALUE = "ECMAScript";
if (CORRECT_VALUE === ansver) {
  alert("Вірно");
} else {
  alert("Не знаєте? ECMAScript!");
}

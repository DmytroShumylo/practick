/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розгорнути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 */

const arr = ["BEST", "the", "foo", "is", "JS"];
const reversedArr = arr.reverse();
console.log(reversedArr);
const index = reversedArr.indexOf("foo");
reversedArr.splice(index, 1);
console.log(reversedArr);
const str = reversedArr.join(" ");
console.log(str);

const newArr = [];
if (newArr.length) {
  console.log("Масив не пустий");
} else {
  console.log("Масив пустий");
}

newArr.length ? console.log("Масив не пустий") : console.log("Масив пустий");

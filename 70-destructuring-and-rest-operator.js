// node 70-destructuring-and-rest-operator.js
/** ЗАДАЧА 70 - Деструктуризация массивов и "rest" оператор
 *
 * Присвойте переменным "a", "b" и "с" значения, используя
 * деструктуризацию массивов и "rest" оператор
 *
 * Значения переменных должны быть такими как в выводах в консоли
 */


// const fruits = ['apple', 'orange', 'banana', 'pineapple'];
//
// const [first, ...rest] = fruits;
// console.log(first); // 'apple'
// console.log(rest); // ['orange', 'banana', 'pineapple']


const arr = [1, 2, 3, 4, 5, 6, 7]
const [a,b,...c]=arr


console.log(a)
// 1

console.log(b)
// 2

console.log(c)
// [3, 4, 5, 6, 7]
// node 32-add-start-of-the-array.js
/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null]
myArray.unshift('Hello')
myArray.unshift(100)
// Напишите код здесь

console.log(myArray) // [100, "Hello", true, null]
console.log(myArray.length)


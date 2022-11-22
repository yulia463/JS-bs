// node 71-spread-operator.js
/** ЗАДАЧА 71 - Spread Operator
 *
 * Используя оператор "spread" создайте новый массив
 * Вывод в консоли должен быть таким же как в конце задания
 */

const a = [1, 2]
const b = [4, 5]
const c = [8, 9, 10]
const d = 11

const combinedArray=[0,...a,3,...b,6,7,...c,d]
// Напишите код здесь

console.log(combinedArray)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const str = 'abcdef'

const arr1 = str.split('')
const arr2 = [...str]

console.log('arr1,', arr1)
console.log('arr2,', arr2)



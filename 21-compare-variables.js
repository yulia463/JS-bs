// node 21-compare-variables.js
/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'


if(Number(myVariable1) <= Number(myVariable2)){
    console.log(true)
}
// Напишите код здесь

myVariable1 = '20'
myVariable2 = 100
if(Number(myVariable1) <= Number(myVariable2)){
    console.log(true)
}
// Напишите код здесь
// node 61-sum-numbers.js
/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */
const sumNumbers=(...rest)=>{
let result =0
    for(let i =0 ; i<rest.length; i++){
        result += rest[i];
    }
    return result

}
sumNumbers(1, 3)
// 4

sumNumbers(10, 20, 5)
// 35

sumNumbers(2, 5, 80, 1, 10, 12)
// 110
console.log(sumNumbers(1,3))
console.log(sumNumbers(10, 20, 5))
console.log(sumNumbers(2, 5, 80, 1, 10, 12))
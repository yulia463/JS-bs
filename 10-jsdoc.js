// node 10-jsdoc.js
/**
 * ЗАДАЧА - Комментарий перед функцией
 *
 * 1. Обьявите функцию с двумя параметрами,значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и втрорым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией :
 * - Текст комментария "Возвращает разницу двух чисел"
 * -  Укажите тип параметров - number
 * -  Укажите тип возвращаемого значения - number
 * -  Опишите возвращаемое значение - "Разнаца чисел"
 *
 * 4. Вызовите функцию
 */

/**
 * Возвращает разницу двух чисел
 * @param {number} p1
 * @param {number} p2
 * @returns {number} Разнаца чисел
 */
const numbers =(p1 , p2) => {
return p1 - p2
}
const result = numbers(10,2)
console.log( result)
// node 62-different-functions.js
/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
    return a + b
}

const secondFunction = function (a, b) {
    return a + b
}
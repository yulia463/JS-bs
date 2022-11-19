// node 66-arrow-functions.js

/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

const mult = (a, b) => a * b


setTimeout(() => {
    console.log(mult(5, 10))
}, 1000)
// 50


// function mult(a, b) {
//     return a * b
// }
//
// setTimeout(function () {
//     console.log(mult(5, 10))
// }, 1000)
// // 50
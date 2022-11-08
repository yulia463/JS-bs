// node 26-what-will-be-logged.js
/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
    console.log('Привет из функции fn')

    return function (a) {
        console.log(a)
    }
}

fn()(true)
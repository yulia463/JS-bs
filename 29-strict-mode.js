// node 29-strict-mode.js
/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'

function myFunction() {
   let a = 2
    return a
}

console.log(myFunction())
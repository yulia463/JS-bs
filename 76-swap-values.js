// node 76-swap-values.js
/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let a = 'first';
let b = 'second';


console.log(a, b);
// first second
[a, b] = [b, a];
// Напишите код здесь

console.log(a, b)
// second first
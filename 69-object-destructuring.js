// node 69-object-destructuring.js
/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
    x: 5,
    y: 20,
    z: 3,
}
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };
//
// let {title, width, height} = options;

// Создайте функцию здесь
const mult = (objectWithNumbers) => {
    let {x, y, z} = objectWithNumbers;
    return x * y * z
}

const result = mult(objectWithNumbers)
console.log(result)
// 300
// node 14-uppercase-string.js
/**
 * ЗАДАЧА - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор 'instanceof'
 *
 * 3. Убедитесь что значение этой переменной имеет тип "String"
 *
 * 4.Создайте другую переменную  и ее значением должно быть значение первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */
// const string = 'This is string'
//
// console.log(string instanceof String)
// console.log(typeof string)
//
// const bigString = string.toUpperCase()
// console.log(bigString)
 // ИЛИ

const myString = new String('Yopik') // экзэмплярстроки

console.log(myString instanceof String)
console.log(typeof myString)

// node 12-create-object.js
/**
 * ЗАДАЧА - Создание объекта
 *
 * 1. Создайте объкт с тремя свойствами
 * - name
 * - surname
 * - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

let object ={
    name: 'Ёпик' ,
    surname: 'Остапкивочкин' ,
    favoriteName:'Стёпка'
}
// let hi = "My name is" + name + '' +  surname + 'and my favorite number is' + favoriteName
let hi = `My name is ${name} ${surname} and my favorite number is ${favoriteName}`
console.log(hi)
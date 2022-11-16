// node 54-array-destructuring.js
/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

const processQuantities = (inputQuantities) => {
    const [minQty, maxQty, defaultQty = 0] = inputQuantities;
    console.log(minQty) // 8
    console.log(maxQty) // 29
    console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
    return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
// let minQty = inputQuantities1[0]
// let maxQty = inputQuantities1[1]
// let defaultQty = inputQuantities1[2]

console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]


console.log(processQuantities(inputQuantities2)) // 21
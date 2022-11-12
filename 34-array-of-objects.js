// node 34-array-of-objects.js
/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const array = [
    {
        carBrand: 'BMW',
        price: 1000000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Tesla',
        price: 10000000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Nisan',
        price: 10000,
        isAvailableForSale: false
    },
]
array.push({carBrand: 'Mercedes',
    price: 10000000,
    isAvailableForSale: false})
console.log(array)
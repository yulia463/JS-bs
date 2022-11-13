// node 43-compare-two-arrays.js
/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const areArraysEqual = (firstArray,secondArray) => {
if (firstArray.length !== secondArray.length ){
    return false
}
for(let i=0 ; i< firstArray.length ; i++){
    if(firstArray[i] !== secondArray[i]){
        return false
    }
}
return true
}

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
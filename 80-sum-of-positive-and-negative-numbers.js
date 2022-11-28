// node 80-sum-of-positive-and-negative-numbers.js
/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь
const sumPositiveNegative = (arr) => {
        if(arr.length === 0) return 0;

        let sumNegative = 0;
        let sumPositive = 0;
        for(let i = 0; i < arr.length; i++)
            if(arr[i] < 0) {
                sumNegative += arr[i];
            }else{
                sumPositive += arr[i]
            }
        return {positive: sumPositive , negative: sumNegative};

}
const result = sumPositiveNegative(nums)

console.log(result)

// { positive: 74, negative: -54 }
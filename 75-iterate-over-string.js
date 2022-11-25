// node 75-iterate-over-string.js
/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

let sum =(str);// переменная для ввода строки
function vowelsRed (s) {
    let sa=s.split(''); // превращает строку в массив из символов
    let vs=['a', 'e', 'i', 'o', 'u'];// строка с гласными


    sa.reduce( (r,c) => {
            if (vs.indexOf (c) !==-1)
                vowelsCount++;
        }
    );
    return vowelsCount;
}

// const sum=(str1)=>{
//     for(let i = 0; i < str.length ; i++) {
//         if (sum.indexOf(str1[i]) !== -1) {
//             vowelsCount += 1;
//         }
// return vowelsCount
//     }
// }

console.log(vowelsCount)
// 9
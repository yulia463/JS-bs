// node 75-iterate-over-string.js
/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

const str = 'Today is the best day of my life'

let sum =(str);// переменная для ввода строки
function vowelsRed (s) {
    let sa=s.split(''); // превращает строку в массив из символов
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsCount = 0

    sa.forEach( (r) => {
            if (vowels.indexOf(r) !==-1)
                vowelsCount++;
        }
    );
    return vowelsCount;
}

console.log(vowelsRed(str))
// 9
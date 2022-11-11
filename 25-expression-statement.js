// node 25-expression-statement.js
/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 // <--(expression statement)

// (statement)
const myObject = {// <--(expression)
    x: 10,
    y: true,
}

myObject.z = 'abc'// <--(expression)
//(expression statement)

delete myObject.x
// (expression statement)

let newVariable
// (statement)

newVariable = 30 + 5
// ( expression statement)


// ( expression statement)
console.log(newVariable)
//                ^
//           (expression)


// (statement)
if (newVariable > 10) {
    //   ^
    // expression
    console.log(`${newVariable} больше 10`)
}
// (expression statement)
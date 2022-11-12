// node 40-map-json-to-object.js
/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

let postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
    '{"postId":2351,"commentsQuantity":8}'
]
// newObject = JSON.parse(postsJSON[0])
postsJSON = postsJSON.map((element) => (JSON.parse(element)))
console.log(postsJSON[1].postId)
console.log(postsJSON[postsJSON.length -1].commentsQuantity)


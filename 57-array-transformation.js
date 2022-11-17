// node 57-array-transformation.js
/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */
const processPosts = () => {
    return testPosts.map(el => {
        const newObject = {};

        newObject.postId = el.postId + 1000
        newObject.postAuthor = el.author
        newObject.postCommentsQty = el.commentsQty || 0

        return newObject

    })
}

// const myUsers = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' }
// ]
// const usersByLikes = myUsers.map(item => {
//     const container = {};
//
//     container[item.name] = item.likes;
//     container.age = item.name.length * 10;
//
//     return container;
// })

// console.log(usersByLikes);

const testPosts = [
    {
        postId: 234,
        author: 'robd',
        commentsQty: 5,
    },
    {
        postId: 823,
        author: 'sady',
    },
    {
        postId: 161,
        author: 'merryl',
        commentsQty: 8,
    },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts)
// оригинальный массив должен остаться без изменений
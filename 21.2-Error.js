// node 21.2-Error.js
const fnWithError =() =>{
    throw new Error('Some Error')
}
fnWithError()
console.log('Continue...')
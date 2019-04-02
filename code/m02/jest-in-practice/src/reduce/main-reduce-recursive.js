'use strict'

const isInitialValueUndefined = (initialValue) => initialValue === undefined

const reduce = (arr, func, initialValue) => {
const acc = isInitialValueUndefined(initialValue) ? arr[0]  : initialValue
const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr

return (function reduceInterval(accInternal, arrInternal, counter ) { 
    const [head, ...tail] = arrInternal
    const accNext = () => func(accInternal, head, counter, arrCopy)
    return arrInternal.length === 0
    ? accInternal
    : reduceInterval(accNext(), tail, counter + 1)

})(acc, arrCopy, 0)
}

export default reduce




//  let acc = initialValue
//  let arrCopy = arr
//
//  if( initialValue === undefined) {
//  acc = arr[0]
//  arrCopy = arr.slice(1)
//  }
// for(let i = 0; i < arrCopy.length; i++) {
//     acc = func(acc, arrCopy[i], i, arrCopy)
// }
//
//    return acc
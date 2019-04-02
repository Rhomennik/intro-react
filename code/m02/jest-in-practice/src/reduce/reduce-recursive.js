'use strict'

import mainReduceRecursive from './main-reduce-recursive'
const reduce = mainReduceRecursive

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
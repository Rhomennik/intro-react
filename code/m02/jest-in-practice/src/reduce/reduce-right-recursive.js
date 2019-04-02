'use strict'

import mainReduceRecursive from './main-reduce-recursive';
import reverse from '../reverse/reverse'

const reduceRight = (arr, ...params) => mainReduceRecursive(reverse(arr), ...params) 

export default reduceRight
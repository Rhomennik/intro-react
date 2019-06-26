'use strict'

const soma = (a, b) => {
    return a === undefined || typeof(a) === "string" || typeof(b) === "string"
    ? 'nada para somar'
    : b === undefined
    ? a
    : a + b;
}

export default soma;
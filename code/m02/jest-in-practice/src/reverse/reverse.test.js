'use strict'

import {expect} from 'chai'
import reverse from './reverse'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})
it('reverse([1]) should return [1]', () => {
    expect(reverse([1])).to.deep.equal([1])
})

it('reverse([1, 2]) should return [2, 1]', () => {
    expect(reverse([1, 2])).to.deep.equal([2, 1])
})
it('reverse(["Rhomennik", "Firmino"] should return ["Firmino", "Rhomennik"])', () => {
    expect(reverse(['Rhomennik', 'Firmino'])).to.be.deep.equal(['Firmino', 'Rhomennik'])
})
'use strict'
import { expect } from 'chai'
import soma from './soma'

it('soma should be a function', () => {
    expect(soma).to.be.a('function')
})

it('soma() should be return "nada para somar" ', () => {
    expect(soma()).to.be.equal('nada para somar');
})

it('soma("rhome", "string") should be return "nada para somar" ', () => {
    expect(soma('rho0me', 'string')).to.be.equal('nada para somar');
})

it('soma(1) should be return 1 ', () => {
    expect(soma(1)).to.be.equal(1);
})

it('soma(5, 5) should be return 10', () => {
    expect(soma(5, 5)).to.be.equal(10);
})

it('soma(30, 15) should be return 45', () => {
    expect(soma(30, 15)).to.be.equal(45);
})
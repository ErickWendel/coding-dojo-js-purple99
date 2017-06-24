const assert = require('assert')
const Desafio = require('./desafio')

test('papel contra papel dá empate', ()=> {
    assert.equal(Desafio.jogada('papel', 'papel'), 'empate')
})

test('pedra contra pedra dá empate', ()=> {
    assert.equal(Desafio.jogada('pedra', 'pedra'), 'empate')
})

test('pedra contra papel', ()=> {
    assert.equal(Desafio.jogada('pedra', 'papel'), 'pedra perde')
})

test('tesoura contra tesoura dá empate', ()=> {
    assert.equal(Desafio.jogada('tesoura', 'tesoura'), 'empate')
})

test('pedra ganha de tesoura', () => {
    assert.equal(Desafio.jogada('pedra', 'tesoura'), 'pedra ganhou')
})

test('pedra perde de papel', () => {
    assert.equal(Desafio.jogada('papel', 'pedra'), 'papel ganha')
})

test('papel ganha de pedra', () => {
    assert.equal(Desafio.jogada('papel', 'pedra'), 'papel ganha')
})

test('papel perde de tesoura', () => {
    assert.equal(Desafio.jogada('papel', 'tesoura'), 'papel perde')
})

test('tesoura ganha de papel', () => {
    assert.equal(Desafio.jogada('tesoura', 'papel'), 'tesoura ganha')
})

test('tesoura perde de pedra', () => {
    assert.equal(Desafio.jogada('tesoura', 'pedra'), 'tesoura perde')
})
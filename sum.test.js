
const remaining = require('./remaining')
const {sum, myFunction} = require('./sum')

describe('calculation tests',()=>{

    test('adds 1+2 to equal 3', () => {
        expect(sum(1,2)).toBe(3)
    })

    test('brings the remainig',() => {
        expect(remaining(5,10)).toBe(5)
    })
})

describe('object tests', () => {
    test('object assignment', () => {
        const data = {one: 1}
        data['two'] = 2
        expect(data).toEqual({one:1, two:2})
    })
})


describe('Falsy & Truthy', () => {
    
    test('null is falsy',() => {
        const n = "" // n can be 0,false, " "
        expect(n).toBeFalsy()
    })

    test('one is truthy', () => {
        const n = 1 
        expect(n).toBeTruthy()
    })


})


describe('Throwing errors', () => {
    test('throws error on invalid input', () => {
        expect(() => {
            myFunction('string')
        }).toThrow()
    })
})
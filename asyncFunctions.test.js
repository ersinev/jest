const {fetchData, fetchPlaceHolder} = require('./asyncFunctions')

describe('Async Testing with Promises', () => {

    test('fetchData resolves with "peanut butter"', () => {
        return fetchData().then(data => {
            expect(data).toBe('peanut butter')
        })

    })

    test('fetchData resolves with "peanut butter" using .resolves', () => {
        return expect(fetchData()).resolves.toBe('peanut butter')
    })

})

describe('Async Testing with async/await', () => {

    test('fetchData resolves with "peanut butter"', async () => {
        const data = await fetchData()
        expect(data).toBe('peanut butter')
    })

})

describe('Async Testing with JSONPlaceholder API', () => {
    test('fetches posts from JSONPlaceholder API', async () => {
        const data = await fetchPlaceHolder()
        expect(data.length).toBeGreaterThan(0)
        expect(data[0]).toHaveProperty('username')
    })
})
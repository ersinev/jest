const sum = (a,b) => {
    return a+b
}

const myFunction = (input) => {
    if(typeof input !== 'number'){
        throw new Error('Invalid input')
    }
}

module.exports = {sum, myFunction}
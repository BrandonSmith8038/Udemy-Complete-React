console.log('Utils.js is Running!')


const square = function(x) {
    return x * x
}

const add = function(a, b) {
    return a + b
}

const subtract = function(a, b) {
    return a - b
}

export { square, add, subtract as default }

// function squared(num) {
//     return num * num
// }

// console.log(squared(5))

// const arrowSquared = (num) => {
//     return num * num
// }
// console.log(arrowSquared(5))

// const expressionSquare = (num) => num * num
// console.log(expressionSquare(5))

const getFirstNameVerbose = (fullName) => {
    return fullName.split(' ')[0]
}
console.log('First Name Verbose: ', getFirstNameVerbose('Brandon Smith'))

const getFirstNameExpression = (fullName) => fullName.split(' ')[0]
console.log('First Name Expression: ', getFirstNameExpression('Brandon Smith'))

//Can reassigned, Can redefine
var nameVar = 'Brandon'
var nameVar = 'Amber'
console.log('nameVar:', nameVar)

//Can reassigned, Can't redefine
let nameLet = 'Brandon'
nameLet = 'Amber'
console.log('nameLet:', nameLet)

//Can't reassign, Can't redefine
const nameConst = 'Frank'
console.log('nameConst', nameConst)


// Block Scoping

var fullName = 'Brandon Smith'

if (fullName) {
    var varFirstName = fullName.split(' ')[0]
    console.log('Var firstName: ', varFirstName)
}
console.log('Var firstName: ', varFirstName)

if (fullName) {
    const constFirstName = fullName.split(' ')[0]
    console.log('const firstName: ', constFirstName)
}
// Won't run - Block Level
//console.log('Const firstName: ', constFirstName)

if (fullName) {
    let letFirstName = fullName.split(' ')[0]
    console.log('let firstName: ', letFirstName)
}
// Won't run - Block Level
//console.log('let firstName: ', letFirstName)

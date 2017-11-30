//Object Destructoring

/*const person = {
    name: 'Brandon',
    age: 31,
    location: {
        city: 'Goodyear',
        temp: 88
    }
}


const { name: firstName = 'Anonymous', age } = person
// const name = person.name
// const age = person.age
console.log(`${firstName} is ${age}.`)

const { temp: tempature, city } = person.location
console.log(`Its ${tempature} in ${city}`)*/


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//         year: 1996
//     }
// }

// const { name: publisherName = 'Self Published' } = book.publisher

// console.log(`${publisherName}`)

//Array Destructoring

// const address = ['1299 S. Juniper Street', 'Goodyear', 'AZ', '85338']

// const [, city, state = 'Arizona'] = address

// console.log(`Your are in ${city}, ${state}.`)

const item = ['Coffee (iced)','$2.00', '$2.50', '$2.75']

const [name, smallPrice, medPrice, largePrice] = item

console.log(`A medium ${name} costs ${medPrice}.`)

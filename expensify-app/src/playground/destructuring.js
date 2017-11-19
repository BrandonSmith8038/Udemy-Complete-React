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


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
        year: 1996
    }
}

const { name: publisherName = 'Self Published' } = book.publisher

console.log(`${publisherName}`)

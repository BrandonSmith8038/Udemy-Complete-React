// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments)
    return a + b
}
console.log(add(55, 1))

const arrowAdd = (a, b) => {
    //Wont' Run
    //console.log(arguments)
    return a + b

}
console.log(arrowAdd(55, 1))




// this keyword - no longer boud
const user = {
    name: 'Brandon',
    cities: ['Phoenix', 'Goodyear', 'Wittmann'],
    printPlacesLived: function() {
        console.log(this.name)
        console.log(this.cities)

        // //Won't Run = This Not Bound
        // this.cities.forEach(function(city) {
        //     console.log(this.name + ' has lived in' + city)
        // })

        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}`)
        })
    }
}

user.printPlacesLived()

//Methods Definition Syntax

const user2 = {
    name: 'Brandon',
    cities: ['Phoenix', 'Goodyear', 'Wittmann'],
    placesLived() {
        this.cities.forEach((city) => {
            console.log('For Each ', `${this.name} has lived in ${city}`)
        })
    }

}
user2.placesLived()

//.map() - Gives you a new array allowing you transform before using
const user3 = {
    name: 'Brandon',
    cities: ['Phoenix', 'Goodyear', 'Wittmann'],
    placesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }

}
console.log(user3.placesLived())

// Challenge Area

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())

'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

var arrowAdd = function arrowAdd(a, b) {
    //Wont' Run
    //console.log(arguments)
    return a + b;
};
console.log(arrowAdd(55, 1));

// this keyword - no longer boud
var user = {
    name: 'Brandon',
    cities: ['Phoenix', 'Goodyear', 'Wittmann'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        // //Won't Run = This Not Bound
        // this.cities.forEach(function(city) {
        //     console.log(this.name + ' has lived in' + city)
        // })

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

//Methods Definition Syntax

var user2 = {
    name: 'Brandon',
    cities: ['Phoenix', 'Goodyear', 'Wittmann'],
    placesLived: function placesLived() {
        var _this2 = this;

        this.cities.forEach(function (city) {
            console.log('For Each ', _this2.name + ' has lived in ' + city);
        });
    }
};
user2.placesLived();

//.map() - Gives you a new array allowing you transform before using
var user3 = {
    name: 'Brandon',
    cities: ['Phoenix', 'Goodyear', 'Wittmann'],
    placesLived: function placesLived() {
        var _this3 = this;

        return this.cities.map(function (city) {
            return _this3.name + ' has lived in ' + city;
        });
    }
};
console.log(user3.placesLived());

// Challenge Area

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this4 = this;

        return this.numbers.map(function (num) {
            return num * _this4.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());

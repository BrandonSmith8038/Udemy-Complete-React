export const isAdult = function(age) {
    if (age >= 18) {
        return true
    }
}

export const canDrink = function(age) {
    if (age >= 21) {
        return true
    }
}

const isSenior = function(age) {
    if (age >= 64) {
        return true
    }
}


export default isSenior

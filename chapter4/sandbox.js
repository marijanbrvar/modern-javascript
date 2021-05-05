// returning value
// const speak = function(name = 'Marijan', time = 'Night'){
//     console.log(`Good ${time}! ${name}`)
// };


const calcArray = function(radius) {
    let area = 3.14 * radius**2
    return area
}

const area = calcArray(5)

console.log(area)


const calcVolume = function(arra) {
    return area * 2
}

calcVolume(area)
console.log(calcVolume())
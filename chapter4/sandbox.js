// Arrow function

// const calcArea = function(radius){
//     return 3.14 * radius**2
// }

const calcArea = radius => 2.14 * radius**2

const area = calcArea(4)
console.log(area)


const bill = (products, tax) => {
    let total = 0;
    for (let index = 0; index < products.length; index++) {
       total += products[index] + products[index] * tax
    }
    return total;
}

console.log(bill([10,15,30, 20], 0.2))
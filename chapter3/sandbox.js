// variables and block scope
let age = 30

if (true) {
    let age = 40 * 2

    console.log('inside 1st code block: ', age)
}

console.log(age)
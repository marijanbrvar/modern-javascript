// Creating object literal
let user = {
    name: 'Marijan',
    age: 49,
    email: 'hello@marijan.xyz',
    location: 'Belgrade',
    blogs: ['why mac & cheese rules', '10 things to make with marmate']
}

console.log(user)
console.log(user.blogs)
// console.log(user.name) // accesing value
const key = 'location'

console.log(user[key]) // accesing key

user['name'] = 'makiato'
console.log(user.name)


console.log(typeof user);
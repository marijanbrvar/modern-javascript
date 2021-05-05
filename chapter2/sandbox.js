// template strings
const title = 'Best reads of 2021'
const author = 'Marijan'
const likes = 30

// concatenation way
// let res = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'
// console.log(res)

// template string way
// let res = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(res)

// creating html template
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes</span>
`

console.log(html)
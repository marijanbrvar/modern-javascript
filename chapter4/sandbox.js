// get reference to the 'ul'

const ul = document.querySelector('.people')

let people = ['maki', 'kira', 'mia', 'eva']

let html = ``
people.forEach((person, i) => {
    // html template
    html += `<li style="color: purple">${person}</li>`
})

console.log(html)

ul.innerHTML = html;
const button = document.querySelector('button')
const items = document.querySelectorAll('li')
const ul = document.querySelector('ul')

button.addEventListener('click', ()=>{
    // ul.innerHTML += `<li>add new line</li>`
    const li = document.createElement('li')
    li.textContent = 'Something new to add'
    // ul.append(li)
    ul.prepend(li)
})

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through'
//         console.log('event in li')
//         e.stopPropagation()
//         e.target.remove()
//     })
// })

ul.addEventListener('click', e => {
    // console.log('event in ul')
    if (e.target.tagName === 'LI') {
        e.target.remove()
    }
})
// ul.remove()
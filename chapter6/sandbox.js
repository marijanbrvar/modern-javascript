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

items.forEach(item => {
    item.addEventListener('click', e => {
        // e.target.style.textDecoration = 'line-through'
        e.target.remove()
    })
})

// ul.remove()
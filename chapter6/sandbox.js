// const button = document.querySelector('button')

// button.addEventListener('click', e => {
//     console.log(e)
// })

const items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked', e.target)
        // console.log(item)
        e.target.style.textDecoration = 'line-through'
    })
})
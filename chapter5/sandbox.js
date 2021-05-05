// object literal this keyword
let user = {
    name: 'Marijan',
    age: 49,
    email: 'hello@marijan.xyz',
    location: 'Belgrade',
    blogs: ['why mac & cheese rules', '10 things to make with marmate'],
    login: function(){
        console.log('the user logged in')
    },
    logout() {
        console.log('the user logged out!')
    },
    logBlogs(){
        // console.log(this)
        console.log('this user has written the following blogs: ')
        this.blogs.forEach(blog => console.log(blog))
    }
}

user.logBlogs()

console.log(this)
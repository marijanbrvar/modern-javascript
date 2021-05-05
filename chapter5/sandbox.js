// object literal in array
let user = {
    name: 'Marijan',
    age: 49,
    email: 'hello@marijan.xyz',
    location: 'Belgrade',
    blogs: [
        {title: 'why mac & cheese rules', like: 30}, 
        {title: '10 things to make with marmate', like: 50}
    ],
    login: function(){
        console.log('the user logged in')
    },
    logout() {
        console.log('the user logged out!')
    },
    logBlogs(){
        // console.log(this)
        console.log('this user has written the following blogs: ')
        this.blogs.forEach(blog => console.log(blog.title, blog.like))
    }
}

user.logBlogs()

console.log(this)
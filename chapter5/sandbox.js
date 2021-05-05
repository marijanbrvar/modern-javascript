// object literal adding methods
let user = {
    name: 'Marijan',
    age: 49,
    email: 'hello@marijan.xyz',
    location: 'Belgrade',
    blogs: ['why mac & cheese rules', '10 things to make with marmate'],
    login: function(){
        console.log('the user logged in')
    },
    logout: function() {
        console.log('the user logged out!')
    },
    logBlogs: function(){
    }
}


user.login()


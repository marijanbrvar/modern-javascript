// Else if statent

const password = 'pass'

if (password.length >= 12) {
    console.log('this password is strong!')
}
else if (password.length >= 8) {
    console.log('this password is long enought!')
}
else {
    console.log('this password is NOT long enought!')
}
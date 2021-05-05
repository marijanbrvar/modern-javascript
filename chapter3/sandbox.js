// Else if statent

const password = 'pass@word13212313'

if (password.length >= 12 && password.includes('@')) {
    console.log('this password is strong!')
}
else if (password.length >= 8) {
    console.log('this password is long enought!')
}
else {
    console.log('this password is NOT long enought!')
}
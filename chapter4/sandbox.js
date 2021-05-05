// arguments & parameters
const speak = function(name = 'Marijan', time = 'Night'){
    if (name) {
        console.log(`Good ${time}! ${name}`)
    } else {
        console.log(`Good day!`)
    }
};

speak('Luigi', 'morning');

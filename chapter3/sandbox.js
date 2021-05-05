// break and continue

const scores = [50, 25, 35, 0, 45, 100, 10, 20]

for (let index = 0; index < scores.length; index++) {
    
    if (scores[index] === 0) {
        continue
    }
    
    console.log('your score is:', scores[index])
    
    if (scores[index] == 100) {
        console.log('congrats, you get the top score!')
        break
    }
}
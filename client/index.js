<<<<<<< HEAD
const bootstrap = require('bootstrap')

console.log("Hello World")
=======
// Counter Function Attempt
function sumScore(data) {
    let totalScore = 0;
    for (let i = 0; i < data.length; i++) {
        totalScore += data[i].correct_ans_id;
    }
    return totalScore;
}

const totalScore = sumScore(data);
console.log(totalScore);
>>>>>>> 0963372f38791eff7880930b0a8666ac1936c249

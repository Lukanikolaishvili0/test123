const sumScores = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.lenght; i++) {
        sum += scores[i];
    }
 return sum;
};
console.log(sumScores(student.scores));
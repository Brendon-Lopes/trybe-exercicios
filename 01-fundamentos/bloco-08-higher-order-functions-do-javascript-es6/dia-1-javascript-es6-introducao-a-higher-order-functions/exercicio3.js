const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkAnswers = (rightAnswers, studentAnswers) => {
  if(rightAnswers === studentAnswers) return 1;
  if(studentAnswers === 'N.A') return 0;
  return -0.5;
}

const gradeCalculator = (rightAnswers, studentAnswers, callback) => {
  let grade = 0;

  for(let index = 0; index < rightAnswers.length; index += 1) {
    grade += callback(rightAnswers[index], studentAnswers[index]);
  }
  return grade;
}

console.log(gradeCalculator(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));

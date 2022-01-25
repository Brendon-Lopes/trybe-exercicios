const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function calcAverage(index) {
  return (grades[index]
    .reduce((acc, grade) => acc + grade, 0)) / grades[index].length;
};

function studentsAverage() {
  return students.map((student, index) => ({
    name: student,
    average: calcAverage(index),
  }));
};

console.log(studentsAverage());


// function studentAverage() {
//   return [
//     {
//       name: students[0],
//       average: parseFloat(grades[0]
//         .reduce((acc, curr, index, array) => acc + curr / array.length, 0)
//         .toFixed(1))
//     },
//     {
//       name: students[1],
//       average: parseFloat(grades[1]
//         .reduce((acc, curr, index, array) => acc + curr / array.length, 0)
//         .toFixed(1))
//     },
//     {
//       name: students[2],
//       average: parseFloat(grades[2]
//         .reduce((acc, curr, index, array) => acc + curr / array.length, 0)
//         .toFixed(1))
//     }
//   ]
// }

const myList = [1, 2, 3];
let [one, two, three] = myList;

const swap = () => [one,, three] = [three, two, one];
const swap2 = ([one,, three]) => [three, two, one];

console.log(swap());
console.log(swap2(myList));
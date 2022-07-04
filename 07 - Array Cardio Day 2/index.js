const people = [
  { name: "Lux", year: 2000 },
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAtLeastOnePersonAbove19 = people.some(({ year }) => 2022 - year >= 19);

console.log(isAtLeastOnePersonAbove19);

// Array.prototype.every() // is everyone 19 or older?
const answer = people.every(({ year }) => 2022 - year >= 19);

console.log(answer);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(({ id }) => id === 823423);
console.log(comment);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex(({ id }) => id === 823423);
console.log(commentIndex);

comments.splice(commentIndex, 1);

console.log(comments);

const newComments = comments.filter();

function test({ text, id } = {}) {}

test();

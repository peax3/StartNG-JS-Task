// STARTNG JAVASCRIPT TASK 1

// store  name in a variable
const name = "Peace Adjerese";

// store  courses in an array
const courses = ["html", "css", "javascript", "ui/ux"];

// display name and courses
console.log(name);
console.log(courses);

// returns true if num is even and false if num is odd
function isEven(num) {
  return num % 2 === 0;
}

// display even numbers from 1-200
if (isEven(courses.length)) {
  for (let i = 1; i <= 200; i++) {
    if (isEven(i)) console.log(i);
  }
}

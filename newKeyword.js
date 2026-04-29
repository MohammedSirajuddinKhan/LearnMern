function multiplyBy5(num) {
  return num * 5;
}

console.log(multiplyBy5(5));
console.log((multiplyBy5.power = 5));
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.printMe = function () {
  console.log(`score is: ${this.score}`);
};

const tea = createUser("tea", 200); // It gives error
const chai = new createUser("chai", 20); // It runs as it has `new` keyword used because it is an object

// tea.printMe();
chai.printMe();
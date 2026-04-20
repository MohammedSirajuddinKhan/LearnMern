const arr =[]
// push
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr) // [1, 2, 3]
// pop
arr.pop()
console.log(arr) // [1, 2]
// unshift
arr.unshift(0)
console.log(arr) // [0, 1, 2]
// shift
arr.shift()
console.log(arr) // [1, 2]
// splice
arr.splice(1, 0, 1.5)
console.log(arr) // [1, 1.5, 2]
// slice
const newArr = arr.slice(0, 2)
console.log(newArr) // [1, 1.5]
// indexOf
console.log(arr.indexOf(1.5)) // 1
// includes
console.log(arr.includes(2)) // true
// length
console.log(arr.length) // 3
// forEach
arr.forEach((item) => {
  console.log(item) // 1, 1.5, 2
})
// map
const mappedArr = arr.map((item) => item * 2)
console.log(mappedArr) // [2, 3, 4]
// filter
const filteredArr = arr.filter((item) => item > 1)
console.log(filteredArr) // [1.5, 2]
// reduce
const sum = arr.reduce((acc, item) => acc + item, 0)
console.log(sum) // 4.5
// find
const foundItem = arr.find((item) => item > 1)
console.log(foundItem) // 1.5
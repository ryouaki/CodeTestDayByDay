var arr = [1,2,3,4,5,6,7]
var k = 3

// output [5,6,7,1,2,3,4]

function func(arr, k) {
  let a1 = arr.slice(0, k + 1)
  let a2 = arr.slice(k + 1, arr.length)
  return a2.concat(a1)
}

console.log(func(arr, k))
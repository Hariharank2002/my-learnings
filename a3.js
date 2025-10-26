// largest array element

const arr = [23, 45, 78, 188, 49, 76]
let max = arr[0]

for (let index = 1; index < arr.length; index++) {    
    if (arr[index] > max) {
        max = arr[index]
    } 
}
console.log(max);

// let largest = Math.max(...arr)
// let smallest = Math.min(...arr)
// console.log(smallest);
// console.log(largest);


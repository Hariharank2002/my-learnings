// find second largest array element

const arr = [23, 45, 78, 188, 49, 76]

// method 1
// arr.sort((a,b) => (b-a))
// console.log(arr[1]);


// method 2 
let max1 = -1
let max2 = -1

for (let i=1; i<arr.length; i++) {
    if (arr[i] > max1) {
        max1 = arr[i]
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max2 && arr[i] !== max1) {
        max2 = arr[i]
    }    
}
console.log(max2);






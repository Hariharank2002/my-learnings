// // Input: arr[] = [1, 2, 3]
// // Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]

// const n = [1,2,3]
// let subarrays = []

// for (let i = 0; i < n.length; i++) {
//     for (let j = i; j < n.length; j++) {
//        let subarray = n.splice(i, j+1)
//        subarrays.push(subarray)
//     }
// }

// console.log(subarrays);

let array = [1, 2, 3];
let result = [];

for (let i = 0; i < array.length; i++) {
    let temp = []
    for (let j = i; j < array.length; j++) {
        temp.push(array[j])
        result.push([...temp])
    }    
}


console.log(JSON.stringify(result));


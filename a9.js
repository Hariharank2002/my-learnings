// Move all zeroes to end of array

// let array = [0,1,2,0,4]
// let zero = []


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element === 0) {
//          zero.push(element)
//     }
// }

// const zeroremoved = array.filter((item) => item !== 0)
// console.log(zeroremoved);

// zeroremoved.push(...zero)
// console.log(zeroremoved);


// method 2
let array = [0,1,2,0,4]
let position = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
        array[position] = array[i]
        position++    
    }
}

while(position<array.length){
    array[position] = 0
    position++
}

console.log(array);

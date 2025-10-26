// Input: arr[] = [1, 2, 3, 4, 4, 4, 5,]
// Output: [1, 2, 3, 4, 5]  remove duplicate

const array = [1, 2, 2, 3, 4, 4]
let uniqueArr = []

for (let i = 0; i < array.length; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
        uniqueArr.push(array[i])
    }    
}

console.log(uniqueArr);

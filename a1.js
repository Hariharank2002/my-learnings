// print alternative in Array
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), 
// skip the fourth element(40) and print the fifth element(50).

const array = [10, 20, 30, 40]

for (let i = 0; i<array.length; i++){
    if (i % 2 == 0) {
        console.log(array[i]);
    }
}

// array.map((arrayItem) => {
//     if (arrayItem % 2 == 1) {
//         console.log(arrayItem);
//     }
// })

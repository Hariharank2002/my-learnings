// linear search 
const arr = [11, 22, 33, 44, 55]
const x = 22

for (let i = 0; i < arr.length; i++){
    // console.log(i);
    if (arr[i] === x) {
        console.log(arr.indexOf(arr[i]));
    }
}


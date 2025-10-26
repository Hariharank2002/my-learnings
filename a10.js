// Left Rotate by One in an Array

let array = [1,2,3,4,5,6]
const popArr = array.slice(1)
popArr.push(array[0])
console.log(popArr);

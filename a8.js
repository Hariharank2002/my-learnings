// array rotation

const array = [1,2,3,4,5,6]
const rotation = 2
const arrLength = array.length

for (let i = 0; i < rotation; i++) {
    let last = array[arrLength - 1]

    for (let j = arrLength - 1; j > 0; j--) {
        array[j] = array[j - 1]
    }
    array[0] = last
}

console.log(array);


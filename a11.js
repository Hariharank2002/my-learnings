{ /* leader of the array 
16 → right la irukkura values: [17, 4, 3, 5, 2] → 17 is bigger → Not a leader

17 → right: [4, 3, 5, 2] → All less → ✅ Leader

4 → right: [3, 5, 2] → 5 is bigger → ❌ */}

let arr = [16, 17, 4, 3, 5, 2];
let leaders = [];


for (let i = 0; i < arr.length; i++) {
let isLeader = true

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            isLeader = false
            breakage 
        }
    }

    if (isLeader) {
        leaders.push(arr[i])
    }
}

console.log(leaders);

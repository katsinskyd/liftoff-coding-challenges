function addUp(num) {
    let addNum = 0;
    while (num > 0) {
        addNum += num;
        num--;
    }
    return addNum;
}

console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))
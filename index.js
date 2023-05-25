// debugger;
function createSum() {
    let sum = 0;

    function sumResult(num) {
        sum += num;    
        return `sum(${num}) = ${sum}`;
    }
    return sumResult;
}

const sum = createSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
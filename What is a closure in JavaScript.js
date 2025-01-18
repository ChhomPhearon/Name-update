function createCounter() {
    let count = 0;
    return function () {
        console.log('student Name : Chhom Phearon');
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
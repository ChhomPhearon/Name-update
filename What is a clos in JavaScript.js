function createCounter() { 
    let count  = 0;
    return function (){
        console.log('Srudent Name: Chhom Phearon');
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i < 100; i++) {
        let prime = 0;
        for (let ii = 2; ii < 100; ii++) if (i % ii === 0) prime++;
        if (prime < 2) {
            count++;
        }
    }
    return count;
}
const timeBeforeExec = performance.now();
countPrimeNumbers();
const timeAfterExec = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (timeAfterExec - timeBeforeExec) + " milliseconds.");
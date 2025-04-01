// Function that returns a promise resolving with an array after a 3-second delay
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function that filters even numbers after a 1-second delay
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById('output').textContent = evenNumbers.join(", ");
            resolve(evenNumbers);
        }, 1000);
    });
}

// Function that multiplies numbers by 2 after a 2-second delay
function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            document.getElementById('output').textContent = multipliedNumbers.join(", ");
            resolve(multipliedNumbers);
        }, 2000);
    });
}

// Chaining promises to perform the transformations step by step
getNumbers()
    .then(filterEvenNumbers)
    .then(multiplyByTwo)
    .catch(error => console.error("Error:", error));

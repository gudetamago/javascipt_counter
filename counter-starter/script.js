const add = (step) => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;

    number = parseInt(number) + step;
	numberElement.innerText = number;
};


const addCustom = () => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    let stepNumber = document.getElementById("input-number"); // This variable can sit outside the function too
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;

    number = parseInt(number) + parseInt(stepNumber.value);
	numberElement.innerText = number;
};


const subtract = (step) => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;

    number = parseInt(number) - step;
	numberElement.innerText = number;
};

const reset = () => {
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
};
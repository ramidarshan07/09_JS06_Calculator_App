const inputField = document.querySelector("#input")
const resultField = document.querySelector("#result")

function appendValue(value) {
    if (inputField.textContent === "Enter Value") {
        inputField.textContent = value
    } else {
        inputField.textContent += value
    }
}

function calulateResult() {
    try {
        resultField.textContent = "Result: " + eval(inputField.textContent)
        resultField.style.color = "Green"
    } catch (e) {
        resultField.textContent = "Error"
        resultField.style.color = "red";
    }
}

function clearDisplay() {
    resultField.textContent = "Result: "
    resultField.style.color = "black";
    inputField.textContent = "Enter Value"
}

document.addEventListener("keydown", function (e) {
    if (/[\d+\-*/.]/.test(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calulateResult();
    } else if (e.key.toLowerCase() === "c") {
        clearDisplay();
    }
});
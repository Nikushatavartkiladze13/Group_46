let result = document.getElementById("result")

function calculate() {
    result.value = eval(result.value)
}

function display(symbols) {
    result.value += symbols
}

function cButton() {
    result.value = ""
}


function deleteValue() {
    if (result.value.length >= 1 && result.value !== "Empty") {
        result.value = result.value.slice(0, -1)
    } else {
        result.value = "Empty"
    }
}


function EvenOdd() {
    if (result.value % 2 == 0) {
        result.value = "Even"
    } else {
        result.value = "Odd"
    }
}

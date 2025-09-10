const result = document.getElementById("result")

const display = (btnValue) => {
    result.value += btnValue
}

const clearDisplay = () => {
    result.value = ""
}

const calculate = () => {
    result.value = eval(result.value)
}

const evenOdd = () => {
    const validSymbols = ["0","1","2","3","4","5","6","7","8","9"]

    for(let i = 0; i < result.value.length; i++){
        console.log(result.value[i])
        if(!(result.value[i] in validSymbols)){
            result.value = "Please only enter Numbers!"
            return;
        }
    }

    if(result.value % 2 == 0){
        result.value = "Even"
    }else {
        result.value = "Odd"
    }
}
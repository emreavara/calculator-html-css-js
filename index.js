
let result = "";
let temp = { tempResult : "", tempOperator:""};
function onClickNumber(number){
    result = `${result}${number}`;
    setResult(result);
}

function setResult(result){
    document.getElementById("result").innerHTML = result;
}

function onClickOperation(operator){
    switch(operator){
        case "+":
            temp.tempResult = result;
            temp.tempOperator = "+";
            result = ""
            break;
        case "-":
            temp.tempResult = result;
            temp.tempOperator = "-";
            result = ""
            break;
        case "/":
            temp.tempResult = result;
            temp.tempOperator = "/";
            result = ""
            break;
        case "*":
            temp.tempResult = result;
            temp.tempOperator = "*";
            result = ""
            break;
        case "=":
            result = calculateResult(temp.tempOperator, Number(temp.tempResult), Number(result))
            setResult(result);
            break;
    }
}

function calculateResult(operator, num1, num2){
    switch(operator){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "*":
            return num1 * num2;
            break;
        default:
            return 0;
            break;
    }
}
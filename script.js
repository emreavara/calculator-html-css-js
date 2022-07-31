
let result = "";
let temp = { tempResult : "", tempOperator:""};

function reset(){
    temp.tempOperator = "";
    temp.tempResult   = "";
    result = "0";
    setResult(result);
}

function onClickNumber(number){
    result = `${result}${number}`;
    setResult(Number(result));
}

function setResult(result){    
    document.getElementById("result").innerHTML = result.toFixed(2);
}

function onClickOperation(operator){
    if(operator === "="){
        result = calculateResult(temp.tempOperator, Number(temp.tempResult), Number(result))
        setResult(result);
    } else{
        if(temp.tempResult !== "" && result !== ""){
            result = calculateResult(temp.tempOperator, Number(temp.tempResult), Number(result));
            setResult(result);
        }
        if(result !== ""){
            temp.tempResult = result;
            temp.tempOperator = operator;
            result = ""
        }
        temp.tempOperator = operator;
    }
    console.log(`temp operation : ${temp.tempOperator} temp result : ${temp.tempResult} result : ${result}`)
}

function calculateResult(operator, num1, num2){
    temp.tempOperator = "";
    temp.tempResult   = "";
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
            return result;
            break;
    }
}
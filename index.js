
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
    if(operator === "="){
        result = calculateResult(temp.tempOperator, Number(temp.tempResult), Number(result))
        setResult(result);
    } else{
        if(temp.tempResult !== ""){
            result = calculateResult(temp.tempOperator, Number(temp.tempResult), Number(result));
            setResult(result);
        } 
        temp.tempResult = result;
        temp.tempOperator = operator;
        result = ""
        
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
function calculatorHandler(key){
    const firstNumber = document.querySelector("#firstNumber").value;
    const secondNumber = document.querySelector("#secondNumber").value;
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        document.getElementById("smalltext").innerHTML= 'pleaser enter a number';
        return;
    }
    if (key === 'multiply'){
        document.getElementById('result').innerHTML= firstNumber * secondNumber;
    }
    else if(key === 'add'){
        document.getElementById('result').innerHTML=firstNumber + secondNumber;
    }
    else if (key === 'subtract'){
        document.getElementById('result').innerHTML=firstNumber - secondNumber;
    }
    else if (key === 'divide'){
        document.getElementById('result').innerHTML=firstNumber / secondNumber;

    }
    else if (key === 'modulo'){
        document.getElementById('result').innerHTML=firstNumber % secondNumber;

    }
    else if (key === 'percent'){
        document.getElementById('result').innerHTML=(firstNumber / secondNumber)*100;
    }
    else{
        document.getElementById('smalltext').innerHTML= 'please select an operator'
    }
}
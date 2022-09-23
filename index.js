function calculatorHandler(key) {
  const firstNumber = document.querySelector("#firstNumber").value;
  const secondNumber = document.querySelector("#secondNumber").value;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("smalltext").innerHTML = "pleaser enter a number";
    return;
  }
  if (key === "add") {
    document.getElementById("result").innerHTML = firstNumber + secondNumber;
  } else if (key === "multiply") {
    document.getElementById("result").innerHTML = firstNumber * secondNumber;
  } else if (key === "subtract") {
    document.getElementById("result").innerHTML = firstNumber - secondNumber;
  } else if (key === "divide") {
    document.getElementById("result").innerHTML = firstNumber / secondNumber;
  } else if (key === "modulo") {
    document.getElementById("result").innerHTML = firstNumber % secondNumber;
  } else if (key === "percent") {
    document.getElementById("result").innerHTML =
      (firstNumber / secondNumber) * 100;
  } else {
    document.getElementById("smalltext").innerHTML =
      "please select an operator";
  }
}

// MARKET LIST HANDLERS
let myMarketList = ["rice",'beans'];
function arrayHandler() {
  document.getElementById("olList").innerHTML = "";
  for (let i = 0; i < myMarketList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = myMarketList[i];
    document.getElementById("olList").appendChild(li);
  }
}

function addmarketListHandler() {
    const marketItem = document.getElementById("marketList").value;
    myMarketList.push(marketItem);
    arrayHandler();
    document.getElementById("marketList").value="";

  }
  function removemarketListHandler() {
    myMarketList.pop();
    arrayHandler();

  }
  function shiftmarketListHandler() {
    myMarketList.shift();
    arrayHandler();

  }
  function unshiftmarketListHandler() {
    const marketItem = document.getElementById("marketList").value;
    myMarketList.unshift(marketItem );
    arrayHandler();

  }
 

  // FETCHING API

  const resp = async () =>{
    const response = await fetch("https://reqres.in/api/unknown/",{method:'GET'})
    const data = await response.json();
    console.log(data,'Response');
    const colorList= data.data[0]

  }

  // fetch('https://reqres.in/api/unknown/',{method:"GET"}).then(data =>console.log(data))
  

  //console.log(myMarketList, "ARRAY");


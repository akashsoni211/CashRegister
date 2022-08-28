var billAmount = document.querySelector('#billAmount');
var cashGiven = document.querySelector('#cashGiven');
var btnsubmit = document.querySelector("#submit");
var outputMessage = document.querySelector("#outputMessage");
var notes = ["2000","500","100","20","10","5","1"];


function printChange(change){
    notes.map(function (item){
        if (change/item > 0){
            document.getElementById(item).innerHTML = Math.floor(change/item);
            change = change%item;
        }
    })
}


function submitbtnHandler(){
    if(billAmount.value>0){
        outputMessage.style.display = "none";
        if(+cashGiven.value >= +billAmount.value){
            var change = cashGiven.value - billAmount.value;
            printChange(change);  
        }
        else{
            outputMessage.style.display = "block";
            var diff = billAmount.value - cashGiven.value;
            outputMessage.innerHTML = "Give me more " + diff + " Rupees";
        }
    }
    else{
        outputMessage.style.display = "block";
        outputMessage.innerHTML = "Bill Amount Should Be greater than 0";
    }
}

btnsubmit.addEventListener("click", submitbtnHandler)
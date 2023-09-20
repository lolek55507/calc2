const inputsArea = document.getElementById("numbersArea");
let numberFirst = [];
let numberSec = [];
let wheatherFirstOrSec = 0;
let w;
function changeTheNumber(i) {
    if (wheatherFirstOrSec == 0 && numberFirst.length < 16) {
        numberFirst.push(i);
        inputsArea.innerHTML = numberFirst.join("");
        console.log(numberFirst);
    } else if (wheatherFirstOrSec == 1 && numberSec.length < 14) {
        numberSec.push(i);
        inputsArea.innerHTML = numberSec;
        console.log(numberSec);
    }
}   
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case "1":
        changeTheNumber(parseInt(e.key));
        break;
        case "2":
        changeTheNumber(parseInt(e.key));
        break;
        case "3":
        changeTheNumber(parseInt(e.key));
        break;
        case "4":
        changeTheNumber(parseInt(e.key));
        break;
        case "5":
        changeTheNumber(parseInt(e.key));
        break;
        case "6":
        changeTheNumber(parseInt(e.key));
        break;
        case "7":
        changeTheNumber(parseInt(e.key));
        break;
        case "8":
        changeTheNumber(parseInt(e.key));
        break;
        case "9":
        changeTheNumber(parseInt(e.key));
        break;
        case "0":
        changeTheNumber(parseInt(e.key));
        break;
    }
});

function clearEverything() {
    inputsArea.innerHTML = "";
    numberFirst = [];
    numberSec = [];
    console.log(numberFirst);
    console.log(numberSec);
}



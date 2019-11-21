
function verifyCard() {
    let cardNumber = Number(document.getElementById("cardNumber").value);
    
    let ourDiv = document.getElementById("verification");
    ourDiv.innerHTML = theInput;
}

const theInput = document.getElementById("cardNumber");
theInput.addEventListener("input", verifyCard());




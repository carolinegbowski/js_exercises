 

function makeArray() {
    let myArray = [];
    for (i=1; i<51; i++) {
        myArray.push(i);
    }
    for (const index in myArray) {
        if (myArray[index] % 5 === 0 && myArray[index] % 3 === 0) {
            myArray[index] = "FizzBuzz";
        }
        else if (myArray[index] % 3 === 0) {
            myArray[index] = "Fizz";
        }
        else if (myArray[index] % 5 === 0) {
            myArray[index] = "Buzz";
        }
    }
    let ourDiv = document.getElementById("myArray");
    ourDiv.innerHTML = myArray
}

// let ourDiv = document.getElementById("myArray");
// myArray = makeArray()
// ourDiv.innerHTML = myArray

// for (const index in myArray) {
//     if (myArray[index] % 5 === 0 && myArray[index] % 3 === 0) {
//         myArray[index] = "FizzBuzz";
//     }
//     else if (myArray[index] % 3 === 0) {
//         myArray[index] = "Fizz";
//     }
//     else if (myArray[index] % 5 === 0) {
//         myArray[index] = "Buzz";
//     }
// }

// for (const index in myArray) {
//     console.log(myArray[index]);
// }
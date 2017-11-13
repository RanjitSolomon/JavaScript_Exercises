function guessNumber() {
    let guessNumber = parseInt((Math.random(1,10)) * 10);
    let inputValue = 0;
    //inputValue = prompt("Please enter a number between 1 to 10");

    while(guessNumber != inputValue) {
        inputValue = prompt("Please enter a number between 1 to 10");
        console.log(guessNumber);
        console.log(inputValue);
    }

    document.getElementById("displayAnswer").innerHTML = "Correct, you guessed the number. the number is  " + guessNumber.toString();
}

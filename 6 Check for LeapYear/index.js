function calcLeapYear() {
    let yearvar = Number(document.getElementById("year").value);

    if((yearvar % 4 === 0) && ((yearvar % 100 !== 0) || (yearvar % 400 === 0)) ) {
        document.getElementById("displayAnswer").innerHTML = "Leap Year";
    } else {
        document.getElementById("displayAnswer").innerHTML = "Not Leap Year";
    }
}

// 
// year = window.prompt("Input a Year : ");
// x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// alert(x);

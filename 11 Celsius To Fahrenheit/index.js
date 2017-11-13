function calcCtoF() {
    // c/5 = (f-32)/9
    let c = Number(document.getElementById("input1").value);
    document.getElementById("displayAnswer1").innerHTML =  ((9*c/5)+32).toString();
}

function calcFtoC(){
    let f = Number(document.getElementById("input2").value);
    document.getElementById("displayAnswer2").innerHTML =  (((f-32)/9)*5).toString();
}

function calcAdd() {
    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    console.log(a);
    console.log(b);
    document.getElementById("displayAnswer").innerHTML = "The result is " + (a+b).toString();
}

function calcDiff() {
    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    document.getElementById("displayAnswer").innerHTML = "The result is " + (a-b).toString();
}
function calcMult() {
    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    document.getElementById("displayAnswer").innerHTML = "The result is " + (a*b).toString();
}
function calcDivide() {
    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    document.getElementById("displayAnswer").innerHTML = "The result is " + (a/b).toString();
}

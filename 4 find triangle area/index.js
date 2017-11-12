function calcTriangleArea() {
    let a = Number(document.getElementById("side1").value);
    let b = Number(document.getElementById("side2").value);
    let c = Number(document.getElementById("side3").value);

    let s = (a+b+c)/2;
    let z = (s)*(s-a)*(s-b)*(s-c);
    let answer = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    //let answer = parseInt(a)+parseInt(b)+parseInt(c);

    document.getElementById("displayAnswer").innerHTML = answer;
}

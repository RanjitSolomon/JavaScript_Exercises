
var changeThisString = 'w3resource';
function rotateString() {
    var x = 1;
    setInterval(changeString, 1000);
}
function changeString(){
    let lastChar = changeThisString[changeThisString.length -1];
    changeThisString = changeThisString.substring(0, changeThisString.length-1);
    changeThisString =`${lastChar}${changeThisString}`;
    console.log(changeThisString);
    document.getElementById("displayAnswer").innerHTML = changeThisString;
}
rotateString();

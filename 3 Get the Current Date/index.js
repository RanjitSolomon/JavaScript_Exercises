function displayCurrentDate() {
    let today = new Date();
    document.getElementById("displayDate1").innerHTML =  `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
    // Note: getMonth starts from 0, you need to add one to get current month
    // Note: getFullYear, getYear gives 117
    document.getElementById("displayDate2").innerHTML = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
    document.getElementById("displayDate3").innerHTML = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    document.getElementById("displayDate4").innerHTML = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
}

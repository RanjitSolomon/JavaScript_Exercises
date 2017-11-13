function getNumberOfDaysToChristmas() {
    let firstDate = new Date();
    let secondDate = new Date("2017/12/25");
    let answer = Math.round((secondDate - firstDate)/(1000*60*60*24));

    document.getElementById("displayAnswer").innerHTML = "No of days to christmas is " + answer.toString();
}

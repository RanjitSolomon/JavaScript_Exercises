function dayOfFirstJanuary() {
    let startYearDate = new Date("2014/01/01");
    let startYear = startYearDate.getFullYear();
    let answer = "";

    for (i = 2014; i < 2051; i++){
        if (startYearDate.getDay() === 0) {
            console.log(startYearDate);
            answer = answer + startYearDate + "<br>"
        }
        startYearDate.setFullYear(startYearDate.getFullYear() + 1)
    }
    document.getElementById("displayAnswer").innerHTML = answer;
    //
    // for (var year = 2014; year <= 2050; year++)
    // {
    //   var d = new Date(year, 0, 1);
    //   if ( d.getDay() === 0 )
    //     console.log("1st January is being a Sunday  "+year);
    // }
}
dayOfFirstJanuary();

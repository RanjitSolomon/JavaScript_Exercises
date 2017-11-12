function displayCurrentDayAndTime(){
        let today = new Date();
        let day = today.getDay();
        let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("displayCurrentDay").innerHTML = "Today is : " + dayList[day]+ ".";

        document.getElementById("displayCurrentTime").innerHTML = `Current Time is : ${today.getHours() >= 12 ? (today.getHours()-12):(today.getHours())} ${today.getHours() >=12 ? "PM":"AM"} : ${today.getMinutes()} : ${today.getSeconds()}`;
}
function displayCurrentWindow(){
    window.print();
}

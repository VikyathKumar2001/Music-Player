function displaytime() {
    var date=new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();

    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("second").innerHTML=second;
}
setInterval(displaytime, 10)
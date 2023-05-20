function getTime() {
    // make new date object
    let d = new Date();
    // get the time
    d=d.toLocaleTimeString();
    // write new time to empty div "demo"
    document.getElementById("demo").innerHTML = d;
}

// set Interval to run every second
setInterval(getTime, 1000);
    


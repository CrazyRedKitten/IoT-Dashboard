function updateClock() {
    let now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    if (seconds < 10){
        seconds = '0' + now.getSeconds()
    }
    if (minutes < 10){
        minutes = '0' + now.getMinutes()
    }
    if (hours < 10){
        hours = '0' + now.getHours()
    }
    if (day < 10){
        day = '0' + now.getDate()
    }
    if (month < 10){
        month = '0' + (now.getMonth() + 1)
    }

    let time = hours + ':' + minutes + ':' + seconds;
    let date = day + '.' + month  + '.' + year;

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = [time].join('');
    document.getElementById('date').innerHTML = [date].join('');
    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.clock').innerHTML =
        h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

const button = document.querySelector('button');
button.addEventListener('click', function (e) {
    e.preventDefault();
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const fullName = `${firstName} ${lastName}`
    const today = new Date();
    const hour = today.getHours();
    console.log(fullName);
    console.log(typeof time);
    console.log(hour);
}) 

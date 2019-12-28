// Set the date we're counting down to
var countDownDate = new Date("Aug 5, 2020 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // If the count down is finished, write some text
    if (distance < 0) {
        
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Watch It Ouside Boston has begun!";

    } else {

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        if (days > 0) {
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        } else if (hours > 0) {
            document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        } else if (minutes > 0) {
            document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";
        } else {
            document.getElementById("countdown").innerHTML = seconds + "s ";
        }
    }

}, 1000);
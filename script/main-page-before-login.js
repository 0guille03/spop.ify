var countDownDate1 = new Date("Jan 27, 2023 06:00:00").getTime();
var countDownDate2 = new Date("Nov 11, 2022 06:00:00").getTime();

// Update the count down every 1 second
var x1 = setInterval(myCountdown, 1000, countDownDate1, "countdown1");
var x2 = setInterval(myCountdown, 1000, countDownDate2, "countdown2");

function myCountdown(countDownDate, id){
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById(id).innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        document.getElementById(id).innerHTML = "EXPIRED";
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkUser() {
    let cookie_text = getCookie("username");
    if (cookie_text != ""){
        window.location.href = "main-page-after-login.html";
    }
}
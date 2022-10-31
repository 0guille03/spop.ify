/*function delCookie(cname) { 
    var date = new Date();
    date.setTime(date.getTime()+(-1*24*60*60*1000));
    document.cookie = cname + "=" + cookieValue + "; expires=" + date.toGMTString();
}*/

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function validateLogIn() {
    let output= "";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let cookie_text = getCookie(username);
    if (cookie_text == ""){
        setCookie("username", username, 30);
        output = "No user with that username";
    }else{
        var user_cookie = JSON.parse(cookie_text);
        if (user_cookie[0] == password){
            setCookie("username", username, 30);
            window.location.href = "main-page-after-login.html";
        }else{
            output = "Pasword Incorrect";}
    }
    document.getElementById("demo").innerHTML = output;

}

function checkUser() {
    let cookie_text = getCookie("username");
    if (cookie_text != ""){
        window.location.href = "main-page-after-login.html";
    }
}

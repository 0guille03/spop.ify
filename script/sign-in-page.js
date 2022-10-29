function checkPassword () {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("password").value;
    let text = "holi";

    var re = new RegExp("^([a-z0-9]{5,})$");
    if (re.test(x)) {
        text = "Input not valid";
    } else {
        text = "Input OK";
        return false;
    }
    document.getElementById("demo").innerHTML = x;
    return false;  
}


function createCookie() {
    if (document.checkPassword() == true){
      // Get the value of the input field with id="numb"
      let x = document.getElementById("name").value;
      setCookie("cookie_name", x, 30)
    }
}


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
  
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
}
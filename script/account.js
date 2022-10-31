printCookieToAccount();

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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

function printCookieToAccount(index){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  document.getElementById("username").defaultValue  = username;
  document.getElementById("password").defaultValue = user_cookie[0];
  document.getElementById("name").defaultValue  = user_cookie[1];
  document.getElementById("surname").defaultValue  =  user_cookie[2];
  document.getElementById("email").defaultValue  = user_cookie[3];
  document.getElementById("dob").defaultValue  = user_cookie[4];
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.profile_pic')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
    }
  }
}
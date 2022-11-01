function checkReg (string, re) {
    // Get the value of the input field with id="numb"
    var re = new RegExp(re);
    if (re.test(string)) {
        return true;
    }
    return false;
}

function checkForm() {
      let output = "";
      // Check name 
      let name = document.getElementById("name").value;
      if (!(checkReg(name, "^([A-Za-z][a-z]+)$"))){
          output = "Incorrect name format";
          return output;
      }
      // Check surname 
      let surname = document.getElementById("surname").value;
      if (!(checkReg(surname, "^([A-Za-z][a-z]+)$"))){
          output = "Incorrect surname format";
          return output;
      }
      // Check email 
      let email = document.getElementById("email").value;
      if (!(checkReg(email, "^([A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{1,3})$"))){
          output = "Incorrect email format";
          return output;
      }
      // Check dob 
      let dob = document.getElementById("dob").value;
      if (dob == ""){
          output = "Date of birth should not be empty";
          return output;
      }
      // Check username 
      let username = document.getElementById("username").value;
      if (!(checkReg(username, "^([A-Za-z0-9]+)$"))){
          output = "Incorrect username format";
          return output;
      }
      // Check username 
      let password = document.getElementById("password").value;
      if (!(checkReg(password, "^([A-Za-z0-9]{1,8})$"))){
          output = "Incorrect password format";
          return output;
      }
      // Check accepted terms 
      let checkbox = document.getElementById("checkbox").checked;
      if (!checkbox){
          output = "You have to accept the Terms of use";
          return output;
      }
      return output;
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

function validateForm() {
    let output = checkForm();
    if (output == ""){
        // Get inputed values
        let username = document.getElementById("username").value;
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let dob = document.getElementById("dob").value;
        let pict = document.getElementById("pict").value;
        let password = document.getElementById("password").value;
        var list = [password, name, surname, email, dob, pict];
        
        let cookie_text = getCookie(username);

        if (cookie_text == ""){
            setCookie(username, JSON.stringify(list), 30);
            setCookie("username", username, 30);
            window.location.href = "main-page-after-login.html";
        }else{
            output = "The user already exixts";
            //var user_cookie = JSON.parse();
        }
    }
    document.getElementById("demo").innerHTML = output;
}

function defaultValues(){
    document.getElementById("name").value  = "";
    document.getElementById("surname").value  = "";
    document.getElementById("email").value  = "";
    document.getElementById("dob").value  = "";
    document.getElementById("pict").value  = "";
    document.getElementById("username").value  = "";
    document.getElementById("password").value  = "";
    document.getElementById("checkbox").checked   = false;
}
  
function checkUser() {
    defaultValues()
    let cookie_text = getCookie("username");
    if (cookie_text != ""){
        window.location.href = "main-page-after-login.html";
    }
}
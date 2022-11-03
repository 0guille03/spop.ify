
function loadUserInfo(){
    let username = getCookie("username");
    let cookie_text = getCookie(username);
    var user_cookie = JSON.parse(cookie_text);
    var image = document.getElementById('profile'); 
    var prof_image = document.getElementById('profile_picture'); 
    var user = document.getElementById('username');
    user.innerHTML = username;
    if (user_cookie[5]!=""){
      image.src=user_cookie[5];
      prof_image.src=user_cookie[5];
    }
}


function redirectArtist(){
    window.location.href = "artist.html";
}
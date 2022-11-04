var likes = {
  "mpf": "like1",
  "atw": "like2",
  "tl": "like3",
  "pr": "like4",
  "e": "like5",
  "sti": "like6",
  "tnhmb": "like7",
  "imb": "like8",
  "305": "like9",
  "wyg": "like10",
  "str": "like11",
  "wmyb": "like12",
  "twiw": "like13",
  "g4u": "like14",
  "sh": "like15",
};


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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

function addLiked(song){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  user_cookie[6][0].push(song);
  deleteCookie(username);
  setCookie(username, JSON.stringify(user_cookie), 30);
}

function delLiked(song){

  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  index = user_cookie[6][0].indexOf(song);
  if (index != -1){
    user_cookie[6][0].splice(index, 1);
    deleteCookie(username);
    setCookie(username, JSON.stringify(user_cookie), 30);
  }
}


$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable .grid-song").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    $('#like1').click(function(){
      addLiked("mpf");
      $('#like1').css("display", "none");
      $('#filled_like1').css("display", "inline-flex");
    });
    $('#filled_like1').click(function(){
      delLiked("mpf");
      $('#like1').css("display", "inline-flex");
      $('#filled_like1').css("display", "none");
    });

    $('#like2').click(function(){
      addLiked("atw");
      $('#like2').css("display", "none");
      $('#filled_like2').css("display", "inline-flex");
    });
    $('#filled_like2').click(function(){
      delLiked("atw");
        $('#like2').css("display", "inline-flex");
        $('#filled_like2').css("display", "none");
    });

    $('#like3').click(function(){
      addLiked("tl");
      $('#like3').css("display", "none");
      $('#filled_like3').css("display", "inline-flex");
    });
    $('#filled_like3').click(function(){
        delLiked("tl");
        $('#like3').css("display", "inline-flex");
        $('#filled_like3').css("display", "none");
    });

    $('#like4').click(function(){
      addLiked("pr");
      $('#like4').css("display", "none");
      $('#filled_like4').css("display", "inline-flex");
    });
    $('#filled_like4').click(function(){
        delLiked("pr");
        $('#like4').css("display", "inline-flex");
        $('#filled_like4').css("display", "none");
    });

    $('#like5').click(function(){
      addLiked("e");
      $('#like5').css("display", "none");
      $('#filled_like5').css("display", "inline-flex");
    });
    $('#filled_like5').click(function(){
        delLiked("e");
        $('#like5').css("display", "inline-flex");
        $('#filled_like5').css("display", "none");
    });

    $('#like6').click(function(){
      addLiked("sti");
      $('#like6').css("display", "none");
      $('#filled_like6').css("display", "inline-flex");
    });
    $('#filled_like6').click(function(){
      delLiked("sti");
        $('#like6').css("display", "inline-flex");
        $('#filled_like6').css("display", "none");
    });

    $('#like7').click(function(){
      addLiked("tnhmb");
      $('#like7').css("display", "none");
      $('#filled_like7').css("display", "inline-flex");
    });
    $('#filled_like7').click(function(){
      delLiked("tnhmb");
        $('#like7').css("display", "inline-flex");
        $('#filled_like7').css("display", "none");
    });

    $('#like8').click(function(){
      addLiked("imb");
      $('#like8').css("display", "none");
      $('#filled_like8').css("display", "inline-flex");
    });
    $('#filled_like8').click(function(){
      delLiked("imb");
        $('#like8').css("display", "inline-flex");
        $('#filled_like8').css("display", "none");
    });

    $('#like9').click(function(){
      addLiked("305");
      $('#like9').css("display", "none");
      $('#filled_like9').css("display", "inline-flex");
    });
    $('#filled_like9').click(function(){
      delLiked("305");
        $('#like9').css("display", "inline-flex");
        $('#filled_like9').css("display", "none");
    });

    $('#like10').click(function(){
      addLiked("wyg");
      $('#like10').css("display", "none");
      $('#filled_like10').css("display", "inline-flex");
    });
    $('#filled_like10').click(function(){
      delLiked("wyg");
        $('#like10').css("display", "inline-flex");
        $('#filled_like10').css("display", "none");
    });

    $('#like11').click(function(){
      addLiked("str");
      $('#like11').css("display", "none");
      $('#filled_like11').css("display", "inline-flex");
    });
    $('#filled_like11').click(function(){
      delLiked("str");
        $('#like11').css("display", "inline-flex");
        $('#filled_like11').css("display", "none");
    });

    $('#like12').click(function(){
      addLiked("wmyb");
      $('#like12').css("display", "none");
      $('#filled_like12').css("display", "inline-flex");
    });
    $('#filled_like12').click(function(){
      delLiked("wmyb");
        $('#like12').css("display", "inline-flex");
        $('#filled_like12').css("display", "none");
    });

    $('#like13').click(function(){
      addLiked("twiw");
      $('#like13').css("display", "none");
      $('#filled_like13').css("display", "inline-flex");
    });
    $('#filled_like13').click(function(){
      delLiked("twiw");
        $('#like13').css("display", "inline-flex");
        $('#filled_like13').css("display", "none");
    });

    $('#like14').click(function(){
      addLiked("g4u");
      $('#like14').css("display", "none");
      $('#filled_like14').css("display", "inline-flex");
    });
    $('#filled_like14').click(function(){
      delLiked("g4u");
        $('#like14').css("display", "inline-flex");
        $('#filled_like14').css("display", "none");
    });

    $('#like15').click(function(){
      addLiked("sh");
      $('#like15').css("display", "none");
      $('#filled_like15').css("display", "inline-flex");
    });
    $('#filled_like15').click(function(){
      delLiked("sh");
        $('#like15').css("display", "inline-flex");
        $('#filled_like15').css("display", "none");
    });
});  


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

function deleteCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 13 Dec 1989 00:00:01 GMT;';
}


$(function() {
  $('audio').audioPlayer();
});

function changeSong(audioFile){
  document.getElementById("audio").setAttribute('src', audioFile);
  audio.play(); //call this to play the song right away
}

function loadProfilePic(){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  var image = document.getElementById('profile'); 
  if (user_cookie[5]!=""){
    image.src=user_cookie[5];
  }
}

function loadLikes(){
  loadProfilePic()
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  for (let i = 1; i < user_cookie[6][0].length; i++) {
    $('#'+ likes[user_cookie[6][0][i]]).css("display", "none");
    $('#filled_'+ likes[user_cookie[6][0][i]]).css("display", "inline-flex");
  }
}

function goHome(){
  window.location.href = "main-page-after-login.html";
}

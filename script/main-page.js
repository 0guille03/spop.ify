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

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable .grid-song").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    $('#like1').click(function(){
      $('#like1').css("display", "none");
      $('#filled_like1').css("display", "inline-flex");
    });
    $('#filled_like1').click(function(){
        $('#like1').css("display", "inline-flex");
        $('#filled_like1').css("display", "none");
    });

    $('#like2').click(function(){
      $('#like2').css("display", "none");
      $('#filled_like2').css("display", "inline-flex");
    });
    $('#filled_like2').click(function(){
        $('#like2').css("display", "inline-flex");
        $('#filled_like2').css("display", "none");
    });

    $('#like3').click(function(){
      $('#like3').css("display", "none");
      $('#filled_like3').css("display", "inline-flex");
    });
    $('#filled_like3').click(function(){
        $('#like3').css("display", "inline-flex");
        $('#filled_like3').css("display", "none");
    });

    $('#like4').click(function(){
      $('#like4').css("display", "none");
      $('#filled_like4').css("display", "inline-flex");
    });
    $('#filled_like4').click(function(){
        $('#like4').css("display", "inline-flex");
        $('#filled_like4').css("display", "none");
    });

    $('#like5').click(function(){
      $('#like5').css("display", "none");
      $('#filled_like5').css("display", "inline-flex");
    });
    $('#filled_like5').click(function(){
        $('#like5').css("display", "inline-flex");
        $('#filled_like5').css("display", "none");
    });

    $('#like6').click(function(){
      $('#like6').css("display", "none");
      $('#filled_like6').css("display", "inline-flex");
    });
    $('#filled_like6').click(function(){
        $('#like6').css("display", "inline-flex");
        $('#filled_like6').css("display", "none");
    });

    $('#like7').click(function(){
      $('#like7').css("display", "none");
      $('#filled_like7').css("display", "inline-flex");
    });
    $('#filled_like7').click(function(){
        $('#like7').css("display", "inline-flex");
        $('#filled_like7').css("display", "none");
    });

    $('#like8').click(function(){
      $('#like8').css("display", "none");
      $('#filled_like8').css("display", "inline-flex");
    });
    $('#filled_like8').click(function(){
        $('#like8').css("display", "inline-flex");
        $('#filled_like8').css("display", "none");
    });

    $('#like9').click(function(){
      $('#like9').css("display", "none");
      $('#filled_like9').css("display", "inline-flex");
    });
    $('#filled_like9').click(function(){
        $('#like9').css("display", "inline-flex");
        $('#filled_like9').css("display", "none");
    });

    $('#like10').click(function(){
      $('#like10').css("display", "none");
      $('#filled_like10').css("display", "inline-flex");
    });
    $('#filled_like10').click(function(){
        $('#like10').css("display", "inline-flex");
        $('#filled_like10').css("display", "none");
    });

    $('#like11').click(function(){
      $('#like11').css("display", "none");
      $('#filled_like11').css("display", "inline-flex");
    });
    $('#filled_like11').click(function(){
        $('#like11').css("display", "inline-flex");
        $('#filled_like11').css("display", "none");
    });

    $('#like12').click(function(){
      $('#like12').css("display", "none");
      $('#filled_like12').css("display", "inline-flex");
    });
    $('#filled_like12').click(function(){
        $('#like12').css("display", "inline-flex");
        $('#filled_like12').css("display", "none");
    });

    $('#like13').click(function(){
      $('#like13').css("display", "none");
      $('#filled_like13').css("display", "inline-flex");
    });
    $('#filled_like13').click(function(){
        $('#like13').css("display", "inline-flex");
        $('#filled_like13').css("display", "none");
    });

    $('#like14').click(function(){
      $('#like14').css("display", "none");
      $('#filled_like14').css("display", "inline-flex");
    });
    $('#filled_like14').click(function(){
        $('#like14').css("display", "inline-flex");
        $('#filled_like14').css("display", "none");
    });

    $('#like15').click(function(){
      $('#like15').css("display", "none");
      $('#filled_like15').css("display", "inline-flex");
    });
    $('#filled_like15').click(function(){
        $('#like15').css("display", "inline-flex");
        $('#filled_like15').css("display", "none");
    });
  });  
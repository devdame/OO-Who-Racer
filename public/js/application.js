$(document).ready(function() {
  $(document).on('keyup', function(event) {
    var strip1 = $('#player1_strip')
    var strip2 = $('#player2_strip')

    var player1 = strip1.find('.active')
    var player2 = strip2.find('.active')

    if(event.keyCode==81) {
      $(player1).removeClass("active").next().addClass("active");
      if(player1.next().hasClass("end")) {
        $(document).unbind('keyup');
        alert("Placeholder 1 is victorious!");
    };
    };
    if(event.keyCode==80) {
      $(player2).removeClass("active").next().addClass("active");
      if(player2.next().hasClass("end")) {
        $(document).unbind('keyup');
        alert("Placeholder 2 is victorious!");
    };
    };
  });
});

function raceStop() {

}



strip1.removeClass("active").find('.start').addClass("active");

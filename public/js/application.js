$(document).ready(function() {
  resetRace();
  $('body').on("click", "#reset_button", function(e) {
    var startTime = new Date().getTime();
    resetRace();
    $('#reset_button').text('RESET');


  $(document).on('keyup', function(event) {
    var strip1 = $('#player1_strip')
    var strip2 = $('#player2_strip')

    var player1 = strip1.find('.active')
    var player2 = strip2.find('.active')

      if(event.keyCode==81) {
        $(player1).removeClass("active").next().addClass("active");
        if(player1.next().hasClass("end")) {
          $(player1).next().css("background-image", "url('../tardis.png')");
          raceStop();
          $("#victory1").css("display", "block");
        };
      };
      if(event.keyCode==80) {
        $(player2).removeClass("active").next().addClass("active");
        if(player2.next().hasClass("end")) {
          var endTime = new Date().getTime();
          var playTime = endTime - startTime;
          var finalTime = playTime/1000;
          $('#result').css("background", "blue");
          $('#result').text("You finished in " + finalTime + " seconds");
          $(player2).next().css("background-image", "url('../tardis.png')");
          $(player2).next().addClass("backlit");
          $(strip2).find(".end").css("box-shadow", "0 0 50px gold,0 0 150px gold");
          raceStop();
          $("#victory2").css("display", "block");
        };
      };
    });
  });
});


// race = $(document).on('keyup', function(event) {
//     var strip1 = $('#player1_strip')
//     var strip2 = $('#player2_strip')

//     var player1 = strip1.find('.active')
//     var player2 = strip2.find('.active')

//       if(event.keyCode==81) {
//         $(player1).removeClass("active").next().addClass("active");
//         if(player1.next().hasClass("end")) {
//           raceStop();
//           $("#victory1").css("display", "block");
//         };
//       };
//       if(event.keyCode==80) {
//         $(player2).removeClass("active").next().addClass("active");
//         if(player2.next().hasClass("end")) {
//           raceStop();
//           $("#victory2").css("display", "block");
//         };
//       };

//   });



function raceStop() {
  $(document).off('keyup');
}

function resetRace() {
  $('.racer_table').find('.active').removeClass("active");
  $('.racer_table').find('.start').addClass("active");
  $('body').find('.victory').css('display', 'none');

}



// strip1.removeClass("active").find('.start').addClass("active");

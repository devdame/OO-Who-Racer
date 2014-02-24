$(document).ready(function() {
  $(document).on('keyup', function(event) {
      if(event.keyCode==81) {
        $('#player1_strip').find('.active').removeClass("active").next().addClass("active");
      };
      if(event.keyCode==80) {
        $('#player2_strip').find('.active').removeClass("active").next().addClass("active");
      };
  });
});

$(document).ready(function() {

    $("#reset_button").on("click", function(e) {
        //instantiate two new players with names from form
        $("#player1").css("margin-left", "0");
        $("#player2").css("margin-left", "0");
        $("#player1").css("visibility", "visible");
        $("#player2").css("visibility", "visible");
        $("#victory").css("display", "none");

        function Game(name1, name2) {
            this.startTime = Date.now();
            this.p1 = new Player(name1, "player1");
            this.p2 = new Player(name2, "player2");
        };

        Game.prototype.end = function(player, playTime) {
            $(document).unbind('keyup');
            $("#" + player.player_number).css("visibility", "hidden");
            $("#victory-message").text(player.name + " IS THE SUPERIOR BEING!");
            $("#result").text("You got to the Tardis in " + playTime + " seconds.");
            $("#victory").css("display", "block");
        };

        Game.prototype.getPlayTime = function() {
            var endTime = Date.now();
            var playTime = endTime - this.startTime;
            this.finalTime = playTime / 1000;
        };

        Game.prototype.determineWinner = function() {
            if (this.p1.position === 92) {
                game.getPlayTime();
                game.end(this.p1, game.finalTime);
            };
            if (this.p2.position === 92) {
                game.getPlayTime();
                game.end(this.p2, game.finalTime);
            };
        };

        var game = new Game("fred", "jane");

        function Player(name, player_number) {

            this.name = name
            this.player_number = player_number
            this.position = 0

        };

        Player.prototype.advance = function() {
            this.position += 2;
            $("#" + this.player_number).css("margin-left", this.position + "%");
        };

        $(document).on('keyup', function(event) {

            if (event.keyCode == 81) {
                game.p1.advance();
            };
            if (event.keyCode == 80) {
                game.p2.advance();
            };
            game.determineWinner();
        });
    });

});



//     resetRace();
//     $('body').on("click", "#reset_button", function(e) {        "#" + this.player_number
//         var startTime = new Date().getTime();
//         resetRace();
//         $('#reset_button').text('RESET');


//         $(document).on('keyup', function(event) {
//             var strip1 = $('#player1_strip')
//             var strip2 = $('#player2_strip')

//             var player1 = strip1.find('.active')
//             var player2 = strip2.find('.active')

//             if (event.keyCode == 81) {
//                 $(player1).removeClass("active").next().addClass("active");

//                 if (player1.next().hasClass("end")) {
//                     $(player1).next().css("background-image", "url('../tardis.png')");
//                     raceStop();
//                     $("#victory1").css("display", "block");
//                 }\

//             };

//             if (event.keyCode == 80) {
//                 $(player2).removeClass("active").next().addClass("active");
//                 if (player2.next().hasClass("end")) {

//                     var endTime = new Date().getTime();
//                     var playTime = endTime - startTime;
//                     var finalTime = playTime / 1000;

//                     $('#result').css("background", "blue");
//                     $('#result').text("You finished in " + finalTime + " seconds");
//                     $(player2).next().css("background-image", "url('../tardis.png')");

//                     $(strip2).find(".end").css("box-shadow", "0 0 50px gold,0 0 150px gold");
//                     raceStop();
//                     $("#victory2").css("display", "block");
//                 };
//             };
//         });
//     });


// function raceStop() {
//     $(document).off('keyup');
// }

// function resetRace() {
//     $('.racer_table').find('.active').removeClass("active");
//     $('.racer_table').find('.start').addClass("active");
//     $('body').find('.victory').css('display', 'none');

// }

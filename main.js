$(function() {

	// var one = ($("#one").html());
	// var two = ($("#two").html());
	// var three = ($("#three").html());
	// var four = ($("#four").html());
	// var five = ($("#five").html());
	// var six = ($("#six").html());
	// var seven = ($("#seven").html());
	// var eight = ($("#eight").html());
	// var nine = ($("#nine").html());	
	// var topRow = [one, two, three]
	// var midRow = [four, five, six]
	// var botRow = [seven, eight, nine]
	// var leftCol = [one, four, seven]
	// var midCol = [two, five, eight]
	// var rtCol = [three, six, nine]
	// var diagOne = [one, five, nine]
	// var diagTwo = [three, five, seven]

	function gamePlay() {
		var turnCounter = 0
		$("button").on("click",function() {
			if (turnCounter % 2 === 0) {
				// ($(this).css("background-image", "url(button-X.png)"));
				($(this).html("X"));	
			}
			else {
				// ($(this).css("background-image", "url(button-O.png)"));
				($(this).html("O"));
				return
			}
			turnCounter++;
		});
	};

		

	// 	function checkRow(topRow) {
	// 		// if there are nulls, return still playing
	// 		// create prevVal var
	// 	var prevVal = "";

	// 	// 	loop through top row
	// 	for (var i = 0; i < topRow.length; i++) 
	// 	// 	compare current value to previous value
	// 		if (topRow[i] === prevVal || i===0) {
	// 			prevVal = rowTop[i];
	// 		}
	// 		else {
	// 			return "Tie";
	// 		}
	// // if finished loop, prevVal[i] === "Winner"	
	
	
	
	

	gamePlay();
});

	// function playerOne (){
		// 	$("button").on("click",function() {
	 //        	($(this).css("background-image", "url(button-X.png)"));
	 //        	($(this).addClass("X"));
	 //        }
	 //        });
	 //    };

		// //Player two choosing
	 //    function playerTwo (){
		// 	$("button").on("click",function() {
	 //        	($(this).css("background-image", "url(button-O.png)"));
	 //        	($(this).addClass("O"));
	 //    	});
	 //    };
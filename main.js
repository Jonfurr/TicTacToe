$(function() {

	// function checkRow(topRow) {
	// // 		// if there are nulls, return still playing
	// 	var prevVal = "";
	// 	var topRow = [$(#one).html(),($#two).html(),$(#three).html()]
	// // 	// 	loop through top row
	// 	for (var i = 0; i < topRow.length; i++) 
	// // 	// 	compare current value to previous value
	// 		if (topRow[i] === prevVal || i===0) {
	// 			prevVal = rowTop[i];
	// 		}
	// 		else {
	// 			return "Tie";
	// 		}
	// 	}
	// // if finished loop, prevVal[i] === "Winner"	

	function gamePlay() {
		var turnCounter = 0
		$("button").on("click",function() {
			if (turnCounter % 2 === 0) {
				// ($(this).css("background-image", "url(button-X.png)"));
				($(this).html("X"));
				getWinner();
			}
			else {
				// ($(this).css("background-image", "url(button-O.png)"));
				($(this).html("O"));
				getWinner();
			}
			turnCounter++;
		});
	};

	function getWinner() {
		var a = $("#one").html();
		var b = $("#two").html();
		var c = $("#three").html();
		var d = $("#four").html();
		var e = $("#five").html();
		var f = $("#six").html();
		var g = $("#seven").html();
		var h = $("#eight").html();
		var i = $("#nine").html();

		if (a === "X" && b === "X" && c === "X") {
			alert("X Wins");
		}		
		else if (d === "X" && e === "X" && f === "X") {
			alert("X Wins");
		}
		else if (g === "X" && h === "X" && i === "X") {
			alert("X Wins");
		}
		else if (a === "X" && d === "X" && g === "X") {
			alert("X Wins");
		}
		else if (b === "X" && e === "X" && h === "X") {
			alert("X Wins");
		}
		else if (c === "X" && f === "X" && i === "X") {
			alert("X Wins");
		}
		else if (a === "X" && e === "X" && i === "X") {
			alert("X Wins");
		}
		else if (c === "X" && e === "X" && g === "X") {
			alert("X Wins");
		}
		else if (a === "X" && b === "X" && c === "X") {
			alert("X Wins");
		}
		else if (d === "O" && e === "O" && f === "O") {
			alert("O Wins");
		}
		else if (g === "O" && h === "O" && i === "O") {
			alert("O Wins");
		}
		else if (a === "O" && d === "O" && g === "O") {
			alert("O Wins");
		}
		else if (b === "O" && e === "O" && h === "O") {
			alert("O Wins");
		}
		else if (c === "O" && f === "O" && i === "O") {
			alert("O Wins");
		}
		else if (a === "O" && e === "O" && i === "O") {
			alert("O Wins");
		}
		else if (c === "O" && e === "O" && g === "O") {
			alert("O Wins");
		}
		else {
			alert("Next Player");
		}

	}


	gamePlay();
});
$(function() {
	function gamePlay() {
		var turnCounter = 0
		$("button").on("click",function() {
			if (turnCounter % 2 === 0) {
				($(this).html("X"));
				// ($(this).css("background-image", "url(button-X.png)"));
				getWinner();
			}
			else {
				($(this).html("O"));
				// ($(this).css("background-image", "url(button-O.png)"));
				getWinner();
			}
			turnCounter++;
		});
	};
	function clearBoard() {
		$("#one").html("");
		$("#two").html("");
		$("#three").html("");
		$("#four").html("");
		$("#five").html("");
		$("#six").html("");
		$("#seven").html("");
		$("#eight").html("");
		$("#nine").html("");
}
	function resetButton() {
		$("#resetButton").on("click",function(){
			clearBoard();
		})
	}
	function xWins(){
		$(".headmid").html("<p>Player 1 Wins!</p>");
		var wins = parseInt($("#leftwins").html());
		var winCount = wins + 1;
		$("#leftwins").html(winCount);
		$("#rightlosses").html(winCount);
		clearBoard();
	}

	function oWins(){
		$(".headmid").html("<p>Player 2 Wins!</p>");
		var wins = parseInt($("#rightwins").html());
		var winCount = wins + 1;
		$("#leftlosses").html(winCount);
		$("#rightwins").html(winCount);
		clearBoard();
	}



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
			xWins();
		}		
		else if (d === "X" && e === "X" && f === "X") {
			xWins();
		}
		else if (g === "X" && h === "X" && i === "X") {
			xWins();
		}
		else if (a === "X" && d === "X" && g === "X") {
			xWins();
		}
		else if (b === "X" && e === "X" && h === "X") {
			xWins();
		}
		else if (c === "X" && f === "X" && i === "X") {
			xWins();
		}
		else if (a === "X" && e === "X" && i === "X") {
			xWins();
		}
		else if (c === "X" && e === "X" && g === "X") {
			xWins();
		}
		else if (a === "O" && b === "O" && c === "O") {
			oWins();
		}
		else if (d === "O" && e === "O" && f === "O") {
			oWins();
		}
		else if (g === "O" && h === "O" && i === "O") {
			oWins();
		}
		else if (a === "O" && d === "O" && g === "O") {
			oWins();
		}
		else if (b === "O" && e === "O" && h === "O") {
			oWins();
		}
		else if (c === "O" && f === "O" && i === "O") {
			oWins();
		}
		else if (a === "O" && e === "O" && i === "O") {
			oWins();
		}
		else if (c === "O" && e === "O" && g === "O") {
			oWins();
		}
		else {
			console.log("Next Player");
		}

	}

	resetButton();
	gamePlay();
});
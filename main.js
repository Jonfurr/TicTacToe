$(function() {

		//Who goes first?
	    function whoseTurn () {
	    	function getRandom() {
	  		return Math.random();
	  		}
	  		
			if (getRandom() < .5) {
				console.log("less than .5")
				playerOne();
			}
			
			else {
				console.log("greater than or = .5")
				playerTwo();
			}
		};


		//Player one choosing 
		function playerOne (){
			$("button").on("click",function() {
	        	($(this).html("X"));
	        	playerTwo();
	    		});
	    };

	  //   //Player two choosing
	    function playerTwo (){
			$("button").on("click",function() {
	        	($(this).html("O"));
	        	playerOne();
	    		});
	    };
	whoseTurn();

});


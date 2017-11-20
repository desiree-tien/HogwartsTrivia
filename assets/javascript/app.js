


var game = {
	
	questionArray:[
	{
		question: "1: When do you receive your Hogwarts letter?", 
		option1: "Around your 17th birthday", 
		option2: "Around your 13th birthday",
		option3: "Around your 11th birthday",
		option4: "Around your 7th birthday",
		correctAnswer: "Around your 11th birthday"
	},
	{
		question: "2: What are the 3 most prestigous magic schools in Europe?", 
		option1: "Hogwarts, Bellabox, Varkoug", 
		option2: "Hogwarts, Beauxbatons, Durmstrang",
		option3: "Hogwarts, Botanious, Valkyarie",
		option4: "Hogwarts, Bleanous, Dormstraut",
		correctAnswer: "Hogwarts, Beauxbatons, Durmstrang"
	},
	{
		question: "3: Where will you buy your wand in Diagon Alley?", 
		option1: "Borgin and Burkes", 
		option2: "Gringotts",
		option3: "Flourish and Blotts",
		option4: "Ollivanders",
		correctAnswer: "Ollivanders"
	},
	{
		question: "4: What type of creature is Buckbeak?", 
		option1: "Centaur", 
		option2: "Unicorn",
		option3: "Hippogriff",
		option4: "Dragon",
		correctAnswer: "Hippogriff"
	},
	{
		question: "5: What is a patrous", 
		option1: "A spell to turn the lights off and on", 
		option2: "A spell to make things grow",
		option3: "A spell to summon your enemy's greatest fear",
		option4: "A spell to summon a powerful protector",
		correctAnswer: "A spell to summon a powerful protector"
	}
	],
	questionNumber: 1,
	guessedAnswer: "",
	intervalVar: "",
	correct: 0,
	incorrect: 0,
	score: 0,

    
	displayQuestion: function(){
	console.log (game.correct)
	console.log (game.questionNumber)	

		$("#question").html(game.questionArray[game.questionNumber - 1].question);
		$("#a-button").html(game.questionArray[game.questionNumber - 1].option1);
		$("#b-button").html(game.questionArray[game.questionNumber - 1].option2);
		$("#c-button").html(game.questionArray[game.questionNumber - 1].option3);
		$("#d-button").html(game.questionArray[game.questionNumber - 1].option4);
		
		$(".btn-info").on("click", function(){ 
			game.guessedAnswer = this.innerHTML;
			$('#guessed-answer').html(game.guessedAnswer);
			$('#the-answer').html(game.questionArray[game.questionNumber - 1].correctAnswer);
			if(game.guessedAnswer === game.questionArray[game.questionNumber - 1].correctAnswer){
				$('#correct-incorrect').html("Correct");
				game.correct++;

			} 
			else{
				$('#correct-incorrect').html("Incorrect");
				game.incorrect++;
				
			}
			game.score = Math.floor((game.correct / game.questionNumber) * 100);
			$("#score-percentage").html(game.score);
			game.questionNumber++;
			$(".btn-info").unbind( "click" )
			if(game.questionNumber < 6){
				game.displayQuestion();
			}
			if(game.questionNumber >= 6 && game.score >= 70){
				$("#game-over").html("Game Over! You Passed!");
				$( ".btn-info").unbind( "click" )
			}	
			if(game.questionNumber >= 6 && game.score < 70){
				$("#game-over").html("Game Over! You Failed!");
				$(".btn-info").unbind( "click" )
			}	

		})

	},
	startTimer: function(duration, display) {
		var timer = duration, seconds;
		var myVar = setInterval(function () {

			seconds = parseInt(timer % 60, 10);
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = ":" + seconds;

			if (--timer < 0) {
				timer = duration;
			}
			if(timer === 0){
				$("#game-over").html("Game Over! You ran out of time.");	
				clearInterval(myVar);
				$(".btn-info").unbind( "click" )
			}
		}, 1000);
	}
}


$( document ).ready(function() {
	var timeLimit = 30;
	display = document.querySelector("#time");
	game.startTimer(timeLimit, display);
	game.displayQuestion();
	
});
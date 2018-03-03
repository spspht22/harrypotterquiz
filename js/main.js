// Quiz Paper Prototype
//HTML
	//text tags for the questions
	//ways to take answers
		//^ inout = text
		//^ Buttons
		//^ input = radio
	//keep score
		//^ h1 right answer
		//^ h1 wrong answer
//feedback on choice selection - on submit button
	//^ submit button for every question

//Javascript
	// an array of objects that have pairs of questions ans answers
	//funciton that takes userinput of the exact question and answer.


	let quizArray = [
		{
			question: "What spell is most used to fight death eaters?",
			answer: "Expecto Patronus"
		},
		{
			question: "Which Harry Potter character has two twin brothers?",
			answer: "Ronald Weasly"
		},
		{
			question: "What is the spell that levitates its target?",
			answer: "Windgaurdium Leviosa"
		},
		{
			question: "What brand is the everything flavored jelly beans?",
			answer: "Berttie Botts"
		},
		{
			question: "Who haunts the bathrooms of Hogwarts?",
			answer: "Moaning Myrtle"
		},
	] 
	// This for loop puts the questions from the array into their respective h1's on the HTML
	for(let i = 0; i < quizArray.length; i++){
		//target the corresponding h1.
		let thisHeader = document.getElementById("q" + i);
		//Target the Corresponding object question.
		let thisQuestion = quizArray[i].question
		//put the question in the h1.
		thisHeader.textContent = thisQuestion

	}
	function checkAnswers(){
		//check Score -  created two variables to keep track of how many the user got right and wrong
		let correct = 0;
		let incorrect = 0;
		//get the #score div and save it into a variable
		let score = document.getElementById("score");
		score.innerHTML = "";
		//take user inout and check it vs 
		let userGuess = document.getElementsByClassName("userGuess");
		console.log(userGuess)
		for(let i = 0; i < quizArray.length; i++){
			if(userGuess[i].value == quizArray[i].answer){
				document.getElementById("q" + i).style = "color: springgreen;";
				correct++;
			}else{
				document.getElementById("q" + i).style	= "color: tomato;";
				incorrect++;
			}
		}
	console.log("correct: " + correct);
	console.log("incorrect: " + incorrect);
	console.log(quizArray);

	//create elements for the score
	let correctBox = document.createElement("h1");
	let incorrectBox = document.createElement("h1");

	//classees created for the incorrent and corrent elements we have created/ along with styling.
	correctBox.className = "correctScore"
	incorrectBox.className = "incorrectScore"

	//put text into the new elements
	correctBox.innerHTML = "Correct: " + correct;
	incorrectBox.innerHTML = "incorrect: " + incorrect;

	//send the two elements to #score div
	score.appendChild(correctBox);
	score.appendChild(incorrectBox);

	//change display of #score div to display: block;
	score.style = "display: block;"
}
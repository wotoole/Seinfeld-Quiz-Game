function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;

	if (question1 == "George"){
		correct++;
	}

	if (question2 == "Jerry"){
		correct++;
	}

	if (question3 == "Kramer"){
		correct++;
	}

	if (question4 == "Jerry"){
		correct++;
	}

	if (question5 == "Elaine"){
		correct++;
	}

	if (question6 == "George"){
		correct++;
	}

	if (question7 == "George"){
		correct++;
	}

	if (question8 == "Jerry"){
		correct++;
	}

	if (question9 == "George"){
		correct++;
	}

	if (question10 == "Jerry"){
		correct++;
	}

	var messages = ["Great job! You're the master of this domain.", "Nice job, you're almost a Seinfeld master.", "You should rewatch Seinfeld.", "Have you ever seen Seinfeld?"];
	var score;

	if (correct < 4) {
		score = 3;
	}

	if (correct >=4 && correct<=6) {
		score = 2;
	}

	if (correct >=7 && correct<=9){
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}


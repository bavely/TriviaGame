
	$(document).ready(function() {

	var rightAnswers;
	var wrongAnswers;
	var counter;

function start(){
	counter=100;
	rightAnswers=0;
	wrongAnswers=0;
	 var startBtn = $("<button>");
	 startBtn.addClass("btn btn-primary")
	 $("#countDiv").html(startBtn);
	startBtn.html("Start Game!");

		// click on "Start Game!" button.
	 startBtn.click(function(){
	
		startCount();
		question();

	 });
	 }

start();

	// Questions and Answers Obj.
	var  questions =  [{

	Q:"1. Who was the president of the United States during the American civil war?",
	A: ["a. Andrew Johnson","b. James Buchanan","c. Hannibal Hamlin","d. Abraham Lincoln"]
	},

	{
	Q:"2. In 1995, how much was a first-class stamp in the United States?",
	A: ["a. 42 cents","b. 12 cents","c. 32 cents","d. 22 cents"]
	},

	{
	Q:"3. What piece of land did the United Kingdom handover to China in 1997?",
	A: ["a. Singapore","b. Hong Kong","c. The Seychelles","d. The Falklands"]

	}];



	
	var interval;
	// Count dawn timer.
	function startCount(){
	interval=setInterval(countDawn, 1000);
	console.log(interval);
	}
	function countDawn(){

	counter--;

	$("#countDiv").html("<h4> Time Remaining : "+counter+" Seconds");

	if (counter === 0) {

	$("#countDiv").html("<br>Time out!");
	$("#mainDiv").html("<br>the result<br>The Right Answers = "+rightAnswers+"<br>The Wrong Answers = "+wrongAnswers);
	
		stop();

		var startNew = $("<button>");
		startNew.html("Start New Quiz!");
		startNew.addClass("new btn btn-primary");
		$("#mainDiv").append(startNew);

		$(".new").click(function(){


			start();
			$("#mainDiv").empty();

		});
		  
	}
}
	

	function stop() { 

	clearInterval(interval);

	}

	function question(){
	for (var i = 0; i < questions.length; i++) {
		$("#mainDiv").append("<br> <h4>"+questions[i].Q + "<br>");

		for (var j = 0; j < questions[i].A.length; j++) {
			
		selectAnswers = $("<label> ");
		selectAnswers.addClass("ans");
		selectAnswers.html("<br> <input type='checkbox'> "+ questions[i].A[j]);
		$("#mainDiv").append(selectAnswers);

		if ((i===0 && j===3) || (i===1 && j===2) ||(i===2 && j===1)){

	selectAnswers.attr("Answer","right");

	}
	else{
	selectAnswers.attr("Answer","wrong");
	}
		}
	}

	$(".ans").click(function(){

	var ansDetector = $(this).attr("Answer");

	console.log(ansDetector);

	if (ansDetector==="right"){

		rightAnswers++;
	

	}


	if (ansDetector==="wrong"){

		wrongAnswers++;

	}



	});

	var doneBtn = $("<button>");
	doneBtn.html("Done");
	doneBtn.addClass("done btn btn-primary");
	$("#mainDiv").append(doneBtn);

	$(".done").click(function(){
		stop();
		$("#countDiv").empty();
		$("#mainDiv").html(" <br><h2>The result<br><h4>The Right Answers = "+ rightAnswers +" <br><h4>The Wrong Answers = "+wrongAnswers);

		var startNew = $("<button>");
		startNew.html("Start New Quiz!");
		startNew.addClass("new btn btn-primary");
		$("#mainDiv").append(startNew);

		$(".new").click(function(){

			start();
			$("#mainDiv").empty();

		});
	});

	
}



});
var main = function(){

	var questionList = [{question: "How?" , answer1: "In the living room!", answer2: "In the bedroom!", answer3:"Never!", correctanswer:2}, {question: "Why?" , answer1: "Why not!", answer2: "Ho ho ho!", answer3: "Uncle Ted said so...", correctanswer:2}, {question: "What?", answer1: "Superman!", answer2: "A mango!", answer3: "Stuff!", correctanswer: 1}];
	var i=0;
	var whitedis = document.getElementById("whitedis");
	var button = document.getElementById("btn");
	var pquestion = document.getElementById("pquestion");
	
	var wrapper = document.getElementById("quizwrapper");
	
	
	var answer1 = document.getElementById("answer1label");
	var answer2 = document.getElementById("answer2label");
	var answer3 = document.getElementById("answer3label");

	var first_function = function(){wrapper.style.backgroundColor= "#c0dfd9";};
	var second_function = function(){whitedis.style.backgroundColor="white";};
	var third_function = function(){wrapper.style.backgroundColor="#9fa8a3";};	


	var functionList = [first_function, second_function, third_function];

if(document.getElementById("answer1").hasAttribute("style")==true){
button.addEventListener("click", function(){$("input").prop("style", false)});console.log("hi");}

	
	
var rightanswers=0;
	
	//RESULTS
	var results = function (){

		console.log("You got " + rightanswers + " questions right!");
		$("input").remove();$("label").remove();
		$("#pquestion").remove();
			if(rightanswers==1){
				$("<p>").text("You got " + rightanswers + " question right! Not bad, asshole..").addClass("results").appendTo("ul");
			}
			else if(rightanswers==2){
				$("<p>").text("You got " + rightanswers + " questions right! Meeeh...").addClass("results").appendTo("ul");
			
			}
			else if(rightanswers==3){
				$("<p>").text("You got " + rightanswers + " questions right! AMAAAZIN', pawtner!").addClass("results").appendTo("ul");
				$("<img>").attr("src", "img/cat.jpg").addClass("cat").appendTo(wrapper);
			}
			else if(rightanswers==0){
				$("<p>").text("That was f*cking awful. All questions wrong..").addClass("results").appendTo("ul");
			
			}
		button.removeEventListener("click", results);
		button.removeEventListener("click", collateresults);
		$("#btn span").text("Restart");
		button.addEventListener("click", function(){location.reload()});
	};
	

		      
//CHANGE QUESTION TEXT

var nextquestion= function(){
	

	pquestion.innerHTML=questionList[i].question;
	answer1.innerHTML=questionList[i].answer1;
	answer2.innerHTML=questionList[i].answer2;
	answer3.innerHTML=questionList[i].answer3;
						
	
	functionList[i]();
	console.log("now"+i);
	$("#btn span").text("Next Question");
	
	
	
	
	

};

var collateresults = function(){
	var radios = document.getElementsByTagName("input");
	
	if(radios[0].checked===true){
			if(questionList[i - 1].correctanswer==1){rightanswers=rightanswers+1;
			console.log("right");}
			}
	if(radios[1].checked===true){
			if(questionList[i - 1].correctanswer==2){rightanswers=rightanswers+1;
			console.log("right");}
		}
	if(radios[2].checked===true){ 
			if(questionList[i - 1].correctanswer==3){rightanswers=rightanswers+1;
			console.log("right");}
		
		}
	i=i+1;
	
	//LAST QUESTION TO RESULTS PAGE	
	if (i==(questionList.length)){
	console.log("change button function");
	button.removeEventListener("click", nextquestion);
	button.addEventListener("click", results);
	}

	//RESET
	$("input").prop("checked", false);

	};



	
	button.addEventListener("click", nextquestion);

	button.addEventListener("click", collateresults);
	


	
	
	
	
	
  


	
  
				

	

	



};

main();
var timeRemaining = 0;
var questionObject;
var timer;
var rightAnswers = [];
var wrongAnswers = [];
var unanswered = [];
var remainingQuestions = [{
    q: "Who spoke the voice of Shaggy?",
    answers: ["Pat Sajak", "Dick Clark", "Casey Kasem", "Alex Trebek"],
    correct: "Casey Kasem"
}, {
    q: "What is the name of the vehicle that the kids drove?",
    answers: ["The Mystery Wagon", "The Mystery Van", "The Mystery Machine", "Vanorama"],
    correct: "The Mystery Machine"
}, {
    q: "Frank Welker, the voice of Fred, also provided the voice of:",
    answers: ["Garfield the cat", "Abu the monkey in Aladdin", "Megatron & Soundwave in The Transformers", "all of the above"],
    correct: "all of the above"
}, {
    q: "What is Shaggy's real name?",
    answers: ["Norville", "Eddie", "Steve", "Chucky"],
    correct: "Norville"
}, {
    q: "Who is the oldest gang member?",
    answers: ["Shaggy", "Velma", "Fred", "Daphne"],
    correct: "Shaggy"
}, {
    q: "In what year was the original Scooby-Doo first aired?",
    answers: ["2002", "1970", "1985", "1969"],
    correct: "1969"
}, {
    q: "Where does Shaggy live?",
    answers: ["In the van", "In an apartment", "At a hotel", "In his parents' basement"],
    correct: "In his parents' basement"
}, {
    q: "Who is Scooby's best friend?",
    answers: ["Shaggy", "Velma", "Fred", "Daphne"],
    correct: "Shaggy"
}, {
    q: "What ages are the kids in Scooby-Doo?",
    answers: ["12-14", "16-19", "19-20", "15-16", ],
    correct: "15-16"
}];

$(document).ready(function() {

    $("#asked-question").hide();
    $("#container").hide();
    $("h3").hide();

    //startGame function
    $("button").click(function() {

        $("#asked-question").show();
        $("#container").show();
        $("h3").show();
        $("#start").hide();


        //create function for increment timer for each question
        function incrementTimer() {
            timer = setTimeout(function() {
                //write the "time remaining" to the DOM
                $("#timeRemaining").text(timeRemaining);
                //If the time runs out and the question is not answered, add to unanswered questions array
                if (timeRemaining <= 0) {
                    unanswered.push(questionObject);
                    //and ask the next question
                    askQuestion();
                    //otherwise
                } else {
                    //timer decreases in 1 second intervals
                    timeRemaining = timeRemaining - 1;
                    incrementTimer();
                }
            }, 1000);
        } //end of increment timer funtion

        //create function for start timer which includes increment timer
        function startTimer() {
            clearTimeout(timer);
            timeRemaining = 5; // in seconds
            incrementTimer();
        }; //end of start timer function

        //create function to ask the next question
        function askQuestion() {
            if (remainingQuestions.length <= 0) {
                //end of game
                clearTimeout(timer);
                $("#asked-question").hide();
                $("#container").html("");
                $("#container").append("Correct: " + rightAnswers.length + "<br>")
                $("#container").append("Incorrect: " + wrongAnswers.length + "<br>")
                $("#container").append("Unanswered: " + unanswered.length + "<br>")

            } else {
                startTimer();
                //clear the container
                $('#container').html("");
                questionObject = remainingQuestions.pop();


                //write the next question to the div "asked-question"
                $("#asked-question").html(questionObject.q);

                //get the answer choices from the question object
                var choices = questionObject.answers;
                //loop through
                for (var i = 0; i < choices.length; i++) {
                    var choice = $("<div>");
                    choice.text(choices[i]);
                    //change the id of each choice to "id = choice[i]"
                    choice.attr("id", "choice-" + i);
                    //update the value of each choice's index to i.
                    choice.attr("index", i);
                    //write each answer choice to the div "#container"
                    $("#container").append(choice);

                    choice.hover(function() {
                        $(this).css({ "background-color": "orange", "color": "white" });
                    }, function() {
                        $(this).css({ "background-color": "white", "color": "orange" });
                    });

                    choice.click(function() {

                        if (this.innerHTML === questionObject.correct) {
                            rightAnswers.push(questionObject);
                            $("#asked-question").text("Correct!");
                            //timer???
                            askQuestion();

                        } else {
                            wrongAnswers.push(questionObject);
                            askQuestion();
                        };

                    });
                };
            };
        };
        askQuestion();

    }); //end of on click start game


}); //end of document ready function

//startGame function
//function startGame(){
// Create the start button.
//$("#startButton").on("click", function() { }

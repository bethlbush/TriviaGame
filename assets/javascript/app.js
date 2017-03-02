
  var timeRemaining = 0;
  var questionObject;
  var timer;
  var rightAnswers = [];
  var wrongAnswers = [];
  var unanswered = [];
  var remainingQuestions = [ {
    q: "Who spoke the voice of Shaggy?",
      answer: [ "Pat Sajak", "Dick Clark", "Casey Kasem", "Alex Trebek" ],
      correct: "Casey Kasem"
    }, {
      q: "What color is Velma's shirt?",
      answer: [ "red", "orange", "purple", "green" ],
      correct: "orange"
    }, {
      q: "What is the name of the vehicle that the kids drove?",
      answer: [ "The Mystery Wagon", "The Mystery Van", "The Mystery Machine", "Vanorama" ],
      correct: "The Mystery Machine"
    }, {
      q: "Frank Welker, the voice of Fred, also provided the voice of:",
      answer: [ "Garfield", "Abu", "Megatron & Soundwave", "all of the above" ],
      correct: "all of the above"
    }, {
      q: "What is Shaggy's real name?",
      answer: [ "Norville", "Eddie", "Steve", "Chucky" ],
      correct: "Norville"
    }, {
      q: "Who is the oldest gang member?",
      answer: [ "Shaggy", "Velma", "Fred" , "Daphne" ],
      correct: "Shaggy"
    }, {
      q: "In what year was the original Scooby-Doo first aired?",
      answer: [ "2002", "1970", "1985","1969" ],
      correct: "1969"
    }, {
      q: "Where does Shaggy live?",
      answer: [ "In the van", "In an apartment", "At a hotel", "In his parents' basement" ],
      correct: "In his parents' basement"
    }, {
      q: "Who is Scooby's best friend?",
      answer: [ "Shaggy", "Velma", "Fred" , "Daphne" ],
      correct: "Shaggy"
    }, {
      q: "What ages are the kids in Scooby-Doo?",
      answer: [ "12-14", "16-19", "19-20", "15-16",],
      correct: "15-16"
    }
  ];

  //create function for  increment timer for each question
   function incrementTimer() {
    timer = setTimeout(function () {
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
    }, 1000 );
  }
  //create function for start timer which includes increment timer
  function startTimer() {
    clearTimeout(timer);
    timeRemaining = 5; // in seconds
    incrementTimer();
  }
  //create function to ask the next question
  function askQuestion() {
    if (remainingQuestions.length <= 0) {
      //end of game
      clearTimeout(timer);
      //alert (" you got correct: " + rightAnswers.length);
      //alert (" you got wrong: " + wrongAnswers.length);
      //alert (" you got unanswered: " + unanswered.length);
    } else {
      startTimer();
      
      $( '#containerForChoiceOptions' ).html( "" );
      questionObject = remainingQuestions.pop();
      //var answer = prompt( question.q );
      // if ( answer === question.answer )
      //   rightAnswers.push( question );
      // else
      //   wrongAnswers.push( question );
      //   
      var choices = questionObject.answer;
      $("#asked-question").html(questionObject.q);
      for ( var i = 0; i < choices.length; i++ ) {
        var choice = $("<div>");
        choice.text(choices[ i ]);
        choice.attr("id", "choice-" + i);
        choice.attr("index", i);
        $("#containerForChoiceOptions").append(choice);

        choice.click( function () {
          //alert("I GUESSED "+ this.innerHTML);
          if (this.innerHTML === questionObject.correct){
            //alert("YAY");
            rightAnswers.push(questionObject);
            askQuestion();
          } else {
            //alert("boo!");
            wrongAnswers.push(questionObject);
            askQuestion();
          }
        } );
      }
    }
  }
  askQuestion();

  //startGame function
  function startGame(){
    // Create the start button.
$("#startButton").on("click", function() { 
  
  }
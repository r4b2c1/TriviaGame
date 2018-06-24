$(document).ready(function() {

    // Create a function that creates the start button and initial screen

   

    function initialScreen() {

        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";

        $(".mainArea").html(startScreen);

    }

   

    initialScreen();

   

    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

   

    $("body").on("click", ".start-button", function(event){

        event.preventDefault(); 

        

        generateHTML();   

        timerWrapper();

   

    }); // Closes start-button click

   

    $("body").on("click", ".answer", function(event){

       

        

        selectedAnswer = $(this).text();

        if(selectedAnswer === correctAnswers[questionCounter]) {

            clearInterval(theClock);

            generateWin();

        }

        else {

           

            clearInterval(theClock);

            generateLoss();

        }

    });

    

    $("body").on("click", ".reset-button", function(event){

          resetGame();

    });

    

    }); 

    

    function generateLossDueToTimeOut() {

        unansweredTally++;

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] ;

        $(".mainArea").html(gameHTML);

        setTimeout(wait, 2000);

    }

   

    function generateWin() {

        correctTally++;

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter];

        $(".mainArea").html(gameHTML);

        setTimeout(wait, 2000);

    }

   

    function generateLoss() {

        incorrectTally++;

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] ;

        $(".mainArea").html(gameHTML);

        setTimeout(wait, 2000);

    }

   

    function generateHTML() {

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>25</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3];

        $(".mainArea").html(gameHTML);

    }

   

    function wait() {

        if (questionCounter < 7) {

        questionCounter++;

        generateHTML();

        counter = 25;

        timerWrapper();

        }

        else {

            finalScreen();

        }

    }

   

    function timerWrapper() {

        theClock = setInterval(thirtySeconds, 1000);

        function thirtySeconds() {

            if (counter === 0) {

                clearInterval(theClock);

                generateLossDueToTimeOut();

            }

            if (counter > 0) {

                counter--;

            }

            $(".timer").html(counter);

        }

    }

   

    function finalScreen() {

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";

        $(".mainArea").html(gameHTML);

    }

   

    function resetGame() {

        questionCounter = 0;

        correctTally = 0;

        incorrectTally = 0;

        unansweredTally = 0;

        counter = 30;

        generateHTML();

        timerWrapper();

    }

   

    var startScreen;

    var gameHTML;

    var counter = 30;

    var questionArray = ["How many lobes does the human brain have?", "Which of the following is not a lobe?", "Which lobe is associated with the humans shigher level cognition?", "The Occipital lobe is located in teh back portion of the brain?", "The bran stem is not comprised of: ", "What is the cerebellm's nickname?", "The cerebellum takes up approximately __ of the the total brain size."];

    var answerArray = [["3", "6", "4", "2"], ["Cerebral","Frontal","Temporal","Occipital"], ["Parietal", "Temporal", "Cerebral", "Frontal"], ["True","False","I do not know","That is not a lobe"], ["Midbrain", "Pons", "Lowerbrain", "Medulla"], ["Itty Bitty Brain","Mini Me","Little Brain","Science has no nicknames"], ["10%", "20%", "30%", "5%"]];

    var correctAnswers = ["C. 4", "A. Cerebral", "D. Frontal", "A. True","C. 'Lowerbrain'", "C. 'Little Brain'", "A. 10%"];

    var questionCounter = 0;

    var selecterAnswer;

    var theClock;

    var correctTally = 0;

    var incorrectTally = 0;

    var unansweredTally = 0;
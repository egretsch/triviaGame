var correct;
var incorrect;
var unanswered;
var counter;
var globalTime;
var index;
var userSelect;
var timerReady = true;

var CurrentQuestion;

// An array of objects for questions and answers

var syfyQuestion = [
    {
        question: "Which on is the Captain from Star Trek the Next Generation?",
        choices: ["Picard", "Kirk", "Hook", "Jack"],
        validAnswer: 0
    }, {
        question: "Which disney scifi movie is not well know?",
        choices: ["Tron", "The Black Hole", "Tomorrowland", "Meet the Robinsons"],
        validAnswer: 1
    }, {
        question: "Which is syfy tv show with 1 season?",
        choices: ["X-files", "The Black Hole", "Firefly", "Stargate SG-1"],
        validAnswer: 2
    }, {
        question: "Who was the directer of buffy the vampire slayer and angle?",
        choices: ["Joss whedon", "Clint Eastwood", "Steven Spielberg", "Martin Scorsese"],
        validAnswer: 0
    }, {
        question: "Who has not directed Star Wars movie?",
        choices: ["George Lucas", "Rian Johnson", "Andy Serkis", "Christopher Nolan"],
        validAnswer: 2
    }, {
        question: "Wtich is the longest runing syfy show?",
        choices: ["X - files", "Dr. Who", "Star Trek", "Stargate SG-1"],
        validAnswer: 1
    }, {
        question: "Which Studio Created the movie Spirited Away?",
        choices: ["Disney", "Studio Bones", "Mad house", "Studio Ghibli"],
        validAnswer: 3
    }, {
        question: "Which is not a large robot anime?",
        choices: ["Gundam Wing", "Rusty The Boy Robot", "Gigantor", "Voltron"],
        validAnswer: 1
    },  
];

// Function to control the switching of questions (besides answering)
function timer(time, bool) {
    timerReady = false;
    var seconds = time;
    if(bool){
        buildQuestionsDiv(syfyQuestion, index);
    }
    counter = setTimeout(function() {
        if(time > 0){
            $("#timer").text("Timer: " + time);
            time--;
            timer(time);
        }
        else{
            unanswered++;
            $("#timer").empty();
            answerPage(null, index)
        }
    }, 1000)
};

// Function that builds the object and answers for each question

function buildQuestionsDiv(syfyQuestion, index) {
    $("#question").empty();
    var questionDiv = $("<div>");
    questionDiv.text(
        syfyQuestion[index].question
    );
    $("#question").append(questionDiv);
    for (var i = 0; i < syfyQuestion[index].choices.length; i++){
        CurrentQuestion = i;
        var answersDiv = $("<div>");
        // setup div to display
        answersDiv.text(
            syfyQuestion[index].choices[i]
        );
        answersDiv.attr(
            {
                'data-index': i,
                'data-question': index,
                "class": "thisChoice"
            }
        )
        $("#question").append(answersDiv);
    }
};

// Log the index of where the user clicked for the answer

$('#question').on('click', ".thisChoice", function() {
    userSelect = $(this).data('index');
    var questionIndex = $(this).data('question');
    $("#timer").empty();
    clearTimeout(counter);
    answerPage(userSelect, questionIndex);
});

// Congratulates user when they click the right answer

function buildCongratulationsDiv() {
    $("#question").empty();
    var congratulationsDiv = $("<div>");
    // setup div to display
    congratulationsDiv.text (
        "Congratulations you got the right answer!!!"
    )
    $("#question").append(congratulationsDiv);
};

// Set up timer to rotate through each question.
// Adds the correct answers one answers are answered correctly.
// Adds to incorrect score when questions are answered incorrectly.
// And rotates through the object.

function answerPage(userSelect, questionIndex) {
        var answered;
        var rightAnswerIndex = syfyQuestion[questionIndex].validAnswer;
        var rightAnswerText = syfyQuestion[questionIndex].choices[rightAnswerIndex];
        if ((userSelect == rightAnswerIndex)) {
            correct++;
            buildCongratulationsDiv();
        } else if ((userSelect != rightAnswerIndex)) {
            incorrect++;
            $("#question").empty();
            $("#question").html('The correct answer was: ' + rightAnswerText);
        } else {
            $("#question").empty();
            $("#question").html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }
    setTimeout(timer, 5000, 15, true);
    index++;
    if (index === syfyQuestion.length){
            scorPage()
        }
};

// Creates a reset button at the end of the quiz as well as refreshes of the page.

function buildRestartButton() {
    var restratButton = $("<button>");
    restratButton.text("Restart");
    restratButton.addClass("restart") 
    $("#restart").append(restratButton);
}
// Prints all the data points to the page questions answers and all the information based on the users stats during the quiz.
function scorPage() {
    $("#question").empty();
    $("#correct").text("Correct: "+ correct);
    $("#incorrect").text("Incorrect: " + incorrect);
    $("#unanswered").text("Unanswered: " + unanswered);
    $("#unanswered").text("Unanswered: " + unanswered);
    buildRestartButton()
    $("#restart").on("click", function () {
        event.preventDefault();
        return gameOver();
    });
}

function gameOver(){
    run();
}

// Clears all the stats and clears all the data points throughout the trivia app when started and restarted.

function run(){
    correct = 0;
    unanswered = 0;
    index = 0;
    incorrect = 0;
    $("#correct").empty();
    $("#incorrect").empty();
    $("#unanswered").empty();
    $("#unanswered").empty();
    $("#restart").empty();
    timer(15);
    buildQuestionsDiv(syfyQuestion, index)
}

// Starts app

run();

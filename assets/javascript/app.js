var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter;
var time = 15;
var index = 0;
var userSelect;
var timerReady = true;

var CurrentQuestion;

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

// function to control the switching of questions (besides answering)
function timer(time) {
    timerReady = false;
    var seconds = time;
    
    // iterate by seconds
    counter = setTimeout(function() {
        while(seconds > 0) {
            // display the current countdown
            $("#timer").text(time);
            seconds--;
            // need a sleep function here TODO
        };

        // console.log("next question");
        buildQuestionsDiv(syfyQuestion, index);
        index++;
        // timer(15);
    }, time * 1000).then(timerReady = true);
};

function buildQuestionsDiv(syfyQuestion, index) {
    $("#question").empty();
    var questionDiv = $("<div>");
    // var answersDiv = $("<div>");
    questionDiv.text(
        syfyQuestion[index].question
    )

    $("#question").append(questionDiv)

    for (var i = 0; i < syfyQuestion[index].choices.length; i++){
        CurrentQuestion = i;
        var answersDiv = $("<div>");
        // setup div to display

        answersDiv.text(
            syfyQuestion[index].choices[i]
        )
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

$('#question').on('click', ".thisChoice", function() {
    userSelect = $(this).data('index');
    var questionIndex = $(this).data('question');
    console.log($(this));
    
    clearInterval(timer);
    answerPage(userSelect, questionIndex);
});

function buildCongratulationsDiv(message) {
    $("#question").empty();
    var congratulationsDiv = $("<div>");
    // setup div to display
    congratulationsDiv.text (
        "Congratulations you got the right answer!!!"
    )
    $("#question").append(congratulationsDiv);
};

function answerPage(userSelect, questionIndex) {
    console.log(questionIndex)
    console.log(userSelect);
    var answered;
    var rightAnswerIndex = syfyQuestion[questionIndex].validAnswer;
    var rightAnswerText = syfyQuestion[questionIndex].choices[rightAnswerIndex];
    // var rightAnswerText = syfyQuestion[questionImdex].choices[syfyQuestion[questionIdex].validAnswer];
    
    // console.log(thisChoice);
    console.log(rightAnswerText);

    if ((userSelect == rightAnswerIndex) && (answered == true)) {
        correct++;
        buildCongratulationsDiv(message)
        index++;
    } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
        incorrect++;
        $("#question").empty();
        $("#question").html('The correct answer was: ' + rightAnswerText);
    } else {
        unanswered++;
        $("#question").empty();
        $("#question").html('The correct answer was: ' + rightAnswerText);
        answered = true;
    }
    setTimeout(timer, 5000);
};


function run() {
    while(!finished) {
        if (timerReady) {
            timer(15); 
        };
    }
}

run();
var correct;
var incorrect;
var unanswered;
var counter;
var globalTime;
var index;
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
    },
    // }, {
    //     question: "Which is syfy tv show with 1 season?",
    //     choices: ["X-files", "The Black Hole", "Firefly", "Stargate SG-1"],
    //     validAnswer: 2
    // }, {
    //     question: "Who was the directer of buffy the vampire slayer and angle?",
    //     choices: ["Joss whedon", "Clint Eastwood", "Steven Spielberg", "Martin Scorsese"],
    //     validAnswer: 0
    // }, {
    //     question: "Who has not directed Star Wars movie?",
    //     choices: ["George Lucas", "Rian Johnson", "Andy Serkis", "Christopher Nolan"],
    //     validAnswer: 2
    // }, {
    //     question: "Wtich is the longest runing syfy show?",
    //     choices: ["X - files", "Dr. Who", "Star Trek", "Stargate SG-1"],
    //     validAnswer: 1
    // }, {
    //     question: "Which Studio Created the movie Spirited Away?",
    //     choices: ["Disney", "Studio Bones", "Mad house", "Studio Ghibli"],
    //     validAnswer: 3
    // }, {
    //     question: "Which is not a large robot anime?",
    //     choices: ["Gundam Wing", "Rusty The Boy Robot", "Gigantor", "Voltron"],
    //     validAnswer: 1
    // },  
    {
        // question: "Which on is the Captain from Star Trek the Next Generation?",
        // choices: ["Picard", "Kirk", "Hook", "Jack"],
        // validAnswer: 0
    },
];

// function to control the switching of questions (besides answering)
function timer(time, bool) {
    console.log("This is time inside the timer function: ", time);
    timerReady = false;
    var seconds = time;

    // time = time;

    if(bool){
        buildQuestionsDiv(syfyQuestion, index);
    }
    

    // iterate by seconds
    counter = setTimeout(function() {
        // while(seconds > 0) {
        //     // display the current countdown
        //     $("#timer").text(time);
        //     seconds--;
        //     // need a sleep function here TODO
        // };

        if(time > 0){
            $("#timer").text("Timer: " + time);

            time--;

            timer(time);
        }
        else{
            console.log("time is up");
            // index++;
            // buildQuestionsDiv(syfyQuestion, index);
            // clearTimeout(counter);
            // timer(15);

            unanswered++;
            console.log("this is unanswered: ", unanswered)
            $("#timer").empty();
            answerPage(null, index)
        }

        // console.log("next question");
        
        
        // timer(15);
    }, 1000)

        // .then(timerReady = true);
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
    $("#timer").empty();
    clearTimeout(counter);
    answerPage(userSelect, questionIndex);
});

function buildCongratulationsDiv() {
    $("#question").empty();
    var congratulationsDiv = $("<div>");
    // setup div to display
    congratulationsDiv.text (
        "Congratulations you got the right answer!!!"
    )
    $("#question").append(congratulationsDiv);
};

Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function answerPage(userSelect, questionIndex) {
    index++;

    console.log("this is index inside answer page: " , index);
    console.log("this is syfy array.length: ", syfyQuestion.length)

    if (index === syfyQuestion.length){
        // return alert("game over");
        
        scorPage()

        
    }
        

        console.log("this is the questionIndex ", questionIndex);
        console.log("this is userSelect ", userSelect);
        var answered;
        var rightAnswerIndex = syfyQuestion[questionIndex].validAnswer;
        var rightAnswerText = syfyQuestion[questionIndex].choices[rightAnswerIndex];
        // var rightAnswerText = syfyQuestion[questionImdex].choices[syfyQuestion[questionIdex].validAnswer];

        // console.log(thisChoice);
        console.log("this is rightAnswerIndex ", rightAnswerIndex)
        console.log("this is rightAnswerText ", rightAnswerText);

        if ((userSelect == rightAnswerIndex)) {
            correct++;
            buildCongratulationsDiv();


        } else if ((userSelect != rightAnswerIndex)) {
            incorrect++;
            $("#question").empty();
            $("#question").html('The correct answer was: ' + rightAnswerText);

        } else {
            // unanswered++;
            console.log("this is unanswered: ", unanswered)
            $("#question").empty();
            $("#question").html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }

        // buildQuestionsDiv(syfyQuestion, index)
        setTimeout(timer, 5000, 15, true);
    

    
};


// function run() {
//     while(!finished) {
//         if (timerReady) {
//             timer(15); 
//         };
//     }
// }

// run();

function buildRestartButton() {
    var restratButton = $("<button>");
    // restratButton.addClass("movie")
    restratButton.text("Restart");
    restratButton.addClass("Restart") 
    $("#restart").append(restratButton);
}

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

// timer()

run();
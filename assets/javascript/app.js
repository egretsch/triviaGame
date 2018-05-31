var correct = 0;
var incorrect = 0;
var unAnwered = 0;
var counter;
var time = 15;
var congarts = ("Congratulations you got the right answer!!!")
var index = 0;

var sifyQuestion = [{
        question: "Witch on is the Captin from star trek the next generation?",
        choices: ["Picard", "Kirk", "Hook", "Jack"],
        validAnswer: 0
    }, {
        question: "Witch disney scifi movie is not well know?",
        choices: ["Tron", "The Black Hole", "Tomorrowland", "Right Hand"],
        validAnswer: 1
    }, {
        question: "Witch is sify tv show with 1 season?",
        choices: ["X-files", "The Black Hole", "Fierfly", "Stargate SG-1"],
        validAnswer: 3
    }, {
        question: "Who was the directer of buffy the vampire slayer and angle?",
        choices: ["Joss whedon", "Clint Eastwood", "Steven Spielberg", "Martin Scorsese"],
        validAnswer: 0
    }, {
        question: "Who has not directed star wars?",
        choices: ["George Lucas", "Rian Johnson", "Andy Serkis", "Christopher Nolan"],
        validAnswer: 2
    }, {
        question: "Wtich is the longist runing sify show?",
        choices: ["X - files", "Dr. Who", "Star Trek", "Stargate SG-1"],
        validAnswer: 1
    }, {
        question: "Witch Studio Created the movie Spirted Away?",
        choices: ["Disney", "Studio Bones", "Mad house", "Studio Ghibli"],
        validAnswer: 3
    }, {
        question: "Witch is not a large robot anime?",
        choices: ["Gundem Wing", "Rusty The Boy Robot", "Gigantor", "Voltron"],
        validAnswer: 1
    },  

];

// function timer(time) {
//     counter = setTimeout(function (){
//         console.log(time);
//         time--;
//         if(time > 0){
//             timer(time);
//         }else{
//             console.log("next question");
//             index++;
//             buildQuestionsDiv(sifyQuestion, index);
//             timer(15);
//         };
//     }, 1000);
// }
function answerGongrats(message) {
    setTimeout(function () {
        console.log(congarts)
        
    },5000);  
}

function buildQuestionsDiv(array, index) {
    $("#question").empty();
    var qustionDiv = $("<div>");
    // setup div to display
    qustionDiv.text(
        array[index].question
    )
    $("#question").append(qustionDiv)

};
function buildCongratulationsDiv(message) {
    $("#question").empty();
    var congratulationsDiv = $("<div>");
    // setup div to display
    congratulationsDiv.text (
        "Congratulations you got the right answer!!!"
    )
    $("#question").append(congratulationsDiv)
    
};


//  timer(5)
function nextQuestion(){

}
 function resetGame(params) {
     
 }


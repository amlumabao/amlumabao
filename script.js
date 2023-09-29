class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

function displayQuestion() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length ; i++) {
            let choiceElement = document.getElementById("choice"+ i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

function showScores() {
    let quizEndHTML = 
        `
            <h1>Quiz Completed</h1>
            <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
            <div class="quiz-repeat">
                <a href="index.html">Take Quiz Again</a>
            </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
}

let questions = [
    new Question(
        "How many stars are on the national flag of USA?", ["50","75","99","100"], "50"
    ),
    new Question(
        "Where in the human body would you find the medulla oblongata?", ["Lungs","Brain","Legs","Ears"], "Brain"
    ),
    new Question(
        "Which Disney Princess has the least amount of screen time?", ["Rapunzel from Tangled","Merida from Brave","Cinderella","Aurora from Sleeping Beauty"], "Aurora from Sleeping Beauty"
    ),
    new Question(
        "What is the spiciest chilli in the world?", ["Komodo Dragon","Trinidad Moruga Scorpion","Carolina Reaper","Labuyo"], "Carolina Reaper"
    ),
    new Question(
        "If you have cryophobia, what are you afraid of?", ["Ice","Fire","Water","Earth"], "Ice"
    ),
    new Question(
        "Without using a calculator, what is 30% of 54000?", ["18200","13000","14000","16200"], "16200"
    ),
    new Question(
        "The numbers on the opposite sides of a six-sided die always add up to what number?", ["6","7","8","9"], "7"
    ),
    new Question(
        "Which playground game used to be an Olympic sport up until 1920?", ["Capture the flag","Chinese Jump Rope","Tug of War","Simon Says"], "Tug of War"
    ),
    new Question(
        "What was banned in Indonesia for stimulating passion?", ["Chewing Gum","Hula Hoops","Blue Jeans","flip-flops"], "Hula Hoops"
    ),
    new Question(
        "What animal breathes out of its butt?", ["Turtle","Snail","Crabs","Sea Horse"], "Turtle"
    ),
    new Question(
        "How do sea Otters keep from drifting apart while they sleep?", ["They Lean on each other","They pinch one another","They hold hands","They Hug each other"], "They Hold Hands"
    ),
    new Question(
        "What animal is known as sea cows?", ["Otter","Seal","Manatees","Turtle"], "Manatees"
    ),
    new Question(
        "What kind of turtle can't retract into its shell?", ["Tortoise","Sea Turtles","Box Turtle","Snapping Turtle"], "Sea Turtle"
    ),
    new Question(
        "What is the last letter of the greek alphabet?", ["Alpha","Psi","Omega","Gamma"], "Omega"
    ),
    new Question(
        "Where on the human body is the zygomatic bone found?", ["Nose","Facial Cheek","Abdominal","Thigh"], "Facial Cheek"
    ),
    new Question(
        "When held in UV light, what animal's urine glows in the dark", ["dog","cat","rabbit","frog"], "cat"
    ),
    new Question(
        "What animal cannot stick its tounge out?", ["Hamster","Komodo Dragon","Crocodile","Turtle"], "Crocodile"
    ),
    new Question(
        "What was Walt Disney afraid of?", ["Duck","Mice","Dog","Bird"], "Mice"
    ),
    new Question(
        "What kind of animal is a firefly?", ["Beetles","Mosquito","Flies","Cockroach"], "Beetles"
    ),
    new Question(
        "What was the first fruit to be eaten at the moon", ["Apple","Mango","Peach","Grapes"], "Peach"
    ),
    new Question(
        "What is the highest grossing holiday movie of all time?", ["Home Alone","Home Alone 2","The Grinch","The Grinch stole Christmas"], "The Grinch"
    ),
    new Question(
        "What famous character is known for saying I'll be back?", ["Mc Arthur","Terminator","Thomas Shelby","Swiper the Fox"], "Terminator"
    ),
    new Question(
        "What is Batman's city?", ["Emeral City","Gotham City","Atlantis City","Tomorrowland"], "Gotham City"
    ),
    new Question(
        "Which movie franchise character holds ‘family’ as the most important thing in the world?", ["Brian O'Connor","Dominic Torreto","Han Lue","Letty Ortiz"], "Dominic Torreto"
    ),
    new Question(
        "What energy does an Eolic power station generate?", ["Water","Fire","Wind","Earth"], "Wind"
    ),
    new Question(
        "What is the symbol for copper?", ["C","Cu","Ca","Cl"], "Cu"
    ),
    new Question(
        " What is Hydrogeology the study of?", ["Fresh Water","Salt Water","Underground Water","Spring Water"], "Underground Water"
    ),
    new Question(
        "The king crab walks __________", ["Horizontally","Diagonally","Vertically","Circular"], "Diagonally"
    ),
    new Question(
        "Which chemical has the atomic number one?", ["Carbon","Oxygen","Hydrogen","Chlorine"], "Hydrogen"
    ),
    new Question(
        "Bonus Question: What is my middle name", ["Getiagon","Getigan","Getiagan","Gatigan"], "Getigan"
    )
];

let quiz = new Quiz(questions);

displayQuestion();


let time = 50;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min}:${sec}`;
        }

    }, 1000)
}

startCountdown();

// const startQ = document.getElementById("start");

// function startQuiz(){
//     startQ.onClick("click", startCountdown()){
//         startQ.style.display = 'none';
//     }
// }

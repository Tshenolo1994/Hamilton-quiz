
//preloader 


////////////////////////QUIZ////////////
//quiz qustions array 
let questions = [{
    id:01,
    queston:"Who did Hamilton beat by a margin of 87 points to secure the 2019 drivers' championship?",
    imgSrc:"./driver profiles/1.png",
    choiceA:"A - Sebastian Vettel",

    choiceB:"B - Daniel Ricciardo",
    choiceC:"C - Valterri Bottas",
    choiceD:"D - Max Verstappen",
    correct:"C"
},
{id:02,
    queston:"Which car number has Hamilton continued to use from his karting days?",
    imgSrc:"./driver profiles/2.png",
    choiceA:"A",

    choiceB:"B",
    choiceC:"C",
    choiceD:"D",
    correct:"A"
},

{id:03,
    queston:"Which of these drivers has Hamilton NOT been team-mates with?",
imgSrc:"./driver profiles/3.png",
choiceA:"A - Heikki Kovalainen",

choiceB:"B - Fernando Alonso",
choiceC:"C - Jenson Button",
choiceD:"D - Romain Grosjean",
correct:"D"},
{
    id:04,
    queston:"Hamilton was the youngest driver to...",
    imgSrc:"./driver profiles/4.png",
    choiceA:"Be contracted to a Formula 1 team",
    
    choiceB:"Start a race",
    choiceC:"Win a race",
    choiceD:"Score podium finish",
    correct:"A"
},
{id:05,
    queston:"Who did Hamilton replace when he joined Mercedes in 2013?",
    imgSrc:"./driver profiles/5.png",
    choiceA:"Felipe Massa",
    
    choiceB:"Sebastian Vettel",
    choiceC:"Michael Schumacher",
    choiceD:"Kimi Raikkonen",
    correct:"C"
},
{id:06,
    queston:"Which other four-time champion did Hamilton compete with for a fifth title in 2018?",
    imgSrc:"./driver profiles/6.png",
    choiceA:"A - Max Verstappen",
    
    choiceB:"B - Jenson Button",
    choiceC:"C - Fernando Alonso",
    choiceD:"D - Sebastian Vettel",
    correct:"D"
},
{
    id:07,
    queston:"Which of his own records did Hamilton break in 2019?",
imgSrc:"./driver profiles/7.png",
choiceA:"Most wins in a season",

choiceB:"Most points scored in a season",
choiceC:"Most pole positions in a season",
choiceD:"Most fastest lap in a season",
correct:"B"

},
{id:08,
    queston:"Who does Hamilton say has been a major influence on his driving style?",
imgSrc:"./driver profiles/8.png",
choiceA:"A - Ayrton Senna",

choiceB:"B - Michael Schumacher",
choiceC:"C - Alain Prost",
choiceD:"D - Nigel Mansell",
correct:"A"
},
{
    id:09,
    queston:"How many F1 constructors' championships has Hamilton helped Mercedes win?",
imgSrc:"./driver profiles/9.png",
choiceA:"4",

choiceB:"5",
choiceC:"6",
choiceD:"7",
correct:"D"
},
{
    id:10,
    queston:"What's the lowest position Hamilton has ever finished in a Formula 1 season?",
    imgSrc:"./driver profiles/11.png",
    choiceA:"A - 10th",
    
    choiceB:"B - 8th",
    choiceC:"C - 7th",
    choiceD:"D - 5th",
    correct:"D"
},

]
 
let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;






////////variables 
 
const start = document.querySelector(".wrapper");
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".quiz-question");
const quizImg = document.querySelector(".quiz-pic");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");
const counter = document.querySelector(".counter");
const timer = document.querySelector("#app");
const score = document.querySelector("#score");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".quiz-container")
const restart = document.querySelector(".btn-restart");
const lastQuestion = questions.length -1;
let runningQuestion = 0;
let TIMER;

const gif = document.querySelector(".gif");
const message = document.querySelector(".score-message")
const border = document.querySelector('.timer');
document.addEventListener("DOMContentLoaded", renderQuestion);

function startQuiz(){
 
 
        $(".start").fadeOut(1000);
        runningQuestion = 0;
      renderQuestion();

      //startTimer();
      console.log("counting down");
      clockTimer(15);
   //   renderScore();
 
   
}
start.addEventListener("click", startQuiz);
const choices = document.querySelectorAll(".quiz-choices li");
function renderQuestion(){
    let q = questions[runningQuestion]
    question.innerHTML = "<h4 class='quiz-question'>"+q.queston+ "</h4>";
    quizImg.src =  " "+ q.imgSrc +" ";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    counter.textContent = q.id;
    if (q.id < 10) {
        return counter.textContent = "0" + q.id
    };
 
}

let percentage = 0;

  
  let clickedOption;

  choices.forEach(function(choice){

      choice.addEventListener("click",function(e){
        document.addEventListener("DOMContentLoaded", renderQuestion);
        clearInterval(t);
          clickedOption = e.currentTarget.dataset.idAnswer;
      
          if(clickedOption === questions[runningQuestion].correct){
            percentage++;
           
            renderScore();
          
              //answer is correct;
//move to next question;
          }
          else{
              //answer is incorect;
        
              setTimeout(answerWrong, 800);
       ////    onTimesUp()
     //  clearTimeout(timerId);
           runningQuestion = this.runningQuestion;
           percentage = 0;
              
             
          }
        
  //as long questions are less than length, move to next question
          if(runningQuestion < lastQuestion){
            runningQuestion++;
            setTimeout(renderQuestion,500)

            clearInterval(t);
            setTimeout( clockTimer(timeValue),900);
           
          }
          else{
            answerWrong(); 
       
        //   clearInterval(timerId);
          
        
          }
         
      });
  });

//when answer is incorrect
 
  function answerWrong(){
overlay.style.visibility = "visible";
percentage = 0;
clearInterval(t);

  }

  
  function renderScore(){
const scorePercent = Math.round(100*percentage/questions.length);
document.getElementById("score").innerHTML =  "<span id='score'>"+ scorePercent+"%"+ "</span>";
 
//images

if(scorePercent === 100){
  gif.src = "gif100.gif";
message.textContent = "Take a lap of honour, you absolute Hamilton expert. It's top of the podium for you, congratulations!";
}
else if(scorePercent >= 80){
  gif.src = "gif80.gif";
  message.textContent = "You almost had it! make sure your tactics are spot on and we've no doubt you'll reach the finish next time";
}
else if(scorePercent >=50){
  gif.src = "gif50.gif";
  message.textContent = "After a great start, you've hit a flat spot. Take a pit stop, regroup and have another go!";
}
else if(scorePercent >=20){
  gif.src = "https://media.giphy.com/media/j6wC2OVy8Re96QLgex/source.gif";
  message.textContent = "We'll class that as your formation lap, shall we? Now it's time to start the race for real (that means have another go)!";
}

else{
  gif.src = "gif0.gif";
  message.textContent = "Come on fam! Have another go, after all you can't finish lower than last place.";
}

  }
  //restart button 

  restart.addEventListener("click", function(){
    clearInterval(t);
//percentage = 0;
 runningQuestion = 0; 
 percentage = 0;
 startQuiz();
 renderScore();
 border.style.borderColor = "#0ca597;";
 overlay.style.visibility = "hidden";
  }); 




const string = document.querySelector(".timer_sec");
let t;
let timeValue = 15;


function clockTimer(time){
 t = setInterval(timer,1000);
 function timer(){
   string.textContent = "0:" + time;
   time--;
   if(time == 0){
     clearInterval(t);
    console.log("times up");
    setTimeout(answerWrong, 800);
    gif.src = "gifTime.gif";
    message.textContent = "Looks like you ran out of time on this lap. Try and be quicker. You got this!";
  }
  if(time < 9){
    string.textContent = "0:0" + time;
  }
  if(time < 6){
    border.style.borderColor = "#ba181b";
  }
  else{
    border.style.borderColor = "#0ca597";
  }
 }
 
}






/*function hideLoading() {
  document.getElementById('loading').style.opacity = '0';
  document.getElementById('loading').style.zIndex = '-1';
}
*/




/*
var progress = 0;
document.onreadystatechange = function(){
  
  if(document.readyState == "interactive")
  {
    const allElement = document.getElementsByTagName("*");
    const length = allElement.length;
    for(var i = 0; i < length; i++){
      set_element(allElement[i], length);
      console.log(allElement[i]);
    }
  }
}


function set_element(element,totalElement){
  var percetage = 100/totalElement;
  if($(element).length ==1){
   

    $(".fill").animate({width:progress + percetage + "%"}, 150, function(){
      if(document.querySelector(".fill").style.width == "100%"){
        document.querySelector(".loader-container").style.visibility = "hidden";
      } 
    });
    progress = progress + percetage;
  }
}
*/

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelector(".fill");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.querySelector(".loader-container").style.visibility = "hidden";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
/*$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( ".loader-container" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".loader-container" ).remove(); //makes page more lightweight 
  });  
}*/


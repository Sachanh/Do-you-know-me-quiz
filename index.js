
console.log("Do you know me quiz?");
console.log("There are total 3 question");
var readlineSync = require('readline-sync');
var score=0;
var i;
var j;
var highScore = ["Reet:2", "Shashank:3"];
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
console.log("Lets Begin with the Quiz");
console.log("-------------------------");
function quiz(question,option,answer){
  console.log(question);
  console.log(option);
  const userAnswerLower= readlineSync.question("your answer: ");
  const userAnswer = userAnswerLower.toUpperCase();
  if(userAnswer===answer){
    console.log("Yay! Right answer! ");
    score=score+1
  }
  else{
    console.log("Sorry ! Wrong answer! ");
    score=score-1
  }
}
var question = [{ques: "what is my nick name ?", options: "A:Raj B:Joker c:babu", answer:"B"}, {ques:"What is the name of my first company",options:"A:wipro B:HCL C:TCS",answer:"B"},{ques:"What is my age?",options:"A:21 B:3 C:23",answer:"C"}];
for(i=0;i<question.length;i++){
  console.log("Question no: " + (i+1));
  quiz(question[i].ques, question[i].options, question[i].answer);
  console.log("Score : " +score);
  console.log("---------------------")
}
 console.log('Thanks for playing: ' + userName + '!');
 console.log("Your Total score: " +score);
 console.log("High Scores : ");
 for(j=0; j<highScore.length;j++){
   console.log(highScore[j]);
 }
console.log("If you scored high send me the screenshot of this. I will upadate your score! ")




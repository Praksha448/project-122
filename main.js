x = 0;
y = 0;
screen_width=0
screen_height=0
draw_apple = "";
speak_data="";
to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  draw_apple=loadImage('apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
  
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    
    to_number = Number(content);

    if (Number.isInteger(to_number)) {
      document.getElementById("status").innerHTML="started drawing apple";
      draw_apple="set";
    }

}

function setup() {
  screen_width = window.innerWidth();
  screen_height = window.innerHeight();
  canvas=createCanvas(150,150);
  canvas.Position(69,69)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i = 1; i <= to_number; i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50);
      speak()
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

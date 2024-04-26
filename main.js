x = 0;
y = 0;

draw_circle ="";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening. Please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].trenscript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as : " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900)
    y = Math.floor(Math.random() * 600)
    document.getElementById("status".innerHTML = "Starting to draw the shape circle right now.")
  darw_circle = "set"
    }
    
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status".innerHTML = "Starting to draw the shape rectangle right now.")
      darw_rect = "set"  
    }
    
}

function setup(){
    canvas = createCanvas(900, 600)
}

function draw(){
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML = "The shape circle is ow officially drawn"
        draw_circle = ""
    }

    if (draw_rect == "set") {
        recognition(x,y,70,50)
        document.getElementById("status").innerHTML = "The shape rectangle is now officially drawn"
    draw_rect = ""
    }
}



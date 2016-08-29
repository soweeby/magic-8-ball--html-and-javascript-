

function yourFortune() {
    var answeropt = ["yes", "no", "maybe", "probably", "probably not", "ask again"];
    var theanswer = answeropt[Math.floor(Math.random() * answeropt.length)];
    var audio = new Audio('magicsound.mp3');
    document.getElementById("answerbox").innerHTML = theanswer;
    document.getElementById("QUESTION").value="";
    audio.play();

    
}
function textareaclear(){
    document.getElementById("textarea").value="";
}


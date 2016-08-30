

function yourFortune() {
    var answeropt = ["yes", "no", "maybe", "probably", "probably not", "ask again"];
    var theanswer = answeropt[Math.floor(Math.random() * answeropt.length)];
    var audio = new Audio('magicsound.mp3');
    var typed = document.getElementById("QUESTION").value
    document.getElementById("answerbox").innerHTML = "The Answer: " + theanswer;
    document.getElementById("fortuneplayback").innerHTML = "You Asked: " + typed;
    document.getElementById("QUESTION").value="";
    audio.play();

    
}

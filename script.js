var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function playVideo(file){
    myVideo.src=file;
    videoPlayer. style.display="block";
}


var input
input = window.prompt("What is your name:","") 
document.write("<H1>UserName : " + input + "</H1>");
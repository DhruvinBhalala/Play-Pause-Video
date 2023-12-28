var video = document.getElementById("backgroundVideo");
 var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML= "pause";
  }else {
    video.pause();
    btn.innerHTML = "play";
  }
}
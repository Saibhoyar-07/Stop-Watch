let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById("display-time");
let timer=null;
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  displaytime.innerHTML = hours + ":"+minutes +":"+seconds;
}
function watchstart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

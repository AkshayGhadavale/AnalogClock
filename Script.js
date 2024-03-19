// const secondHand = document.querySelector(".second-hand");
// const minsHand = document.querySelector(".min-hand");
// const hourHand = document.querySelector(".hour-hand");

// function setDate() {
//     const now =new Date();
//     const seconds=now.getSeconds();
//     const seconddegrees=((seconds/60)*360)+360;
//     console.log(seconddegrees);
//     console.log(seconds);
//     secondHand.style.transform=`rotate(${seconddegrees}deg)`

// const mins =now.getMinutes();
// const minDegress =((mins/60)*360)+360;
// minsHand.style.transform=`rotate(${minDegress}deg)`

// const hour =now.getMinutes();
// const hourdegress =((mins/12)*360)+360;
// hourHand.style.transform=`rotate(${hourdegress}deg)`

// }

// setInterval(setDate, 1000);
// // setDate();

document.addEventListener('DOMContentLoaded', function() {
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const music = document.getElementById('secmusic')
const almusic = document.getElementById('alaram')


function setDate() {

music.play();
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds)
if(seconds==0){
    music.currentTime = 0;
    music.play();

}

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  if(mins==0){
    almusic.play()
  }
console.log(mins)
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours)

if(hours==10 && mins== 51){
    
}



}
//call every second:
setInterval(setDate, 1000);
setDate();
});
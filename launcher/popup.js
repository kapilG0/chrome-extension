var jokeText = document.querySelector('.joke-text');
var newJokeBtn = document.getElementById('mybtn');
console.log(newJokeBtn,"1");
newJokeBtn.addEventListener('click', getJoke);
getJoke();
// immediately call getJoke()
function getJoke() {
  // make an API request to https://icanhazdadjoke.com/'
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(function(response) {
      // console.log(response.json());
    /* convert Stringified JSON response to Javascript Object */
    return response.json();
  }).then(function(data) {
    /* replace innerText of .joke-text with data.joke */
    // extract the joke text
    const joke = data.joke;
    // do the replacement
    jokeText.innerText = joke;

    /* make the tweetBtn(.tweet-btn link) work by setting href */
    // create tweet link with joke
    
  }).catch(function(error) {
    // if some error occured
    jokeText.innerText = 'Oops! Some error happened :(';
    // removes the old href from .tweet-btn if found any
    // console log the error
    console.log(error);
  });
}
var timer=document.getElementById('stopwatch');
var timer1=document.getElementById('mybtn1');
var timer2=document.getElementById('mybtn2');
// var timer3=document.getElementById('mybtn3');

timer1.addEventListener('click', starttimer);
timer2.addEventListener('click', stoptimer);
// timer3.addEventListener('click', resettimer);

var hr=0;
var min=0;
var sec=0;
var stoptime=true;
function starttimer(){
  console.log('@');
  if(stoptime==true){
    stoptime=false;
    timecycle();
  }
}
function stoptimer(){
  if(stoptime==false){
    stoptime=true;
  }
}
function timecycle(){
  if(stoptime==false){
    sec=parseInt(sec);
    min=parseInt(min);
    hr=parseInt(hr);
    sec=sec+1;
    if(sec==60){
      min=min+1;
      sec=0;
    }
    if(min==60){
      hr=hr+1;
      min=0;
      sec=0;
    }
    if(sec<10||sec==0){
      sec='0'+sec;
    }
    if(min<10||min==0){
      min='0'+min;
    }
    if(hr<10||hr==0){
      hr='0'+hr;
    }
    timer.innerHTML=hr+':'+min+':'+sec;
    setTimeout('timecycle()',1000);
  }
}
// function resettimer(){
//   stoptime=true;
//   timer.innerHTML='00:00:00';
// }
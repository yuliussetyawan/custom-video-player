const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Play & pause video
function toggleVideoStatus () {
  // video.paused return true if the video is pause
  if (video.paused) {
    video.play()
  } else {
    // video.pause makes video pause
    video.pause()
  }
}

// update play/pause icon
function updatePlayIcon () {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

// update progress and timestamp
function updateProgress () {
  progress.value = (video.currentTime / video.duration) * 100;
  
  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10){
    mins = '0' + String(mins);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10){
    seconds = '0' + String(seconds);
  }
  timestamp.innerHTML = `${mins}:${seconds}`;

}

// set video time to progress
function setVideoProgress () {
    // + sign Casts (Converts) the proceeding operand to a Number
    video.currentTime = (+progress.value * video.duration) / 100;
    
}

function stopVideo () {
  video.currentTime = 0
  video.pause()
}



// Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)

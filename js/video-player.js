const video = document.getElementById("customVideo");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");
const volume = document.getElementById("volume");
const fullscreen = document.getElementById("fullscreen");


playPause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPause.textContent = "❚❚"; 
  } else {
    video.pause();
    playPause.textContent = "►";
  }
});


video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = `${percent}%`;
});


progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = video.duration;
  video.currentTime = (clickX / width) * duration;
});


volume.addEventListener("input", () => {
  video.volume = volume.value;
});


fullscreen.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

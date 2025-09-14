
 
  const videoCards = document.querySelectorAll('.video-card');
  const overlay = document.getElementById('videoOverlay');
  const overlayVideo = document.getElementById('overlayVideo');
  const playPauseBtn = document.getElementById('playPause');
  const progress = document.querySelector('.progress');
  const progressContainer = document.querySelector('.progress-container');
  const volumeSlider = document.getElementById('volume');
  const fullscreenBtn = document.getElementById('fullscreen');
  const closeOverlay = document.getElementById('closeOverlay');

 
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-video');
      overlayVideo.src = src;
      overlay.style.display = 'flex';
      overlayVideo.play();
      playPauseBtn.textContent = '❚❚';
      document.body.style.overflow = 'hidden'; 
    });
  });

  
  playPauseBtn.addEventListener('click', () => {
    if(overlayVideo.paused){
      overlayVideo.play();
      playPauseBtn.textContent = '❚❚';
    } else{
      overlayVideo.pause();
      playPauseBtn.textContent = '►';
    }
  });

  
  overlayVideo.addEventListener('timeupdate', () => {
    const percent = (overlayVideo.currentTime / overlayVideo.duration)*100;
    progress.style.width = percent + '%';
  });


  progressContainer.addEventListener('click', e => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    overlayVideo.currentTime = (clickX/width)*overlayVideo.duration;
  });

 
  volumeSlider.addEventListener('input', () => overlayVideo.volume = volumeSlider.value);

  
  fullscreenBtn.addEventListener('click', () => {
    if(document.fullscreenElement){
      document.exitFullscreen();
    } else{
      overlayVideo.requestFullscreen();
    }
  });

 
  closeOverlay.addEventListener('click', () => {
    overlayVideo.pause();
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  });



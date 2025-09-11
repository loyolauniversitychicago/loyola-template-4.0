const playPauseButton = document.getElementById('playPauseButton');
const mediaElement = document.getElementById('mediaElementId');

playPauseButton.addEventListener('click', () => {
  if (mediaElement.paused) {
    mediaElement.play();
    playPauseButton.textContent = 'Pause';
  } else {
    mediaElement.pause();
    playPauseButton.textContent = 'Play';
  }
});
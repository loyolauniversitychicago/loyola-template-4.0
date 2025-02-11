const videoElement = document.querySelector('video');
const playPauseButton = document.querySelector('#video-control');

playPauseButton.addEventListener('click', () => {
	playPauseButton.classList.toggle('playing');
	if (playPauseButton.classList.contains('playing')) {
		videoElement.play();
	}
	else {
		videoElement.pause();
	}
});

videoElement.addEventListener('ended', () => {
	playPauseButton.classList.remove('playing');
});
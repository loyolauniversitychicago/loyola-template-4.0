const imgEl = document.getElementById('random-image');
const btn = document.getElementById('btn');
const srcArray = ['./images/images-image-lead-random/1800x800_1.jpg', '/images/images-image-lead-random/1800x800_2.jpg', '/images/images-image-lead-random/1800x800_3.jpg'];

randomImage();
window.onload=randomImage;
function randomImage() {
	const randomIndex = Math.floor(Math.random()*srcArray.length);
	if (randomIndex !== Number(localStorage.getItem('index'))) {
	imgEl.src = srcArray[randomIndex];
	localStorage.setItem('index', randomIndex);
	} else {
		randomImage();
	}
}
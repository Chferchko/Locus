const videoButton = document.getElementById('video-button');
const video = document.getElementById('works-video');
const visualBlock = document.getElementById('works-visual-block');

let isVideoOpen = () => visualBlock.classList.contains('init');

function toggleVisualClass() {
	visualBlock.classList.toggle('init');
};

function toggleButtonVisualClass() {
	videoButton.classList.toggle('init');
};

function addButtonCloseVisualClass() {
	videoButton.classList.add('close');
};

function removeButtonCloseVisualClass() {
	videoButton.classList.remove('close');
};

function toggleButtonCloseVisualClass() {
	video.paused ?	addButtonCloseVisualClass() :	removeButtonCloseVisualClass();
};

function reloadVideo() {
	video.load();
};

function playVideo() {
	video.play();
};

function pauseVideo() {
	video.pause();
};

function toggleVideoStatus() {
	video.paused && isVideoOpen() ? playVideo() : reloadVideo();
};

function toggleVideoStatusAfterTime(time) {
	setTimeout(toggleVideoStatus, time);
};

function onButtonClickEventHandler() {
	toggleButtonVisualClass();
	toggleVisualClass();
	toggleVideoStatusAfterTime(500);
	removeButtonCloseVisualClass();
};

videoButton.addEventListener("click", onButtonClickEventHandler);
video.addEventListener("pause", toggleButtonCloseVisualClass);
video.addEventListener("play", toggleButtonCloseVisualClass);
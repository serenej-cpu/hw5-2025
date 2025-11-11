var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = this.document.querySelector("#player1");
	video.autoplay = false;
	console.log("auto play is set to " + video.autoplay);
	video.loop = false;
	console.log("loop is set to " + video.loop);
	updateVolumeDisplay();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeDisplay();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Video speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = Math.min(video.currentTime + 10, video.duration);
	console.log("Current video location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if(video.muted) {
		this.textContent = "Unmute";
	} else {
		this.textContent = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	updateVolumeDisplay();
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	updateVolumeDisplay();
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

function updateVolumeDisplay() {
	var volumePercent = Math.round(video.volume * 100);
	document.querySelector("#volume").textContent = volumePercent + "%";
}
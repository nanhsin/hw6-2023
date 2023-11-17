var video;
video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window!");
	video.autoplay = false;
	console.log("Autoplay is set to", video.autoplay);
	video.loop = false;
	console.log("Loop is set to", video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted) {
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("The current volume is", video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
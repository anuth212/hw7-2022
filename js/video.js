var video;
let speed;
var mutedTF = false;
var volumeJS = 100;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	speed = video.playbackRate;
	
	console.log("Video speed is " + speed);
	console.log("Video is this long: " + video.duration);
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

	
	document.getElementById("play").addEventListener("click",playButton);
	document.getElementById("pause").addEventListener("click",pauseButton);
	document.getElementById("slower").addEventListener("click",slowVid);
	document.getElementById("faster").addEventListener("click",speedVid);
	document.getElementById("skip").addEventListener("click",skipVid);
	document.getElementById("mute").addEventListener("click",muteOrUnmute);
	document.getElementById("vintage").addEventListener("click",addOld);
	document.getElementById("orig").addEventListener("click",removeOld);
	document.getElementById("slider").addEventListener("input",changeVolume);
});



function playButton(){
	video.volume = volumeJS/100;
	var output = document.getElementById("volume");
	output.innerHTML = slider.value + "%";
	video.play();
	

}

function pauseButton(){
	video.pause();
}

function slowVid(){
	speed = speed * .9;
	video.playbackRate = speed;
	console.log("Video speed is now: " + speed);

}

function speedVid(){
	speed = speed * 1.1;
	video.playbackRate = speed;
	console.log("Video speed is now: " + speed);
}

function skipVid(){
	let skipNum = video.currentTime + 10;
	if(skipNum >= video.duration){
		skipNum = 0;

	}
	video.currentTime = skipNum;
	console.log("Video is now at: " + skipNum);
}

function muteOrUnmute(){
	if(mutedTF==true){
		mutedTF = false;
		document.getElementById("mute").innerHTML = "Mute";
	}else{
		mutedTF = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}

	video.muted = mutedTF;
	

}


function changeVolume(){
	var slider = document.getElementById("slider");
  	var output = document.getElementById("volume");
 	output.innerHTML = slider.value + "%";
	console.log(slider.value);
	
	volumeJS = slider.value;
	video.volume = volumeJS/100;
	
}


function addOld(){
	video.classList.add("oldSchool");
}

function removeOld(){
	video.classList.remove("oldSchool");
}
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


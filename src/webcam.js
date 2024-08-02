//--------------------
// GET USER MEDIA CODE
//--------------------
navigator.getUserMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

let video;
let webcamStream;

const startWebcam = () => {
	if (navigator.getUserMedia) {
		navigator.getUserMedia ({
			video: true,
			audio: false
		},
		// successCallback
		function(localMediaStream) {
			video = document.querySelector('video');
			video.src = window.URL.createObjectURL(localMediaStream);
			webcamStream = localMediaStream;
		},
		// errorCallback
		function(err) {
			console.log("The following error occured: " + err);
		});
	} else {
		console.log("getUserMedia not supported");
	}
};

const stopWebcam = () => {
	webcamStream.stop();
};

export {startWebcam, stopWebcam};


var video = document.getElementById("webcam");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;

            // Use face-api.js library to detect faces in video stream
            const faceDetector = new faceapi.TinyFaceDetectorOptions();
            faceapi.detectSingleFace(video, faceDetector).then(function (face) {
                if (face) {
                    // Draw a rectangle around the detected face
                    faceapi.drawDetection(video, face.detection);
                }
            });
        })
        .catch(function (error) {
            console.log("Something went wrong!");
        });
}


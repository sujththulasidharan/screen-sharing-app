const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const videoElement = document.getElementById('screenVideo');
let screenStream;

startButton.addEventListener('click', async () => {
    try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: true
        });
        videoElement.srcObject = screenStream;
    } catch (error) {
        console.error("Error: ", error);
        alert("Failed to start screen sharing: " + error.message);
    }
});

stopButton.addEventListener('click', () => {
    if (screenStream) {
        let tracks = screenStream.getTracks();
        tracks.forEach(track => track.stop());
        videoElement.srcObject = null;
    }
});

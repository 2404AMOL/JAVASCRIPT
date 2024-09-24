const camerafeed = document.getElementById("CameraFeed");

navigator.mediaDevices.getUserMedia({video: true}).then
(stream=>{
camerafeed.srcObject = stream;
})

.catch(error=>{
    console.log("Error Accessing Camera",error);
})
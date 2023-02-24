video = "";
status = "";
function preload() {
     video = createVideo('video.mp4');
     video.hide();
}
function setup() {
    canvas = createCanvas(480, 430);
    canvas.center();
    video.hide();
}
function draw() {
    image(video, 0, 0, 480, 300);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "estado: detectando objetos";
}
function modelLoaded() {
    console.log("modelo cargado");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
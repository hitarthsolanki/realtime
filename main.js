function preload() {

}
function setup() {
    canvas = createCanvas(200, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200, 200);
    video.hide(); 
}
function modelLoaded() {
    console.log('');
  }
  function draw() {
    image(video, 0, 0, 200, 200);
  }
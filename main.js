rightWristX = 0;
rightWristY = 0;
scorerightWrist = 0;
function setup(){
canvas = createCanvas(450 , 450);
canvas.center(); 
canvas.position(530 , 180);
video = createCapture(VIDEO);
video.size(450 , 450)
video.hide()
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
console.log('Model Loaded!');   
}
function draw(){
image(video , 0 , 0 , 450 , 450); 
if(scorerightWrist > 0.2){
circle(rightWristX , rightWristY , 20);
fill("#0000FF");
stroke("#000000");
}
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
scorerightWrist = results[0].pose.keypoints[10].score;
console.log("scorerightWrist = " + scorerightWrist); 
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}    
}
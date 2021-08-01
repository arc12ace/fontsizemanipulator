difference=0;
rightwristX=0;
leftwristYX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);

    canvas= createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    background('red');
    fill('white');
    stroke('white');
    text('Aadhya', 250, 250);
    textSize(difference);
    document.getElementById("font_size").innerHTML="Font size: " + difference + "px";
}

function modelLoaded(){
    console.log("PoseNet has been loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftWristX= " + leftwristX + " rightWristX= " + rightwristX + " difference= " + difference);
    }
}
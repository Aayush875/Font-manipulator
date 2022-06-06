noseX=0
noseY=0
LeftwristX=0
RightwristX=0
difference=0

function setup(){
canvas=createCanvas(550,550)
canvas.position(500,200)

video=createCapture(VIDEO)
video.size(500,500)

posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotPoses)
}

function modelloaded(){
    console.log("The posenet is loaded")
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y

    LeftwristX=results[0].pose.leftWrist.x
    LeftwristY=results[0].pose.leftWrist.y

    difference=floor(LeftwristX-RightwristX)
}
}

function draw(){
    background("lightgreen")
    document.getElementById("fontpx").innerHTML="Width and height of a font will be= "+ difference +"px"
    fill("black")
    stroke("grey")
    strokeWeight(5)
   text("Aayush",noseX,noseY)
   textSize(difference)
   
}


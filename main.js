function preload(){
clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}


function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
nose_x = 0
nose_y = 0
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}
function modelloaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    
    if(results.length > 0){
    console.log(results);
console.log("Nose x -" + results[0].pose.nose.x)
console.log("Nose y -" + results[0].pose.nose.y)
nose_x = results[0].pose.nose.x-15;
nose_y = results[0].pose.nose.y-15;
    }

}

function draw(){
image(video, 0,0, 300, 300);
image(clown_nose, nose_x, nose_y, 30, 30)

}


function take_snapshot(){
    save("filter_image.png");
}
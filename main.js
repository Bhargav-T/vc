function preload(){
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(110, 220);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
    rect(0, 0, 400, 30);
    rect(0, 370, 400, 30);
    rect(0, 0, 30, 400);
    rect(370, 0, 30, 400);
    fill(204, 101, 111, 127);
    stroke(127, 213, 120);
    triangle(300, 100, 320, 100, 310, 80);

}

function draw(){
    image(video, 25, 25, 350, 350);
    tint(tint_color);

}

function take_snapshot(){
    save("filter_pic.png");
}

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_img="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_img="car2.png";
car2_x=10;
car2_y=100;
background_img="racing.jpg";

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;
    
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_img;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="37") {
        car1left();
        console.log("car1Left");
    }
    if (keyPressed=="38") {
        car1up();
        console.log("car1Up");
    }
    if (keyPressed=="39") {
        car1right();
        console.log("car1Right");
    }
    if (keyPressed=="40") {
        car1down();
        console.log("car1Down");
    }
    if (keyPressed=="87"){
        car2up();
        console.log("car2Up");
    }
    if (keyPressed=="65") {
        car2left();
        console.log("car2Left");
    }
    if (keyPressed=="83") {
        car2down();
        console.log("car2Down");
    }
    if (keyPressed=="68") {
        car2right();
        console.log("car2Right");
    }
    if (car1_x>700) {
        console.log("Car 1 won!");
        document.getElementById("game_status").innerHTML="Car 1 Won!";
    }
    if (car2_x>700) {
        console.log("Car 2 won!");
        document.getElementById("game_status").innerHTML="Car 2 Won!";
    }
}

function car1left() {
    if (car1_x>=0) {
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1right() {
    if (car1_x<=700) {
        car1_x=car1_x+10;
        console.log("When right arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1up() {
    if (car1_y>=0) {
        car1_y=car1_y-10;
        console.log("When up arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1down() {
    if (car1_y<=500) {
        car1_y=car1_y+10;
        console.log("When down arrow is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2up() {
    if (car2_y>=0) {
        car2_y=car2_y-10;
        console.log("When w is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2down() {
    if (car2_y<=500) {
        car2_y=car2_y+10;
        console.log("When s is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2right() {
    if (car2_x<=700) {
        car2_x=car2_x+10;
        console.log("When d is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2left() {
    if (car2_x>=0) {
        car2_x=car2_x-10;
        console.log("When a is pressed, x= "+car1_x+" y= "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}



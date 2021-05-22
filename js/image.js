let img0,img1,img2,img3;
var w = window.innerWidth;
var h = window.innerHeight;
var radius=50;
var angle=0;
var speed=0.05;
function preload() {
  img0 = loadImage('data/marilia.png');		
  img1 = loadImage('data/NH2.png');
  img2 = loadImage('data/HOar.png');
  img3 = loadImage('data/HOab.png');
}
function setup() {
  canvas=createCanvas(w,h);
  
  //image(img1, width/4, height/2,img1.width/5,img1.height/5);
  //image(img2, 2*width/4, height/2,img2.width/5,img2.height/5);
  //image(img3, 3*width/4, height/2,img3.width/5,img3.height/5);
}
function draw() {
	image(img0, (width-img0.width/5)/2,(height-img0.height/5)/2,img0.width/5,img0.height/5);	
	if(mouseX<width/2){
		var x=img2.width/5 + radius * cos(angle);
		var y = img2.height/5 + radius * sin(angle);
		image(img2,width/3.5+x,height/3+y,img2.width/5, img2.height/5);
		image(img3,width/3.5+x,height/1.8+y,img3.width/5, img3.height/5);
		angle = angle + speed;
	}
	else{
		var x=img1.width/5 + radius * cos(angle);
		var y = img1.height/5 + radius * sin(angle);
		image(img1,width/1.9+x,height/3+y,img1.width/5, img1.height/5);
		angle = angle + speed;	
	}
}
function mouseClicked() {
	window.open("/masmedulab/marilia2.html","_self");
}
var colors = "8cb369-f4e285-f4a259-5b8e7d-bc4b51".split("-").map(a=>"#"+a)
class Ball{
	constructor(){  //預設值
	this.p = {x:random(width),y:random(height)}//物件的位置
	this.v = {x:random(-1,1),y:random(-1,1)} //物件的移動速率
	this.r = random(100,200)
	this.color = random(colors)
	}
}

var ball
var balls=[] //宣告一個陣列
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for(var i=0;i<100;i++){
	ball = new Ball()
	balls.push(ball)
	}
}

function draw() {
	background(0);
	for(var i=0;i<balls.length;i++){
		let ball = balls[i]
		fill(ball.color)
		circle(ball.p.x, ball.p.y, ball.r);
		ball.p.x=ball.p.x+ball.v.x
		ball.p.y=ball.p.y+ball.v.y
	}
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
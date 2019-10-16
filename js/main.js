let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');

let width = canv.width = window.innerWidth;
let height = canv.height = window.innerHeight;


document.body.appendChild(canv);
let ground = canv.height-100;


let xPlayer=100;
let yPlayer = ground-100;
let playerHeight=100;
let playerWidth=100;
let bulletRadius = 10;
let bulletSA=0;
let bulletEA=Math.PI*2;



let player = new Player(xPlayer,yPlayer,playerWidth,playerHeight,20);
let bullet = new Bullet(xPlayer+playerWidth/2,yPlayer-10,10);

let BULLETS=[];







loop();


function loop(){
	update();
	draw();


	requestAnimationFrame(loop);
};


function update() {
	player.update();
	bullet.update();
}


function draw(){
	ctx.clearRect(0,0,canv.width,canv.height);

	ctx.beginPath();
	ctx.moveTo(0,ground);
	ctx.lineTo(canv.width,ground);
	ctx.stroke();
	ctx.closePath();

	player.draw();
	bullet.draw();

};


document.addEventListener('keydown', e => {
	player.keyPress(e.keyCode);

});


document.addEventListener('keyup', e => {
	player.keyRelease(e.keyCode);

});
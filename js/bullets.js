class Bullet {
	constructor(x, y, r, v) {
		this.x = x;
		this.y = y;
		this.defaultY= y;
		this.r = r;
		this.sa = 0;
		this.ea = Math.PI*2;
		this.velocity = v;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r, this.sa, this.ea);
		ctx.fill();
		ctx.closePath();

	};

	update(player){
		if (this.y!==0) {
			
			this.y--;
		}else{
			this.y = this.defaultY;

		}


	};



	
}
class Player {
	constructor(x, y, w, h, v) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.velocity = v;
		this.keys={
			'37':false,
			'39':false
		};

		console.log();
	}



	draw() {
		ctx.strokeRect(this.x,this.y,this.w,this.h,this.v);

	}


	update() {
		if (this.keys['37']) {
			this.x-=20;
		}
		if (this.keys['39']) {
			this.x+=20;
		}
		this.x = Math.max(0,Math.min(width-this.w,this.x))
		BULLETS.push(new Bullet(this.x+this.w,this.y-10));
	}


	keyPress(keycode) {
		if (this.keys[keycode]!==undefined){
			this.keys[keycode]=true;	
		}
	}


	keyRelease(keycode){
		if (this.keys[keycode]!==undefined){
			this.keys[keycode]=false;
		}
	}





}
/* class Asteroid extends MovingObject {
	   constructor () {
			super();

			this.transform.width = 25;
			this.transform.height = 25;
		}

		start() {
			super.start();
			const renderer = this.getComponent('HtmlRendererGameComponent');
			if (renderer == null) {
				return;
			}
			(renderer as HtmlRendererGameComponent).element.addClass('asteroid');
		}

		update() {
			let oldTop = this.transform.top;
			let oldLeft = this.transform.left;

			super.update();

			if(this.checkCollision === false) {
				if(!GameManager.instance().isInsideGameArea(this)){
					return;
				}
				this.checkCollision = true;
			}
			const renderer = this.getComponent('HtmlRendererGameComponent');
			if (renderer == null) {
				return;
			}
			let gameAreaWidth = (renderer as HtmlRendererGameComponent).gameArea.width();
			let gameAreaHeight = (renderer as HtmlRendererGameComponent).gameArea.height();
			if(this.transform.top < 0 || this.transform.left < 0 ||
			(this.transform.left + this.transform.width) > gameAreaWidth ||
			(this.transform.top + this.transform.height) > gameAreaHeight) {
				this.checkRicochet(gameAreaWidth, gameAreaHeight);
				this.transform.top = oldTop;
				this.transform.left = oldLeft;
			}
		};

		checkRicochet(gameAreaWidth: number, gameAreaHeight: number){
			if((this.transform.top + this.transform.height) > gameAreaHeight){
				if(this.direction === MovingObjectDirection.southeast) {
					this.turnLeft(2);
				} else if(this.direction === MovingObjectDirection.south){
					this.direction = MovingObjectDirection.north;
				} else if(this.direction === MovingObjectDirection.southwest){
					this.turnRight(2);
				}
			}
			if((this.transform.left + this.transform.width) > gameAreaWidth){
				if(this.direction === MovingObjectDirection.northeast) {
					this.turnLeft(2);
				} else if(this.direction === MovingObjectDirection.east){
					this.direction = MovingObjectDirection.west;
				} else if(this.direction === MovingObjectDirection.southeast){
					this.turnRight(2);
				}
			}
			if(this.transform.top < 0){
				if(this.direction === MovingObjectDirection.northeast) {
					this.turnRight(2);
				} else if(this.direction === MovingObjectDirection.north){
					this.direction = MovingObjectDirection.south;
				} else if(this.direction === MovingObjectDirection.northwest){
					this.turnLeft(2);
				}
			}
			if(this.transform.left < 0){
				if(this.direction === MovingObjectDirection.northwest) {
					this.turnRight(2);
				} else if(this.direction === MovingObjectDirection.west){
					this.direction = MovingObjectDirection.east;
				} else if(this.direction === MovingObjectDirection.southwest){
					this.turnLeft(2);
				}
			}
			this.updateDirection();
		}

		draw() {
			super.draw();
		}

}*/


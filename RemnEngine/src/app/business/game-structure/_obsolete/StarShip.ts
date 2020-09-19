/*

class StarShip extends MovingObject {

    constructor(){
        super();
        this.transform.width = 50;
        this.transform.height = 50;
    }

    start() {
        super.start();

        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        (renderer as HtmlRendererGameComponent).element.addClass('starShip');

        setTimeout(() => {
            this.checkCollision = true;
        }, 3000);
    }

    update() {
        let oldTop = this.transform.top;
        let oldLeft = this.transform.left;

        super.update();
        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        let gameAreaWidth = (renderer as HtmlRendererGameComponent).gameArea.width();
        let gameAreaHeight = (renderer as HtmlRendererGameComponent).gameArea.height();
        if(this.transform.top < 0 || this.transform.left < 0 || (this.transform.left + this.transform.width) > gameAreaWidth ||
        (this.transform.top + this.transform.height) > gameAreaHeight) {
            this.checkRicochet(gameAreaWidth, gameAreaHeight);
            this.transform.top = oldTop;
            this.transform.left = oldLeft;
        }
    }

    checkRicochet(gameAreaWidth: number, gameAreaHeight: number){
        if((this.transform.top + this.transform.height) > gameAreaHeight){
            if(this.direction === MovingObjectDirection.southeast) {
                this.turnLeft(1);
            } else if(this.direction === MovingObjectDirection.south){
                this.direction = MovingObjectDirection.north;
            } else if(this.direction === MovingObjectDirection.southwest){
                this.turnRight(1);
            }
        }
        if((this.transform.left + this.transform.width) > gameAreaWidth){
            if(this.direction === MovingObjectDirection.northeast) {
                this.turnLeft(1);
            } else if(this.direction === MovingObjectDirection.east){
                this.direction = MovingObjectDirection.west;
            } else if(this.direction === MovingObjectDirection.southeast){
                this.turnRight(1);
            }
        }
        if(this.transform.top < 0){
            if(this.direction === MovingObjectDirection.northeast) {
                this.turnRight(1);
            } else if(this.direction === MovingObjectDirection.north){
                this.direction = MovingObjectDirection.south;
            } else if(this.direction === MovingObjectDirection.northwest){
                this.turnRight(1);
            }
        }
        if(this.transform.left < 0){
            if(this.direction === MovingObjectDirection.northwest) {
                this.turnRight(1);
            } else if(this.direction === MovingObjectDirection.west){
                this.direction = MovingObjectDirection.east;
            } else if(this.direction === MovingObjectDirection.southwest){
                this.turnRight(1);
            }
        }
        this.updateDirection();
    }

    onAction(action: Action) {
        if(action === Action.left) {
            this.turnLeft(1);
        }
        if(action === Action.right) {
            this.turnRight(1);
        }
        if(action === Action.forward) {
            this.speed++;
        }
        if(action === Action.backward) {
            this.speed--;
        }
        if(action === Action.fire) {
            let bullet = new Bullet();
            bullet.speed = this.speed + 1;
            bullet.direction = this.direction;

            if(this.direction === MovingObjectDirection.north) {
                bullet.transform.left = this.transform.left + (this.transform.width / 2 - bullet.transform.width / 2);
                bullet.transform.top = this.transform.top - bullet.transform.height;
            }

            if(this.direction === MovingObjectDirection.northeast) {
                bullet.transform.left = this.transform.left + this.transform.width;// - bullet.width;
                bullet.transform.top = this.transform.top - bullet.transform.height; // + bullet.height / 2;
            }

            if(this.direction === MovingObjectDirection.east) {
                bullet.transform.left = this.transform.left + this.transform.width;
                bullet.transform.top = (this.transform.top + this.transform.height / 2) - bullet.transform.height / 2;
            }

            if(this.direction === MovingObjectDirection.southeast) {
                bullet.transform.left = this.transform.left + this.transform.width;
                bullet.transform.top = this.transform.top + this.transform.height;
            }

            if(this.direction === MovingObjectDirection.south) {
                bullet.transform.left = this.transform.left + (this.transform.width / 2 - bullet.transform.width / 2);
                bullet.transform.top = this.transform.top + this.transform.height;
            }

            if(this.direction === MovingObjectDirection.southwest) {
                bullet.transform.left = this.transform.left - bullet.transform.width;
                bullet.transform.top = this.transform.top + this.transform.height;
            }

            if(this.direction === MovingObjectDirection.west) {
                bullet.transform.left = this.transform.left - bullet.transform.width;
                bullet.transform.top = this.transform.top + (this.transform.height / 2 - bullet.transform.height / 2);
            }

            if(this.direction === MovingObjectDirection.northwest) {
                bullet.transform.left = this.transform.left - bullet.transform.width;
                bullet.transform.top = this.transform.top - bullet.transform.height;
            }

            GameManager.instance().addGameObject(bullet);
        }
        if(this.speed < 0){
            this.speed = 0;
        }
    }

}
*/

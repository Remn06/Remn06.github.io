/*
class MovingObject extends IntersectObject {

    speed: number = 0;
    direction: MovingObjectDirection = MovingObjectDirection.east;

    constructor() {
        super();
    }

    update() {
        switch(this.direction){
            case MovingObjectDirection.north:
                this.transform.top -= this.speed;
                break;
            case MovingObjectDirection.northeast:
                this.transform.top -= this.speed;
                this.transform.left += this.speed;
                break;
            case MovingObjectDirection.east:
                this.transform.left += this.speed;
                break;
            case MovingObjectDirection.southeast:
                this.transform.top += this.speed;
                this.transform.left += this.speed;
                break;
            case MovingObjectDirection.south:
                this.transform.top += this.speed;
                break;
            case MovingObjectDirection.southwest:
                this.transform.top += this.speed;
                this.transform.left -= this.speed;
                break;
            case MovingObjectDirection.west:
                this.transform.left -= this.speed;
                break;
            case MovingObjectDirection.northwest:
                this.transform.top -= this.speed;
                this.transform.left -= this.speed;
                break;
        }
    }

    updateDirection() {
        let deg = this.direction * 45 - 90;
        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        (renderer as HtmlRendererGameComponent).element.css('transform', 'rotate('+deg+'deg)');
    }

    turnRight(steps: number){
        this.direction += steps;
        if(this.direction > 7){
            this.direction = this.direction - 8;
        }
        this.updateDirection();
    };

    turnLeft(steps: number) {
        this.direction -= steps;
        if(this.direction < 0) {
            this.direction = 8 + this.direction;
        }
        this.updateDirection();
    };
}
*/

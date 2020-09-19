/*class IntersectObject extends GameObject {
    checkCollision: boolean = true;
    drawTransparentCollision = true;

    draw() {
        super.draw();
        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        if(this.checkCollision === false && this.drawTransparentCollision === true) {
            (renderer as HtmlRendererGameComponent).element.addClass('halfTransparent');
        } else {
            (renderer as HtmlRendererGameComponent).element.removeClass('halfTransparent');
        }
    };

    intersects(gameObject: GameObject): boolean {
        if(
            (gameObject.transform.left >= this.transform.left &&
	            gameObject.transform.left <= this.transform.left + this.transform.width) &&
            (gameObject.transform.top >= this.transform.top &&
	            gameObject.transform.top <= this.transform.top + this.transform.height)
        ) {
            return true;
        }
        if(
            (gameObject.transform.left >= this.transform.left &&
	            gameObject.transform.left <= this.transform.left + this.transform.width) &&
            (gameObject.transform.top + gameObject.transform.height >= this.transform.top &&
	            gameObject.transform.top + gameObject.transform.height <= this.transform.top + this.transform.height)
        ) {
            return true;
        }
        if(
            (gameObject.transform.left + gameObject.transform.width >= this.transform.left &&
	            gameObject.transform.left + gameObject.transform.width <= this.transform.left + this.transform.width) &&
            (gameObject.transform.top + gameObject.transform.height >= this.transform.top &&
	            gameObject.transform.top + gameObject.transform.height <= this.transform.top + this.transform.height)
        ) {
            return true;
        }
        if(
            (gameObject.transform.left + gameObject.transform.width >= this.transform.left &&
	            gameObject.transform.left + gameObject.transform.width <= this.transform.left + this.transform.width) &&
            (gameObject.transform.top >= this.transform.top && gameObject.transform.top <= this.transform.top + this.transform.height)
        ) {
            return true;
        }

    }

}*/

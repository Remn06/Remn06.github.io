/*class Bullet extends MovingObject {

		constructor() {
			super();
			this.transform.width = 10;
			this.transform.height = 10;
		}

		start() {
			super.start();
			const renderer = this.getComponent('HtmlRendererGameComponent');
			if (renderer == null) {
				return;
			}
			(renderer as HtmlRendererGameComponent).element.addClass('bullet');
		}

		update() {
			super.update();
			const renderer = this.getComponent('HtmlRendererGameComponent');
			if (renderer == null) {
				return;
			}
			let gameAreaWidth = (renderer as HtmlRendererGameComponent).gameArea.width();
			let gameAreaHeight = (renderer as HtmlRendererGameComponent).gameArea.height();
			if (this.transform.top < 0 || this.transform.left < 0 ||
				(this.transform.left + this.transform.width) > gameAreaWidth ||
				(this.transform.top + this.transform.height) > gameAreaHeight) {
				GameManager.instance().removeGameObject(this);
			}
		}

}*/


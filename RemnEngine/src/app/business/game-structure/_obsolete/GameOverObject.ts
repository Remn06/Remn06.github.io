/*class GameOverObject extends GameObject {
    private gameOverText: string = 'GAME OVER';

    constructor(){
        super();
    }

    public start() {
        super.start();
        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        (renderer as HtmlRendererGameComponent).element.addClass('gameOverText');
        (renderer as HtmlRendererGameComponent).element.css({
            'width': '',
            'height': ''
        });
    }

    public draw() {
        super.draw();
        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        (renderer as HtmlRendererGameComponent).element.text(this.gameOverText);
    }

    public update() {
        super.update();
        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        this.transform.left = (renderer as HtmlRendererGameComponent).gameArea.width() / 2 - (renderer as HtmlRendererGameComponent).element.width() / 2;
        this.transform.top = (renderer as HtmlRendererGameComponent).gameArea.height() / 2 - (renderer as HtmlRendererGameComponent).element.height() / 2;
    }

}*/

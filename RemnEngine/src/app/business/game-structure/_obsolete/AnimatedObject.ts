/*

class AnimatedObject extends GameObject {

    protected slide = 0;
    private counter = 0;
    private xScale: number = 1;
    private yScale: number = 1;

    constructor (protected pathToTexture: string, protected slideWidth: number, protected slideHeight: number,
                 protected slidesCount: number, protected slidesInARow: number, protected animationSpeed: number,
                 protected repeat: boolean, private animationFinished: Function) {
        super();
    }

    start() {
        super.start();
        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        (renderer as HtmlRendererGameComponent).element.css({'background-image': 'url("'+this.pathToTexture+'")'});
        (renderer as HtmlRendererGameComponent).element.css({'position': 'absolute'});

        this.xScale = this.slideWidth / this.transform.width;
        this.yScale = this.slideHeight / this.transform.height;
        let backgroundXSize = ((this.slideWidth * this.slidesInARow) / this.xScale);
        let backgroundYSize = ((Math.ceil(this.slidesCount / this.slidesInARow) * this.slideHeight) / this.yScale);


        (renderer as HtmlRendererGameComponent).element.css({'background-size':  backgroundXSize + 'px ' + backgroundYSize + 'px'});
    }
    draw() {
        super.draw();

        let y = Math.floor(this.slide / this.slidesInARow);
        let x = this.slide - (y * this.slidesInARow) - 1;
        let xShift = (x * (this.slideWidth / this.xScale));
        let yShift = (y * (this.slideHeight / this.yScale));
        let backPos = '-' + xShift + 'px -' + yShift + 'px';

        const renderer = this.getComponent('HtmlRendererGameComponent');
        if (renderer == null) {
            return;
        }
        (renderer as HtmlRendererGameComponent).element.css({'background-position':  backPos});
    }
    update() {
        this.slide++;
        if(this.slide >= this.slidesCount) {
            if(this.animationFinished != null) {
                this.animationFinished();
            }
            this.slide = 0;
        }
        super.update();
    }
}
*/

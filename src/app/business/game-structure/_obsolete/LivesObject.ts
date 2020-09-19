/* class LivesObject extends GameObject {
 private lives: number = null;
   private elementWidth: number = 25;
   private drawnLives: number = 0;

   constructor() {
	   super();
	   this.transform.width = this.elementWidth * this.lives;
   }

   public start(){
	   super.start();

   }

   public draw() {
	   super.draw();
	   const renderer = this.getComponent('HtmlRendererGameComponent');
	   if (renderer == null) {
		   return;
	   }
	   if(this.drawnLives === this.lives) {
		   return;
	   }
	   (renderer as HtmlRendererGameComponent).element.empty();
	   for(let i = 0; i < this.lives; i++) {
		   let liveElement = $('<div class="livesIndicatorElement"></div>');
		   liveElement.css({
			   'left': i * this.elementWidth + 'px'
		   });

		   (renderer as HtmlRendererGameComponent).element.append(liveElement);
	   }
	   this.drawnLives = this.lives;
   }

   public update(){
	   super.update();
	   this.lives = GameManager.instance().getLives();
   }
}
*/

import { GameComponent } from '../base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { HtmlRendererGameComponent } from '../html-renderer-game-component/html-renderer-game-component';
import { Timer } from '../../../common/timer';

@Exclude()
export class AnimateGameComponent extends GameComponent {

	@Expose()
	public name = AnimateGameComponent.name;

	@Expose()
	public pathToTexture: string;
	@Expose()
	public slideWidth: number;
	@Expose()
	public slideHeight: number;
	@Expose()
	public slidesInARow: number;
	@Expose()
	public slidesCount: number;
	@Expose()
	public animationSpeed: number;

	public repeat: boolean;
	public animationFinished: () => void;

	private slide = 0;
	private xScale = 1;
	private yScale = 1;

	private baseCss = '';
	private backPos = '0 0;';
	private counter = 0;

	private paused = false;

	start() {
		const renderer = this.gameObject.getComponent(HtmlRendererGameComponent.name) as HtmlRendererGameComponent;
		if (renderer == null) {
			return;
		}

		this.xScale = this.slideWidth / this.gameObject.transform.width;
		this.yScale = this.slideHeight / this.gameObject.transform.height;
		const backgroundXSize = ((this.slideWidth * this.slidesInARow) / this.xScale);
		const backgroundYSize = ((Math.ceil(this.slidesCount / this.slidesInARow) * this.slideHeight) / this.yScale);

		this.baseCss =
			'position: absolute; ' +
			'background-size:' + backgroundXSize + 'px ' + backgroundYSize + 'px;';
	}

	draw() {
		const renderer = this.gameObject.getComponent(HtmlRendererGameComponent.name) as HtmlRendererGameComponent;
		if (renderer == null) {
			return;
		}
		renderer.addAdditionalCss(this.baseCss + ' background-position:' + this.backPos);
	}

	update() {

		if (this.paused === true) {
			return;
		}

		const timeToChange = 1 / this.animationSpeed;

		this.counter += Timer.delta;

		if (this.counter < timeToChange) {
			return;
		}

		this.counter = 0;

		if (this.slide >= this.slidesCount) {
			if (this.animationFinished != null) {
				this.animationFinished();
			}
			this.slide = 0;
		}

		const y = Math.floor(this.slide / this.slidesInARow);
		const x = this.slide - (y * this.slidesInARow);
		const xShift = (x * (this.slideWidth / this.xScale));
		const yShift = (y * (this.slideHeight / this.yScale));
		this.backPos = '-' + xShift + 'px -' + yShift + 'px;';
		this.slide++;
	}

	destroy(): void {
	}

	public isPaused(): boolean {
		return this.paused;
	}

	public PauseAnimation(): void {
		this.paused = true;
	}

	public ResumeAnimation(): void {
		this.paused = false;
	}
}


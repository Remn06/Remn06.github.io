import { GameObject } from '../../../game-structure/game-object';
import { GameComponent } from '../base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { GameObjectRenderInfo } from './game-object-render-info';

@Exclude()
export class HtmlRendererGameComponent extends GameComponent {

	@Expose()
	public name = HtmlRendererGameComponent.name;

	@Expose()
	public backgroundImage: string;

	@Expose()
	public cssStyle: string;

	public gameObject: GameObject;

	public renderInfo: GameObjectRenderInfo;

	private additionalCss = '';
	private image: HTMLImageElement;

	start(): void {
		this.renderInfo = GameObjectRenderInfo.fromGameObject(this.gameObject);

		// todo this is a pre-load of the images, but it should be moved into the initial game loading procedure with progress bar.
		if (this.backgroundImage != null) {
			this.image = new Image();
			this.image.src = this.backgroundImage;
		}
	}

	draw(): void {
		this.renderInfo.height = this.gameObject.transform.height;
		this.renderInfo.width = this.gameObject.transform.width;
		this.renderInfo.left = this.gameObject.transform.position.x - (this.gameObject.transform.width / 2);
		this.renderInfo.top = this.gameObject.transform.position.y - (this.gameObject.transform.height / 2);
		this.renderInfo.rotation = this.gameObject.transform.rotation;
		this.renderInfo.backgroundImage = this.backgroundImage != null ? 'url("' + this.backgroundImage + '")' : null;
		this.renderInfo.text = this.gameObject.text;
		this.renderInfo.cssStyle = this.cssStyle + ' ' + this.additionalCss;
		this.additionalCss = ''; // cleanUp;
	}

	update(): void {
	}

	destroy(): void {
	}

	public addAdditionalCss(css: string): void {
		this.additionalCss += css;
	}
}


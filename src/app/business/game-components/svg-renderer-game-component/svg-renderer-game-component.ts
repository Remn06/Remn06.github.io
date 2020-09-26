import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../core/base/game-component';
import { GameObject } from '../../game-structure/game-object';
import { SvgElementType } from './svg-element-type';
import { Vector2 } from '../../common/vector2';
import { SvgPathElement } from './svg-path-element';


@Exclude()
export class SvgRendererGameComponent extends GameComponent {

	@Expose()
	public name = SvgRendererGameComponent.name;

	@Expose()
	public type: SvgElementType;

	@Expose()
	public x: number;

	@Expose()
	public y: number;

	@Expose()
	public x1: number;

	@Expose()
	public y1: number;

	@Expose()
	public r: number;

	@Expose()
	public stroke = '#000';

	@Expose()
	public fill = 'transparent';

	@Expose()
	public strokeWidth = 1;

	@Expose()
	public strokeDasharray = '0';

	@Expose()
	public pathElements: SvgPathElement[] = [];

	public gameObject: GameObject;

	public svgElement: string;

	start(): void {
	}

	draw(): void {
		switch (this.type) {
			case SvgElementType.Line:
				const from = this.toGlobal(this.x, this.y);
				const to = this.toGlobal(this.x1, this.y1);
				this.svgElement = `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" ${this.commonAttributes()}/>`;
				break;
			case SvgElementType.Circle:
				const cFrom = this.toGlobal(this.x, this.y);
				this.svgElement = `<Circle cx="${cFrom.x}" cy="${cFrom.y}" r="${this.r}" ${this.commonAttributes()}/>`;
				break;
			case SvgElementType.Rect:
				const rFrom = this.toGlobal(this.x, this.y);
				this.svgElement = `<Rect x="${rFrom.x}" y="${rFrom.y}"
									width="${this.gameObject.transform.width} height="${this.gameObject.transform.height}"
									${this.commonAttributes()}/>`;
				break;
			case SvgElementType.Path:
				this.svgElement = `<Path d="${this.getPath()}" ${this.commonAttributes()}/>`;
				break;
		}
	}

	update(): void {
	}

	destroy(): void {
	}

	private toGlobal(x: number, y: number): Vector2 {
		const globalPosition = this.gameObject.transform.position;
		return new Vector2(globalPosition.x + x, globalPosition.y + y);
	}

	private rotateString(): string {
		const globalPosition = this.gameObject.transform.position;
		return `${this.gameObject.transform.rotation} ${globalPosition.x} ${globalPosition.y}`;
	}

	private commonAttributes(): string {
		return `stroke="${this.stroke}" fill="${this.fill}"
									stroke-width="${this.strokeWidth}" stroke-dasharray='${this.strokeDasharray}'
									transform="rotate(${this.rotateString()})"`;
	}

	private getPath(): string {
		const globalPosition = this.gameObject.transform.position;
		return this.pathElements.map((element) => element.toString(globalPosition.x, globalPosition.y)).join(' ');
	}
}


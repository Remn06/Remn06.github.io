import { Exclude, Expose } from 'class-transformer';
import { Vector2 } from './vector2';

@Exclude()
export class Rect {

	@Expose()
	public left: number;

	@Expose()
	public top: number;

	@Expose()
	public width: number;

	@Expose()
	public height: number;

	public constructor(left: number, top: number, width: number, height: number) {
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
	}

	public get right(): number {
		return this.left + this.width;
	}

	public set right(value: number) {
		this.width = value - this.left;
	}

	public get bottom(): number {
		return this.top + this.height;
	}

	public set bottom(value: number) {
		this.height = value - this.top;
	}

	public isInside(point: Vector2): boolean {
		return this.isInsideXY(point.x, point.y);
	}

	public isInsideXY(x: number, y: number): boolean {
		return (x >= this.left) && (x <= this.right) && (y >= this.top) && (y <= this.bottom);
	}

	public intersects(rect: Rect): boolean {
		return this.isInsideXY(rect.left, rect.top) ||
			this.isInsideXY(rect.right, rect.top) ||
			this.isInsideXY(rect.left, rect.bottom) ||
			this.isInsideXY(rect.right, rect.bottom) ||
			rect.isInsideXY(this.left, this.top) ||
			rect.isInsideXY(this.right, this.top) ||
			rect.isInsideXY(this.left, this.bottom) ||
			rect.isInsideXY(this.right, this.bottom);
	}
}

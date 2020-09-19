import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class Vector2 {

	public static get zero() {
		return new Vector2(0, 0);
	}

	public static get one() {
		return new Vector2(1, 1);
	}

	@Expose()
	public x: number;
	@Expose()
	public y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public subtract(value: Vector2): Vector2 {
		return new Vector2(this.x - value.x, this.y - value.y);
	}

	public add(value: Vector2): Vector2 {
		return new Vector2(this.x + value.x, this.y + value.y);
	}

	public clone(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	public equalTo(vector: Vector2): boolean {
		return this.x === vector.x && this.y === vector.y;
	}
}

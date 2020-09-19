import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class Vector3 {

	public static get zero() {
		return new Vector3(0, 0, 0);
	}

	public static get one() {
		return new Vector3(1, 1, 1);
	}

	@Expose()
	public x: number;
	@Expose()
	public y: number;
	@Expose()
	public z: number;

	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public subtract(value: Vector3): Vector3 {
		return new Vector3(this.x - value.x, this.y - value.y, this.z - value.z);
	}

	public add(value: Vector3): Vector3 {
		return new Vector3(this.x + value.x, this.y + value.y, this.z + value.z);
	}

	public clone(): Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}

	public equalTo(vector: Vector3): boolean {
		return this.x === vector.x && this.y === vector.y && this.z === vector.z;
	}
}

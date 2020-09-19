import { Vector2 } from './vector2';

// http://gamedevelopertips.com/vector-in-game-development/
export class VMath {
	public static multiply(vector: Vector2, scalar: number): Vector2 {
		return new Vector2(vector.x * scalar, vector.y * scalar);
	}

	public static add(vector: Vector2, vector1: Vector2): Vector2 {
		return new Vector2(vector.x + vector1.x, vector.y + vector1.y);
	}

	// https://matthew-brett.github.io/teaching/rotation_2d.html
	public static rotate(vector: Vector2, angleDegrees: number): Vector2 {
		// x2=cos(β)x1−sin(β)y1
		// y2=sin(β)x1+cos(β)y1
		const angle = VMath.toRad(angleDegrees);
		const x2 = vector.x * Math.cos(angle) - vector.y * Math.sin(angle);
		const y2 = vector.x * Math.sin(angle) + vector.y * Math.cos(angle);
		return new Vector2(x2, y2);
	}

	public static toRad(angleDegrees: number): number {
		return angleDegrees * Math.PI / 180;
	}

	public static randIntMaxIncluded(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	public static randIntMaxExcluded(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
}

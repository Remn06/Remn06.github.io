import { Vector2 } from '../../common/vector2';
import { Transform } from '../../game-structure/transform';

export class TransformFactory {
	public static createTransform(position: Vector2, width: number, height: number, rotation: number): Transform {
		return Transform.instantiate(position, rotation, width, height);
	}

	public static createChildTransform(
			parent: Transform,
			localPosition: Vector2,
			width: number,
			height: number,
			rotation: number): Transform {
		return Transform.instantiateChild(parent, localPosition, rotation, width, height);
	}
}

import { Vector2 } from '../../common/vector2';
import { Transform } from '../../game-structure/transform';

export class TransformFactory {
	public static createGlobalTransform(
			parent: Transform,
			globalPosition: Vector2,
			width: number,
			height: number,
			rotation: number): Transform {
		return Transform.instantiateGlobal(parent, globalPosition, rotation, width, height);
	}

	public static createLocalTransform(
			parent: Transform,
			localPosition: Vector2,
			width: number,
			height: number,
			rotation: number): Transform {
		return Transform.instantiateLocal(parent, localPosition, rotation, width, height);
	}
}

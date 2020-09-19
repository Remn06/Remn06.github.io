import { Exclude, Expose, Type } from 'class-transformer';
import { Vector2 } from '../common/vector2';
import { GameObject } from './game-object';
import { VMath } from '../common/v-math';
import { TransformCalculateSystem } from '../core/transform-calculate-system';
import { Rect } from '../common/rect';

@Exclude()
export class Transform {

	@Expose()
	@Type(() => Vector2)
	private positionValue: Vector2 = null;

	@Expose()
	@Type(() => Vector2)
	private localPositionValue: Vector2 = null;

	@Expose()
	private rotationValue: number = null;

	@Expose()
	private localRotationValue: number = null;

	@Expose()
	public width: number = null;

	@Expose()
	public height: number = null;

	public gameObject: GameObject = null;

	public static instantiate(position: Vector2, rotation: number, width: number, height: number): Transform {
		const t = new Transform();
		t.positionValue = position;
		t.localPositionValue = position;
		t.rotationValue = rotation;
		t.localRotationValue = rotation;
		t.width = width;
		t.height = height;
		return t;
	}

	public static instantiateChild(
			parent: Transform,
			localPosition: Vector2,
			rotation: number,
			width: number,
			height: number): Transform {
		const t = new Transform();
		t.positionValue = parent.position.add(localPosition);
		t.localPositionValue = localPosition;
		t.rotationValue = parent.rotation + rotation;
		t.localRotationValue = rotation;
		t.width = width;
		t.height = height;
		return t;
	}

	public get position(): Vector2 {
		return this.positionValue;
	}

	public set position(value: Vector2) {
		this.positionValue = value;
	}

	public get localPosition(): Vector2 {
		return this.localPositionValue;
	}

	public set localPosition(value: Vector2) {
		this.localPositionValue = value;
		TransformCalculateSystem.instance().registerForUpdate(this);
	}

	public get rotation(): number {
		return this.rotationValue;
	}

	public set rotation(value: number) {
		this.rotationValue = value;
	}

	public get localRotation() {
		return this.localRotationValue;
	}

	public set localRotation(value: number) {
		this.localRotationValue = value;
		TransformCalculateSystem.instance().registerForUpdate(this);
	}

	public toRect(): Rect {
		const w2 = this.width / 2;
		const h2 = this.height / 2;
		return new Rect(this.position.x - w2, this.position.y - h2, this.width, this.height);
	}
}

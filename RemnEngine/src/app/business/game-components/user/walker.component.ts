import { GameComponent } from '../core/base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { Rect } from '../../common/rect';
import { Vector2 } from '../../common/vector2';
import { VMath } from '../../common/v-math';
import { Timer } from '../../common/timer';
import { Angle } from '../../common/angle';

enum WalkerOperation {
	None = 'None',
	MoveTo = 'MoveLeft',
	Weld = 'Welding'
}

interface MoveToWithRotate {
	moveToVector: Vector2;
	toAngle: Angle;
	isRotating: boolean;
}

@Exclude()
export class WalkerComponent extends GameComponent  {

	public name = WalkerComponent.name;

	@Expose()
	public walkArea: Rect = null;

	@Expose()
	public moveSpeed: number = null;

	@Expose()
	public rotateSpeed: number = null;

	private operations: Map<WalkerOperation, () => void> = new Map<WalkerOperation, () => void>();

	private currentOperation: WalkerOperation = WalkerOperation.None;
	private startTime: number;
	private waitMSecs: number;

	private moveToWithRotateData: MoveToWithRotate;

	constructor() {
		super();
		this.operations.set(WalkerOperation.None, () => {});
		this.operations.set(WalkerOperation.MoveTo, () => { this.moveToOperation(); });
		this.operations.set(WalkerOperation.Weld, () => { this.weldOperation(); });
	}

	public start(): void {
	}

	public draw(): void {
	}

	public update(): void {
		if (this.currentOperation === WalkerOperation.None) {
			this.startNewRandomOperation();
		}
		this.operations.get(this.currentOperation)();
	}

	public destroy(): void {
	}

	private startNewRandomOperation(): void {
		const operation = VMath.randIntMaxIncluded(0, 1);
		switch (operation) {
			case 0:
				this.currentOperation = WalkerOperation.MoveTo;
				const angle = Angle.rand();
				this.moveToWithRotateData = {
					toAngle: new Angle(angle),
					moveToVector: VMath.rotate(new Vector2(0, 1), angle),
					isRotating: true
				};
				break;
			case 1:
				// todo weld (sparks)
				this.startTime = Timer.getTime();
				this.waitMSecs = 2000;
				this.currentOperation = WalkerOperation.Weld;
				break;
		}
	}

	private moveToOperation(): void {
		if (this.moveToWithRotateData.isRotating) {
			const angle = new Angle(this.gameObject.transform.localRotation);
			if (angle.rotateTo(this.moveToWithRotateData.toAngle, this.rotateSpeed * Timer.delta)) {
				this.moveToWithRotateData.isRotating = false;
			}
			this.gameObject.transform.localRotation = angle.value;
			// return;
		}

		const pos = this.gameObject.transform.localPosition;
		const newPos = pos.add(VMath.multiply(this.moveToWithRotateData.moveToVector, this.moveSpeed * Timer.delta));

		if (!this.walkArea.isInside(newPos)) {
			this.currentOperation = WalkerOperation.None;
			return;
		}

		this.gameObject.transform.localPosition = newPos;
	}

	private weldOperation(): void {
		if (this.startTime + this.waitMSecs > Timer.getTime()) {
			this.currentOperation = WalkerOperation.None;
		}
	}
}

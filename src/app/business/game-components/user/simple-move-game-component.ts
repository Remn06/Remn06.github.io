import { GameComponent } from '../core/base/game-component';
import { Timer } from '../../common/timer';
import { Vector2 } from '../../common/vector2';
import { Exclude, Expose, Type } from 'class-transformer';
import { VMath } from '../../common/v-math';

@Exclude()
export class SimpleMoveGameComponent extends GameComponent {

	public name = SimpleMoveGameComponent.name;

	@Expose()
	public speed = null;

	@Expose()
	public rotation = null;

	@Expose()
	@Type(() => Vector2)
	public direction: Vector2 = null;

	start(): void {
	}

	draw(): void {
	}

	update(): void {

		let angle = this.gameObject.transform.rotation;
		angle += this.rotation * Timer.delta;
		if (angle > 360) {
			angle = angle - 360;
		}
		const position = this.gameObject.transform.localPosition;

		const direction = VMath.rotate(new Vector2(1, 0), angle);


		this.gameObject.transform.localPosition = VMath.add(position, VMath.multiply(direction, this.speed * Timer.delta));
		this.gameObject.transform.localRotation = angle;
	}

	destroy(): void {
	}
}





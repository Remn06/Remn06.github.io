import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../core/base/game-component';
import { Timer } from '../../common/timer';
import { Vector2 } from '../../common/vector2';

@Exclude()
export class ShiftRightComponent extends GameComponent {

	public name = ShiftRightComponent.name;

	@Expose()
	public speed = null;

	start(): void {
	}

	draw(): void {
	}

	update(): void {
		const x = this.gameObject.transform.localPosition.x + this.speed * Timer.delta;
		const y = this.gameObject.transform.localPosition.y;
		this.gameObject.transform.localPosition = new Vector2(x, y);
	}

	destroy(): void {
	}
}


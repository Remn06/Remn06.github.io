import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../core/base/game-component';
import { Vector2 } from '../../common/vector2';
import { Timer } from '../../common/timer';


@Exclude()
export class TestOneComponent extends GameComponent {

	public name = TestOneComponent.name;

	public startX: number;
	public stopX: number;
	public speed: number;

	start(): void {
		this.gameObject.transform.localPosition = new Vector2(this.startX, this.gameObject.transform.localPosition.y);
	}

	draw(): void {
	}

	update(): void {
		const currentPos = this.gameObject.transform.localPosition;
		if (currentPos.x >= this.stopX) {
			return;
		}
		const offsetX = this.speed * Timer.delta;
		this.gameObject.transform.localPosition = new Vector2(currentPos.x + offsetX, currentPos.y);
		if (this.gameObject.transform.localPosition.x > this.stopX) {
			this.gameObject.transform.localPosition = new Vector2(this.stopX, currentPos.y);
		}
	}

	destroy(): void {
	}
}

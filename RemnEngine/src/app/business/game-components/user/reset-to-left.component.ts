import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../core/base/game-component';
import { Vector2 } from '../../common/vector2';

@Exclude()
export class ResetToLeftComponent extends GameComponent {

	public name = ResetToLeftComponent.name;

	start(): void {
	}

	draw(): void {
	}

	update(): void {
		if (this.gameObject.transform.position.x > 1920) {
			this.gameObject.transform.localPosition = new Vector2(-100, this.gameObject.transform.localPosition.y);
		}
	}

	destroy(): void {
	}
}


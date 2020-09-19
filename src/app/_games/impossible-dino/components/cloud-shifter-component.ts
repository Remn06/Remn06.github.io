import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Vector2 } from '../../../business/common/vector2';
import { Timer } from '../../../business/common/timer';
import { GameScreen } from '../../../business/screen/game-screen';
import { Expose } from 'class-transformer';
import { VMath } from '../../../business/common/v-math';

export class CloudShifterComponent extends GameComponent {
	name: string = CloudShifterComponent.name;

	@Expose()
	speed: number;

	@Expose()
	margin: number;

	@Expose()
	skyHeight: number;

	start(): void {
	}

	draw(): void {
	}

	update(): void {
		const position = this.gameObject.transform.localPosition;
		const newPosition = new Vector2(position.x - this.speed * Timer.delta, position.y);
		const cloudWidth = this.gameObject.transform.width;
		const cloudHeight = this.gameObject.transform.height;

		if (newPosition.x <= (0 - cloudWidth / 2 - this.margin) ) {
			// todo random cloud x
			newPosition.x = GameScreen.getDefaultScreen().width + cloudWidth / 2 + this.margin;
			newPosition.y = VMath.randIntMaxIncluded(cloudHeight / 2, this.skyHeight);
		}
		this.gameObject.transform.localPosition = newPosition;
	}

	destroy(): void {
	}
}

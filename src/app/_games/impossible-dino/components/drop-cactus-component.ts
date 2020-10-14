import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { Vector2 } from '../../../business/common/vector2';
import { VMath } from '../../../business/common/v-math';
import { Timer } from '../../../business/common/timer';

@Exclude()
export class DropCactusComponent extends GameComponent {
	name: string = DropCactusComponent.name;

	@Expose()
	direction: Vector2;

	@Expose()
	force: number;

	private liveTimer;

	start() {
		this.liveTimer = 0;
	}

	draw() {
	}

	update() {
		this.liveTimer++;
		const position = this.gameObject.transform.localPosition;
		const newPos = position.add(VMath.multiply(this.direction, this.force * Timer.delta));
		newPos.y = newPos.y + ((9.8 * 9.8) * (this.liveTimer * Timer.delta));
		this.gameObject.transform.localPosition = newPos;
	}

	destroy() {
	}
}

import {GameComponent} from '../../../business/game-components/core/base/game-component';
import { Exclude, Expose } from 'class-transformer';
import {Vector2} from '../../../business/common/vector2';
import {Timer} from '../../../business/common/timer';
import {Input} from '../../../business/input/input';
import {MouseButtonType, MouseInputEvent} from '../../../business/input/dto/mouse-input-event';

@Exclude()
export class DinoJumperComponent extends GameComponent {
	name: string = DinoJumperComponent.name;

	@Expose()
	durationOfJump: number;
	@Expose()
	jumpHeight: number;

	private initialY: number;
	private isJumping = false;
	private startTime: number;

	start(): void {
	}

	draw(): void {
	}

	update(): void {

		const isKeyPressed = Input.getKey('ArrowUp') === true || Input.getKey('Space') === true;

		const mouseEvents = Input.getMouseDown();

		const isLeftMousePressed = mouseEvents.some((event: MouseInputEvent) => event.button === MouseButtonType.left);

		if ((isKeyPressed || isLeftMousePressed) && this.isJumping === false) {
			this.isJumping = true;
			this.initialY = this.gameObject.transform.localPosition.y;
			this.startTime = Timer.getTime();
		}
		if (this.isJumping === true) {
			const k = this.jumpHeight / Math.pow(this.durationOfJump, 2);
			const t = (Timer.getTime() - this.startTime) / 1000 - this.durationOfJump;

			const y = k * (t * t) - this.jumpHeight;

			const currentTransform = this.gameObject.transform;
			const currentPosition = currentTransform.localPosition;

			const newPosition = new Vector2(currentPosition.x, this.initialY + y);
			if (t > this.durationOfJump) {
				this.isJumping = false;
				currentTransform.localPosition = new Vector2(currentPosition.x, this.initialY);
				return;
			}

			currentTransform.localPosition = newPosition;
		}
	}

	destroy(): void {
	}

}

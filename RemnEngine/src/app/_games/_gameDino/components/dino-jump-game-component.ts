import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Input } from '../../../business/input/input';
import { Vector2 } from '../../../business/common/vector2';
import { Timer } from '../../../business/common/timer';
import { SoundPlayerGameComponent } from '../../../business/game-components/core/sound-player-game-component';

@Exclude()
export class DinoJumpGameComponent extends GameComponent  {

	public name = DinoJumpGameComponent.name;

	@Expose()
	public height: number;
	@Expose()
	public speed: number;

	public isJumping = false;
	private currentY = 0;
	private startY = 0;
	private starTime = 0;
	private movingUp = true;
	private movingSpeed = 0;

	private player: SoundPlayerGameComponent;

	public start(): void {
		this.player = this.gameObject.getComponent(SoundPlayerGameComponent.name) as SoundPlayerGameComponent;
	}

	public draw(): void {
	}

	public update(): void {
		if ((Input.getKey('Space') || Input.getKey('ArrowUp')) && !this.isJumping) {
			this.isJumping = true;
			this.startY = this.gameObject.transform.localPosition.y;
			this.currentY = this.startY;
			this.movingUp = true;
			this.movingSpeed = this.speed;
			this.starTime = Timer.getTime();
			this.player.play('jump');
		}

		if (this.isJumping === true ) {
			// this.moveWithoutGravity();
			this.moveWithGravity();

			this.gameObject.transform.localPosition = new Vector2(this.gameObject.transform.localPosition.x, this.currentY);
		}
	}

	public destroy(): void {
	}

	private moveWithGravity(): void {
		const axisX = Timer.getTime() - this.starTime - 250;
		const axisY = (-((axisX * axisX) / 625)) + 100;
		if (axisY < 0) {
			this.currentY = this.startY;
			this.isJumping = false;
		} else {
			this.currentY = this.startY - axisY;
		}
	}

	private moveWithoutGravity(): void {
		if (this.movingUp === true) {
			this.currentY -= this.movingSpeed * Timer.delta;
		}

		if (this.movingUp === false) {
			this.currentY += this.movingSpeed * Timer.delta;
		}

		const currentHeight = this.startY - this.currentY;
		if ((currentHeight) >= this.height) {
			this.movingUp = false;
		}

		if (this.movingUp === false && currentHeight <= 0) {
			this.isJumping = false;
			this.currentY = this.startY;
		}
	}
}

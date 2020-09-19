import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Timer } from '../../../business/common/timer';

@Exclude()
export class ScoreGameComponent extends GameComponent  {

	public name = ScoreGameComponent.name;

	private hiScore = 0;
	private score = 0;

	private counter = 0;

	public start(): void {
	}

	public draw(): void {
		this.gameObject.text = `HI ${this.hiScore} ${this.score}`;
	}

	public update(): void {
		this.counter += Timer.delta;
		if (this.counter < 0.1) {
			return;
		}
		this.counter = 0;
		this.score++;
		if (this.hiScore < this.score) {
			this.hiScore = this.score;
		}
	}

	public destroy(): void {
	}

	public reset(): void {
		this.score = 0;
	}
}

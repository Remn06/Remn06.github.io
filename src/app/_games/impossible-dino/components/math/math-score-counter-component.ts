import { Exclude } from 'class-transformer';
import { GameComponent } from '../../../../business/game-components/core/base/game-component';


@Exclude()
export class MathScoreCounterComponent extends GameComponent  {

	public name = MathScoreCounterComponent.name;

	private hiScore = 0;
	private score = 0;

	public start(): void {
	}

	public draw(): void {
		this.gameObject.text = `Math ${this.hiScore} ${this.score}`;
	}

	public update(): void {
		if (this.hiScore < this.score) {
			this.hiScore = this.score;
		}
	}

	public destroy(): void {
	}

	public reset(): void {
		this.score = 0;
	}

	public incrementScore(): void {
		this.score++;
	}
}

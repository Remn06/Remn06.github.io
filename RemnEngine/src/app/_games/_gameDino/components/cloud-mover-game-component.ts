import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Vector2 } from '../../../business/common/vector2';
import { GameScreen } from '../../../business/screen/game-screen';
import { VMath } from '../../../business/common/v-math';
import { Timer } from '../../../business/common/timer';

@Exclude()
export class CloudMoverGameComponent extends GameComponent  {

	public name = CloudMoverGameComponent.name;

	@Expose()
	public speed: number;

	public start(): void {
		const screen = GameScreen.getDefaultScreen();
		const posX = VMath.randIntMaxExcluded(0, screen.width);
		const posY = VMath.randIntMaxExcluded(this.gameObject.transform.height / 2, 100);
		this.gameObject.transform.localPosition = new Vector2(posX, posY);
	}

	public draw(): void {
	}

	public update(): void {
		const position = new Vector2(this.gameObject.transform.localPosition.x, this.gameObject.transform.localPosition.y);
		position.x -= this.speed * Timer.delta;
		if (position.x < (-this.gameObject.transform.width)) {
			position.x = GameScreen.getDefaultScreen().width + this.gameObject.transform.width + VMath.randIntMaxExcluded(0, screen.width / 4);
			position.y = VMath.randIntMaxExcluded(this.gameObject.transform.height / 2, 100);
		}
		this.gameObject.transform.localPosition = position;
	}

	public destroy(): void {
	}
}

import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Input } from '../../../business/input/input';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { MouseInputEvent } from '../../../business/input/dto/mouse-input-event';
import { Rect } from '../../../business/common/rect';
import { GameScreen } from '../../../business/screen/game-screen';
import { CactusMoverGameComponent } from './cactus-mover-game-component';
import { Vector2 } from '../../../business/common/vector2';
import { VMath } from '../../../business/common/v-math';

@Exclude()
export class CenterPositionGameComponent extends GameComponent  {

	public name = CenterPositionGameComponent.name;

	@Expose()
	public centerByXAxis: boolean;

	@Expose()
	public centerByYAxis: boolean;

	@Expose()
	public shift: Vector2;

	public start(): void {
	}

	public draw(): void {
	}

	public update(): void {
		this.checkPosition();
	}

	public destroy(): void {
	}

	private checkPosition(): void {
		const x = this.centerByXAxis ? GameScreen.getDefaultScreen().width / 2 : 0;
		const y = this.centerByYAxis ? GameScreen.getDefaultScreen().height / 2 : 0;

		this.gameObject.transform.localPosition = this.shift.add(new Vector2(x, y));
	}
}

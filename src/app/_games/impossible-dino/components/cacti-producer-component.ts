import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Timer } from '../../../business/common/timer';
import { Vector2 } from '../../../business/common/vector2';
import { VMath } from '../../../business/common/v-math';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import {
	HtmlRendererGameComponent
} from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { GameScreen } from '../../../business/screen/game-screen';
import { Expose } from 'class-transformer';

export class CactiProducerComponent extends GameComponent {
	name: string = CactiProducerComponent.name;

	@Expose()
	public frequency: number;

	@Expose()
	public shiftIntervalFrom: number;

	@Expose()
	public shiftIntervalTo: number;

	private nextCactusTime: number;

	start(): void {
		this.calcNextCactusTime();
	}

	draw(): void {
	}

	update(): void {
		if (Timer.getTime() >= this.nextCactusTime) {
			this.createCactus();
			this.calcNextCactusTime();
		}
	}

	destroy(): void {
	}

	private calcNextCactusTime() {
		const shiftInterval = VMath.randIntMaxIncluded(this.shiftIntervalFrom, this.shiftIntervalTo);
		const sign = VMath.randIntMaxIncluded(0, 1);
		this.nextCactusTime = Timer.getTime() + this.frequency + shiftInterval * ((sign === 0) ? 1 : -1);
	}

	private createCactus() {
		return GameObjectFactory.createGameObject(
			this.gameObject,
			'Cactus',
			TransformFactory.createChildTransform(this.gameObject.transform, new Vector2(GameScreen.getDefaultScreen().width + 12, -23), 23, 46, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/_games/impossible-dino/img/cactus.png'),
					new NameValuePair('cssStyle', '')
				], true)
			],
			true
		);

	}

}

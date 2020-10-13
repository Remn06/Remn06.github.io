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
import { CollisionGameComponent } from '../../../business/game-components/core/collision-game-component';
import { Rect } from '../../../business/common/rect';
import { GroundShifterComponent } from './ground-shifter-component';

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
		const rootObject = this.gameObject.getComponent<GroundShifterComponent>(GroundShifterComponent.name).getLastGroundObject();
		const cactusType = VMath.randIntMaxIncluded(0, 1);
		if(cactusType === 0) {

			return GameObjectFactory.createGameObject(
				rootObject,
				'Cactus',
				TransformFactory.createGlobalTransform(
					rootObject.transform,
					new Vector2(GameScreen.getDefaultScreen().width + 12, rootObject.transform.position.y - 23), 23, 46, 0),
				[
					ComponentFactory.createComponent(HtmlRendererGameComponent, [
						new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/cactus.png'),
						new NameValuePair('cssStyle', '')
					], true),
					ComponentFactory.createComponent(CollisionGameComponent, [
						new NameValuePair('meshCollider', [new Rect(0, 8, 5, 13), new Rect(5, 0, 5, 32), new Rect(10, 4, 5, 11)])
					])
				],
				true
			);
		} else {

			return GameObjectFactory.createGameObject(
				rootObject,
				'SmallCactus',
				TransformFactory.createGlobalTransform(
					rootObject.transform,
					new Vector2(GameScreen.getDefaultScreen().width + 16, rootObject.transform.position.y - 16), 32, 32, 0),
				[
					ComponentFactory.createComponent(HtmlRendererGameComponent, [
						new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/small-cactus.png'),
						new NameValuePair('cssStyle', '')
					], true),
					ComponentFactory.createComponent(CollisionGameComponent, [
						new NameValuePair('meshCollider', [])
					])
				],
				true
			);
		}
	}

}

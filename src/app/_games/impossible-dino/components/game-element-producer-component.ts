import { GameComponent } from '../../../business/game-components/core/base/game-component';
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
import { Exclude, Expose } from 'class-transformer';
import { CollisionGameComponent } from '../../../business/game-components/core/collision-game-component';
import { Rect } from '../../../business/common/rect';
import { GroundShifterComponent } from './ground-shifter-component';
import { CactusExplosionComponent } from './cactus-explosion-component';
import { AnimateGameComponent } from '../../../business/game-components/core/animate-game-component/animate-game-component';

@Exclude()
export class GameElementProducerComponent extends GameComponent {
	name: string = GameElementProducerComponent.name;

	@Expose()
	public frequency: number;

	@Expose()
	public shiftIntervalFrom: number;

	@Expose()
	public shiftIntervalTo: number;

	@Expose()
	public bonusInterval: number;

	private nextBonusTime: number;

	private nextCactusShift: number;

	private shifterComponent: GroundShifterComponent;

	start(): void {
		this.shifterComponent = this.gameObject.getComponent<GroundShifterComponent>(GroundShifterComponent.name);
		this.calcNextCactusTime();
		this.calcNextBonusTime();
	}

	draw(): void {
	}

	update(): void {
		if (this.shifterComponent.currentShift >= this.nextCactusShift) {
			this.createCactus();
			this.calcNextCactusTime();
		}
		if (this.shifterComponent.currentShift >= this.nextBonusTime) {
			this.createBonus();
			this.calcNextBonusTime();
		}
	}

	destroy(): void {
	}

	private calcNextCactusTime() {
		const shiftInterval = VMath.randIntMaxIncluded(this.shiftIntervalFrom, this.shiftIntervalTo);
		const sign = VMath.randIntMaxIncluded(0, 1);
		this.nextCactusShift = this.shifterComponent.currentShift + this.frequency + shiftInterval * ((sign === 0) ? 1 : -1);
	}

	private createCactus() {
		const rootObject = this.gameObject.getComponent<GroundShifterComponent>(GroundShifterComponent.name).getLastGroundObject();
		const cactusType = VMath.randIntMaxIncluded(0, 1);
		if (cactusType === 0) {

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
					]),
					ComponentFactory.createComponent(CactusExplosionComponent, [
							new NameValuePair('image', 'cactus')
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
					new Vector2(GameScreen.getDefaultScreen().width + 16, rootObject.transform.position.y - 16), 36, 43, 0),
				[
					ComponentFactory.createComponent(HtmlRendererGameComponent, [
						new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/small-cactus.png'),
						new NameValuePair('cssStyle', '')
					], true),
					ComponentFactory.createComponent(CollisionGameComponent, [
						new NameValuePair('meshCollider', [new Rect(0, 7, 10, 12), new Rect(9, 0, 15, 44), new Rect(24, 12, 11, 21)])
					]),
					ComponentFactory.createComponent(CactusExplosionComponent, [
						new NameValuePair('image', 'small-cactus')
					])
				],
				true
			);

		}
	}

	private calcNextBonusTime() {
		this.nextBonusTime = this.shifterComponent.currentShift + this.bonusInterval;
	}

	private createBonus () {
		const rootObject =
			this.gameObject.getComponent<GroundShifterComponent>(GroundShifterComponent.name).getLastGroundObject();
		const bonusYShift = 20;

		GameObjectFactory.createGameObject(
			rootObject,
			'Bonus',
			TransformFactory.createGlobalTransform(
				rootObject.transform,
				new Vector2(
					GameScreen.getDefaultScreen().width + 11,
					rootObject.transform.position.y - 2.5 - bonusYShift),
				22, 5, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/helmetAnimation.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(AnimateGameComponent, [
						new NameValuePair('slideWidth', 22),
						new NameValuePair('slideHeight', 5),
						new NameValuePair('slidesInARow', 11),
						new NameValuePair('slidesCount', 22),
						new NameValuePair('animationSpeed', 30)
				]),
			],
			true
		);
	}
}

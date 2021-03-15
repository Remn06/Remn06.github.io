import { GameComponent } from '../../../../business/game-components/core/base/game-component';
import { GroundShifterComponent } from '../ground-shifter-component';
import { VMath } from '../../../../business/common/v-math';
import { GameObjectFactory } from '../../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../../business/common/vector2';
import { GameScreen } from '../../../../business/screen/game-screen';
import { ComponentFactory } from '../../../../business/core/factory/component-factory';
import {
	HtmlRendererGameComponent
} from '../../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../../business/common/name-value-pair';
import { CollisionGameComponent } from '../../../../business/game-components/core/collision-game-component';
import { Rect } from '../../../../business/common/rect';
import { Exclude, Expose } from 'class-transformer';
import { MathAnswerComponent } from './math-answer-component';

@Exclude()
export class MathProducerComponent extends GameComponent {
	name: string = MathProducerComponent.name;

	@Expose()
	public frequency: number;

	@Expose()
	public shiftIntervalFrom: number;

	@Expose()
	public shiftIntervalTo: number;

	private nextCactusShift: number;
	private shifterComponent: GroundShifterComponent;

	start(): void {
		this.shifterComponent = this.gameObject.getComponent<GroundShifterComponent>(GroundShifterComponent.name);
		this.calcNextCactusTime();
	}

	draw(): void {
	}

	update(): void {
		if (this.shifterComponent.currentShift  >= this.nextCactusShift) {
			this.createCactus();
			this.calcNextCactusTime();
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
		const answers = ['0', '1', '1/2', '√2/2', '√3/2', '√3/3', '√3', '-1', '--'];
		const answerIndex = VMath.randIntMaxIncluded(0, answers.length - 1);

		return GameObjectFactory.createGameObject(
			rootObject,
			'SmallCactus',
			TransformFactory.createGlobalTransform(
				rootObject.transform,
				new Vector2(GameScreen.getDefaultScreen().width + 16, rootObject.transform.position.y - 16), 36, 43, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					// new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/small-cactus.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(CollisionGameComponent, [
					new NameValuePair('meshCollider', [new Rect(0, 0, 10, 10)])
				]),
				ComponentFactory.createComponent(MathAnswerComponent, [
					new NameValuePair('value', answers[answerIndex])
				])
			],
			true, answers[answerIndex]
		);
	}

}

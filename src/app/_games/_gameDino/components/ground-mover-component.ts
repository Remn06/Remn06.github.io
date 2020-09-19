import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { GroundRemoveOutOfScreenComponent } from './ground-remove-out-of-screen-component';
import { Timer } from '../../../business/common/timer';
import { GameScreen } from '../../../business/screen/game-screen';

@Exclude()
export class GroundMoverComponent extends GameComponent  {

	public name = GroundMoverComponent.name;

	@Expose()
	public speed: number;

	@Expose()
	public margin: number;

	public start(): void {
		const width = GameScreen.getDefaultScreen().width;
		let right = 0;
		while (right < width + this.margin) {
			const groundObject = this.createGroundGameObject(right);
			right += groundObject.transform.width;
		}
	}

	public draw(): void {
	}

	public update(): void {

		if (this.gameObject.children.length === 0) {
			return;
		}

		this.gameObject.children.forEach((groundGameObject) => {
			const position = groundGameObject.transform.localPosition.clone();
			position.x -= this.speed * Timer.delta;
			groundGameObject.transform.localPosition = position;
		});

		const lastObjectTransform = this.gameObject.children[this.gameObject.children.length - 1].transform;
		const lastObjectRight = lastObjectTransform.localPosition.x + lastObjectTransform.width / 2;

		if (lastObjectRight < GameScreen.getDefaultScreen().width + this.margin) {
			this.createGroundGameObject(lastObjectRight);
		}
	}

	public destroy(): void {
	}

	private createGroundGameObject(x: number): GameObject {
		if (x < 0) {
			x = 0;
		}

		const ground = GameObjectFactory.createGameObject(this.gameObject,
			'Ground',
			TransformFactory.createTransform(new Vector2(x + 300, 0), 600, 10, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/_gameDino/img/ground.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(GroundRemoveOutOfScreenComponent, [
					new NameValuePair('margin', 100)
				], true)
			],
			true
		);
		return ground;
	}
}

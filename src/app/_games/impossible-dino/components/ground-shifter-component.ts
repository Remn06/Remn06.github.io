import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Vector2 } from '../../../business/common/vector2';
import { Timer } from '../../../business/common/timer';
import { GameScreen } from '../../../business/screen/game-screen';
import { Expose } from 'class-transformer';
import { VMath } from '../../../business/common/v-math';
import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { GameObjectCollection } from '../../../business/core/game-object-collection';

export class GroundShifterComponent extends GameComponent {
	name: string = GroundShifterComponent.name;

	@Expose()
	speed: number;

	@Expose()
	margin: number;

	private groundWidth = 550;

	start(): void {
		this.createGround();
	}

	draw(): void {
	}

	update(): void {
		const children = this.gameObject.children.slice();
		for (let i = 0; i < children.length; i++) {
			if (children[i].name === 'Dino') {
				continue;
			}
			this.shiftGround(children[i]);
		}

		if (this.gameObject.children.length === 0) {
			this.createGroundGameObject(this.groundWidth / 2);
		}
		while (this.gameObject.children[this.gameObject.children.length - 1].transform.toRect().right < GameScreen.getDefaultScreen().width) {
			this.createGroundGameObject(this.gameObject.children[this.gameObject.children.length - 1].transform.localPosition.x + this.groundWidth);
		}
	}

	destroy(): void {
	}

	private createGround(): void {
		const groundNumber = Math.ceil(GameScreen.getDefaultScreen().width / this.groundWidth);
		for (let i = 0; i < groundNumber; i++) {
			this.createGroundGameObject(this.groundWidth / 2 + this.groundWidth * i);
		}
	}

	private createGroundGameObject(x: number): GameObject {
		return GameObjectFactory.createGameObject(
			this.gameObject,
			'Ground',
			TransformFactory.createChildTransform(this.gameObject.transform, new Vector2(x, 0), 550, 8, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/ground.png'),
					new NameValuePair('cssStyle', '')
				], true)
			],
			true
		);
	}

	private shiftGround(groundObject: GameObject): void {
		const position = groundObject.transform.localPosition;
		const newPosition = new Vector2(position.x - this.speed * Timer.delta, position.y);
		const groundWidth = groundObject.transform.width;

		groundObject.transform.localPosition = newPosition;

		if (newPosition.x <= (0 - groundWidth / 2) ) {
			GameObjectCollection.remove(groundObject);
		}

	}
}

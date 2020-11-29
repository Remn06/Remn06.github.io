import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Vector2 } from '../../../business/common/vector2';
import { Timer } from '../../../business/common/timer';
import { GameScreen } from '../../../business/screen/game-screen';
import { Exclude, Expose } from 'class-transformer';
import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import {
	HtmlRendererGameComponent
} from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { GameObjectCollection } from '../../../business/core/game-object-collection';

@Exclude()
export class GroundShifterComponent extends GameComponent {
	name: string = GroundShifterComponent.name;

	@Expose()
	speed: number;

	@Expose()
	margin: number;

	public currentShift = 0;

	private groundWidth = 550;
	private groundObjects: GameObject[] = [];

	start(): void {
		this.createGround();
	}

	draw(): void {
	}

	update(): void {
		const shift = this.speed * Timer.delta;
		this.currentShift += shift;
		const resGroundObjects = [];

		for (let i = 0; i < this.groundObjects.length; i++) {
			if (!this.shiftGroundAndRemove(this.groundObjects[i], shift)) {
				resGroundObjects.push(this.groundObjects[i]);
			}
		}

		if (resGroundObjects.length === 0) {
			resGroundObjects.push(this.createGroundGameObject(this.groundWidth / 2));
		}

		while (resGroundObjects[resGroundObjects.length - 1].transform.toRect().right < GameScreen.getDefaultScreen().width) {
			resGroundObjects.push(
				this.createGroundGameObject(
					resGroundObjects[resGroundObjects.length - 1].transform.localPosition.x + this.groundWidth)
			);
		}
		this.groundObjects = resGroundObjects;
	}

	destroy(): void {
	}

	public getLastGroundObject(): GameObject {
		return this.groundObjects[this.groundObjects.length - 1];
	}

	private createGround(): void {
		const groundNumber = Math.ceil(GameScreen.getDefaultScreen().width / this.groundWidth);
		for (let i = 0; i < groundNumber; i++) {
			this.groundObjects.push(this.createGroundGameObject(this.groundWidth / 2 + this.groundWidth * i));
		}
	}

	private createGroundGameObject(x: number): GameObject {
		return GameObjectFactory.createGameObject(
			this.gameObject,
			'Ground',
			TransformFactory.createLocalTransform(this.gameObject.transform, new Vector2(x, 0), 550, 8, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/ground.png'),
					new NameValuePair('cssStyle', '')
				], true)
			],
			true
		);
	}

	private shiftGroundAndRemove(groundObject: GameObject, shift: number): boolean {
		const position = groundObject.transform.localPosition;
		const newPosition = new Vector2(position.x - shift, position.y);
		const groundWidth = groundObject.transform.width;

		groundObject.transform.localPosition = newPosition;

		if (newPosition.x <= (0 - groundWidth / 2) ) {
			GameObjectCollection.remove(groundObject);
			return true;
		}
		return false;
	}
}

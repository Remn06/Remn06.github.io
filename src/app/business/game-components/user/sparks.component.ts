import { GameComponent } from '../core/base/game-component';
import { Timer } from '../../common/timer';
import { Vector2 } from '../../common/vector2';
import { Exclude, Expose, Type } from 'class-transformer';
import { VMath } from '../../common/v-math';
import { GameObject } from '../../game-structure/game-object';
import { GameObjectFactory } from '../../core/factory/game-object-factory';
import { TransformFactory } from '../../core/factory/transform-factory';
import { ComponentFactory } from '../../core/factory/component-factory';
import { HtmlRendererGameComponent } from '../core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../common/name-value-pair';
import { GameObjectCollection } from '../../core/game-object-collection';

interface SparkInfo {
	direction: Vector2;
	color: number;
	speed: number;
	gameObject: GameObject;
	gravitySpeed: number;
}


@Exclude()
export class SparksComponent extends GameComponent {

	public name = SparksComponent.name;

	@Expose()
	public speed = null;

	@Expose()
	public amount = null;

	@Expose()
	@Type(() => Vector2)
	public gravity: Vector2 = null;

	@Expose()
	@Type(() => Vector2)
	public shift: Vector2 = null;

	@Expose()
	public gravityValue = 9.8;

	@Expose()
	public initScatter = 9.8;

	private sparks: SparkInfo[] = [];

	start(): void {
		for (let i = 0; i < this.amount; i++) {
			this.createNewSpark(i);
			this.sparks[i].color = VMath.randIntMaxIncluded(1, 255);
		}
	}

	draw(): void {
	}

	update(): void {
		for (let i = 0; i < this.amount; i++) {
			this.updateSpark(i);
		}
	}

	destroy(): void {
	}

	private updateSpark(index: number): void {
		if (this.sparks[index] == null) {
			this.createNewSpark(index);
			return;
		}

		const spark = this.sparks[index];
		spark.color = spark.color - this.speed;
		if (spark.color < 0) {
			GameObjectCollection.remove(spark.gameObject);
			this.sparks[index] = null;
			return;
		}

		spark.gravitySpeed += this.gravityValue * Timer.delta;
		const deltaSpeed = spark.speed * Timer.delta;
		const shift = VMath.multiply(spark.direction.add(VMath.multiply(this.gravity, spark.gravitySpeed)), deltaSpeed);
		spark.gameObject.transform.localPosition = spark.gameObject.transform.localPosition.add(shift);

		const htmlComponent = spark.gameObject.getComponent(HtmlRendererGameComponent.name) as HtmlRendererGameComponent;
		htmlComponent.cssStyle = `color: rgba(${Math.ceil(spark.color)}, 0, 0, ${/*spark.color / 255*/1}); font-size: 10px;`;

	}

	private createNewSpark(index: number): void {
		const direction =  VMath.rotate(Vector2.one, VMath.randIntMaxIncluded(0, 360));
		let position = this.gameObject.transform.position.add(VMath.multiply(direction, VMath.randIntMaxIncluded(0, this.initScatter)));
		position = position.add(this.shift);

		const root = GameObjectCollection.root(this.gameObject);
		const gameObject = GameObjectFactory.createGameObject(
			root,
			'spark' + index,
			TransformFactory.createChildTransform(root.transform, position, 5, 5, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('cssStyle', 'color: #FF0000; font-size: 10px;')
				])
			],
			true,
			'*'
			);

		this.sparks[index] = {
			direction,
			color: 255,
			gameObject,
			speed: VMath.randIntMaxIncluded(10, 50),
			gravitySpeed: 0
		};
	}
}





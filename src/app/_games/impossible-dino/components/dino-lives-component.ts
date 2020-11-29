import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { CollisionGameComponent } from '../../../business/game-components/core/collision-game-component';
import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { Timer } from '../../../business/common/timer';

@Exclude()
export class DinoLivesComponent extends GameComponent {
	name: string = DinoLivesComponent.name;

	@Expose()
	lives: number;

	livesGameObject: GameObject;

	private collisionComponent;

	start() {
		const rootGameObject = GameObjectCollection.root(this.gameObject);

		this.collisionComponent = this.gameObject.getComponent<CollisionGameComponent>(CollisionGameComponent.name);
		this.livesGameObject = GameObjectFactory.createGameObject(
			rootGameObject,
			'LivesGameObject',
			TransformFactory.createLocalTransform(rootGameObject.transform, new Vector2(100, 100), 100, 25, 0),
			[
			ComponentFactory.createComponent(HtmlRendererGameComponent, [
				new NameValuePair('cssStyle', '')
			], true)
			],
			true,
			''
		);
	}

	draw() {
	}

	update() {
		if (this.collisionComponent.collisions.length > 0) {
			this.lives--;
			if (this.lives === 0) {
				Timer.divider = 0;
			}
		}
		this.livesGameObject.text = 'lives: ' + this.lives;
	}

	destroy() {
	}
}

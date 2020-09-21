import { GameObject } from '../game-structure/game-object';
import { CollisionGameComponent } from '../game-components/core/collision-game-component';
import { GameObjectCollection } from '../core/game-object-collection';

export class CollisionsProcessor {
	public static checkCollisions(rootGameObject: GameObject): void {
		const components = GameObjectCollection.getAllComponents(CollisionGameComponent.name, rootGameObject) as CollisionGameComponent[];
		for (let i = 0; i < components.length; i++) {
			components[i].collisions.length = 0;
		}
		for (let i = 0; i < components.length; i++) {
			const firstComponent = components[i];
			for (let p = i + 1; p < components.length; p++) {
				const secondComponent = components[p];
				firstComponent.collideWith(secondComponent);
			}
		}
	}
}

import { GameObject } from '../../game-structure/game-object';
import { Transform } from '../../game-structure/transform';
import { GameComponent } from '../../game-components/core/base/game-component';
import { GameObjectCollection } from '../game-object-collection';

export class GameObjectFactory {
	public static createGameObject(
			parent: GameObject,
			name: string,
			transform: Transform,
			components: GameComponent[],
			active: boolean,
			text: string = null): GameObject {

		const gameObject = new GameObject();
		gameObject.name = name;
		gameObject.transform = transform;
		components.forEach((c) => {
			if (c.gameObject == null) {
				c.gameObject = gameObject;
			}
		});
		gameObject.components = components;
		gameObject.transform.gameObject = gameObject;
		gameObject.active = active;
		gameObject.paused = false;
		gameObject.text = text;

		if (parent != null) {
			GameObjectCollection.insert(gameObject, parent);
		}

		return gameObject;
	}
}

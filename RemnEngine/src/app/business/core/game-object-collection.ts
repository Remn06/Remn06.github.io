import { GameObject } from '../game-structure/game-object';

export class GameObjectCollection {

	public static root(gameObject: GameObject): GameObject {
		let root = gameObject;
		while (root.parent != null) {
			root = root.parent;
		}
		return root;
	}

	public static remove(gameObject: GameObject): void {
		if (gameObject.parent == null) {
			return;
		}

		const index = gameObject.parent.children.indexOf(gameObject);
		if (index === -1) {
			console.warn(`GameObjectCollection.remove: Object's not found`);
			return;
		}
		gameObject.parent.children.splice(index, 1);
		gameObject.parent = null;
		gameObject.destroy();
	}

	public static removeChildren(gameObject: GameObject): void {
		const children = gameObject.children.slice();
		children.forEach((child) => {
			GameObjectCollection.remove(child);
		});
	}

	public static switch(objectA: GameObject, objectB: GameObject): void {
		if (objectA.parent !== objectB.parent) {
			console.warn(`GameObjectCollection.switch: Different parents`);
		}
		const parent = objectA.parent;
		const indexA = parent.children.indexOf(objectA);
		const indexB = parent.children.indexOf(objectB);
		if (indexA === -1 || indexB === -1) {
			console.warn(`GameObjectCollection.switch: Object's not found, objectA: ${indexA}, objectB: ${indexB}`);
			return;
		}
		parent.children.splice(indexA, 1, objectB);
		parent.children.splice(indexB, 1, objectA);
	}

	public static insert(gameObject: GameObject, parent?: GameObject, insertAfter?: GameObject): void {
		GameObjectCollection.remove(gameObject);

		if (parent == null) {
			parent = GameObjectCollection.root(gameObject);
		}

		gameObject.parent = parent;
		const index = insertAfter == null ? -1 : parent.children.indexOf(gameObject);
		parent.children.splice(index === -1 ? parent.children.length : index, 0, gameObject);
		gameObject.start();
	}

	public static findDescendantByName(name: string, gameObject: GameObject): GameObject {
		for (const child of gameObject.children) {
			if (child.name === name) {
				return child;
			}
			const grand = GameObjectCollection.findDescendantByName(name, child);
			if (grand != null) {
				return grand;
			}
		}
		return null;
	}
}

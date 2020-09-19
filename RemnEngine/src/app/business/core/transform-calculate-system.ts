import { Transform } from '../game-structure/transform';
import { GameObject } from '../game-structure/game-object';
import { VMath } from '../common/v-math';

export class TransformCalculateSystem {

	private static instanceRef: TransformCalculateSystem;

	private rootGameObjects: Set<GameObject> = new Set();
	private objectsToUpdate: Set<GameObject> = new Set();

	public static instance(): TransformCalculateSystem {
		if (this.instanceRef == null) {
			this.instanceRef = new TransformCalculateSystem();
		}
		return this.instanceRef;
	}

	public registerForUpdate(transform: Transform): void {

		if (this.objectsToUpdate.has(transform.gameObject)) {
			return;
		}
		let root = transform.gameObject;
		while (root != null) {
			this.objectsToUpdate.add(root);
			if (root.parent == null) {
				this.rootGameObjects.add(root);
			}
			root = root.parent;
		}
	}

	public update(): void {
		Array.from(this.rootGameObjects.values()).forEach((gameObject: GameObject) => {
			gameObject.transform.rotation = gameObject.transform.localRotation;
			gameObject.transform.position = gameObject.transform.localPosition;
			this.processChildren(gameObject);
		});

		this.objectsToUpdate.clear();
		this.rootGameObjects.clear();
	}

	private processChildren(gameObject: GameObject): void {
		const currentTransform = gameObject.transform;

		gameObject.children.forEach((ch: GameObject) => {
			const newLocalPosition = VMath.rotate(ch.transform.localPosition, currentTransform.rotation);
			ch.transform.position = currentTransform.position.add(newLocalPosition);
			ch.transform.rotation = ch.transform.localRotation + currentTransform.rotation;
			this.processChildren(ch);
		});
	}
}

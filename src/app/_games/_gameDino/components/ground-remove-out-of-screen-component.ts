import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { GameObjectCollection } from '../../../business/core/game-object-collection';

@Exclude()
export class GroundRemoveOutOfScreenComponent extends GameComponent  {

	public name = GroundRemoveOutOfScreenComponent.name;

	@Expose()
	public margin: number;

	public start(): void {
	}

	public draw(): void {
	}

	public update(): void {
		const transform = this.gameObject.transform;
		if (transform.localPosition.x < -(transform.width + this.margin)) {
			GameObjectCollection.remove(this.gameObject);
		}
	}

	public destroy(): void {
	}
}

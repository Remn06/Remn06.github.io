import { GameObject } from '../../../game-structure/game-object';
import { Guid } from '../../../common/guid';

export class GameObjectRenderInfo {
	public id: string = null;
	public left: number = null;
	public top: number = null;
	public width: number = null;
	public height: number = null;
	public rotation: number = null;
	public backgroundImage: string = null;
	public text: string = null;
	public cssStyle: string = null;

	public static fromGameObject(gameObject: GameObject): GameObjectRenderInfo {
		return {
			id: Guid.create(),
			left: gameObject.transform.position.x,
			top: gameObject.transform.position.y,
			width: gameObject.transform.width,
			height: gameObject.transform.height,
			rotation: gameObject.transform.rotation,
			backgroundImage: null,
			text: null,
			cssStyle: null
		};
	}
}

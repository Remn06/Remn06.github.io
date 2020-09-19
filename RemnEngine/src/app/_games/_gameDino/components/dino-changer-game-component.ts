import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { Input } from '../../../business/input/input';
import { DinoJumpGameComponent } from './dino-jump-game-component';

@Exclude()
export class DinoChangerGameComponent extends GameComponent  {

	public name = DinoChangerGameComponent.name;

	private dino: GameObject;
	private dinoBend: GameObject;

	public start(): void {

	}

	public draw(): void {
	}

	public update(): void {
		if (this.dino == null || this.dinoBend == null) {
			const rootGameObject = GameObjectCollection.root(this.gameObject);
			this.dino = GameObjectCollection.findDescendantByName('Dino', rootGameObject);
			this.dinoBend = GameObjectCollection.findDescendantByName('Dino Bend', rootGameObject);
		}

		const dinoIsJumping = (this.dino.getComponent(DinoJumpGameComponent.name) as DinoJumpGameComponent).isJumping;

		if (Input.getKey('ArrowDown') && !dinoIsJumping) {
			this.dino.active = false;
			this.dinoBend.active = true;
		} else {
			this.dino.active = true;
			this.dinoBend.active = false;
		}
	}

	public destroy(): void {
	}
}

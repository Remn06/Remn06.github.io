import { Exclude } from 'class-transformer';
import { GameComponent } from '../core/base/game-component';
import { GameObject } from '../../game-structure/game-object';
import { Input } from '../../input/input';

@Exclude()
export class ShowHideGameObjectComponent extends GameComponent {

	public name = ShowHideGameObjectComponent.name;

	public gameObjectToHide: GameObject;

	start(): void {
	}

	draw(): void {
	}

	update(): void {
		if (Input.getKeyDown('Enter')) {
			this.gameObjectToHide.active = !this.gameObjectToHide.active;
		}
	}

	destroy(): void {
	}
}

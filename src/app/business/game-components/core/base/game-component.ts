import { GameObject } from '../../../game-structure/game-object';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export abstract class GameComponent {

	public abstract name: string;

	@Expose()
	active: boolean;

	gameObject: GameObject;

	public abstract start();

	public abstract draw();

	public abstract update();

	public abstract destroy();
}

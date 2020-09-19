import { CollisionsProcessor } from './physics/collisions-processor';
import { TransformCalculateSystem } from './core/transform-calculate-system';
import { Input } from './input/input';
import { GameObject } from './game-structure/game-object';

export class GameProcessor {

	public static process(rootGameObject: GameObject): void {

		rootGameObject.update();


		TransformCalculateSystem.instance().update();

		CollisionsProcessor.checkCollisions(rootGameObject);

		rootGameObject.draw();

		Input.frameEnd();
	}
}

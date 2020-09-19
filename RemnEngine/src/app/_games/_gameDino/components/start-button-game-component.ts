import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Input } from '../../../business/input/input';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { MouseInputEvent } from '../../../business/input/dto/mouse-input-event';
import { Rect } from '../../../business/common/rect';
import { GameScreen } from '../../../business/screen/game-screen';
import { CactusMoverGameComponent } from './cactus-mover-game-component';
import { Vector2 } from '../../../business/common/vector2';
import { VMath } from '../../../business/common/v-math';
import { ScoreGameComponent } from './score-game-component';

@Exclude()
export class StartButtonGameComponent extends GameComponent  {

	public name = StartButtonGameComponent.name;

	public start(): void {
	}

	public draw(): void {
	}

	public update(): void {
		const enterPressed = Input.getKeyDown('Enter');
		const rect = new Rect(
			this.gameObject.transform.position.x - this.gameObject.transform.width / 2,
			this.gameObject.transform.position.y - this.gameObject.transform.height / 2,
			this.gameObject.transform.width,
			this.gameObject.transform.height);
		const mousePressed = Input.getMouseDown().some((mouseData: MouseInputEvent) => {
			return rect.isInside(mouseData.coordinates);
		});

		if (enterPressed || mousePressed) {
			const dynamicObjects = GameObjectCollection.findDescendantByName('DynamicObjects', GameObjectCollection.root(this.gameObject));
			if (dynamicObjects.paused) {
				const cactusObjects = GameObjectCollection.findDescendantByName('Cactus', GameObjectCollection.root(this.gameObject));
				const cactusMover = cactusObjects.getComponent(CactusMoverGameComponent.name) as  CactusMoverGameComponent;
				cactusMover.reset();

				const scoreObjects = GameObjectCollection.findDescendantByName('Score', GameObjectCollection.root(this.gameObject));
				scoreObjects.active = true;
				const scoreComponent = scoreObjects.getComponent(ScoreGameComponent.name) as  ScoreGameComponent;
				scoreComponent.reset();

				dynamicObjects.paused = false;
				this.gameObject.active = false;
			} else {
				dynamicObjects.paused = true;
			}
		}
	}

	public destroy(): void {
	}
}

import { GameComponent } from '../../../../business/game-components/core/base/game-component';
import { CollisionGameComponent } from '../../../../business/game-components/core/collision-game-component';
import { Exclude, Expose } from 'class-transformer';
import { GameObjectCollection } from '../../../../business/core/game-object-collection';
import { MathQuestionComponent } from './math-question-component';

@Exclude()
export class MathAnswerComponent extends GameComponent {
	name: string = MathAnswerComponent.name;

	@Expose()
	public value: string;

	private collisionComponent: CollisionGameComponent;
	private questionComponent: MathQuestionComponent;

	start(): void {
		this.collisionComponent = this.gameObject.getComponent<CollisionGameComponent>(CollisionGameComponent.name);
		this.questionComponent = GameObjectCollection.findDescendantByName('mathQuestion', GameObjectCollection.root(this.gameObject))
			.getComponent<MathQuestionComponent>(MathQuestionComponent.name);
	}

	draw(): void {
	}

	update(): void {
		if (this.collisionComponent.collisions.length > 0) {
			this.questionComponent.answer(this.value);
			GameObjectCollection.remove(this.gameObject);
		}
	}

	destroy(): void {
	}
}

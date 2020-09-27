import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Timer } from '../../../business/common/timer';
import { Expose } from 'class-transformer';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { CollisionGameComponent } from '../../../business/game-components/core/collision-game-component';

export class DinoScoreCounterComponent extends GameComponent {
	name: string = DinoScoreCounterComponent.name;

	private score = 0;
	private hiScore = 0;

	@Expose()
	counterSpeed: number;

	private dinoColliderComponent: CollisionGameComponent;

	start(): void {
		const dino = GameObjectCollection.findDescendantByName('Dino', GameObjectCollection.root(this.gameObject));
		this.dinoColliderComponent = dino.getComponent<CollisionGameComponent>(CollisionGameComponent.name);
	}

	draw(): void {
		this.gameObject.text = 'HI: ' + Math.ceil(this.hiScore) + ' : ' + Math.ceil(this.score);
	}

	update(): void {
		this.score = this.score + this.counterSpeed * Timer.delta;

		if (this.dinoColliderComponent.collisions.length > 0) {
			this.score = 0;
		}

		if (this.score > this.hiScore) {
			this.hiScore = this.score;
		}
	}

	destroy() {
	}
}

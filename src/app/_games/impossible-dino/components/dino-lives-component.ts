import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { CollisionGameComponent } from '../../../business/game-components/core/collision-game-component';
import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { Timer } from '../../../business/common/timer';
import { GameScreen } from '../../../business/screen/game-screen';
import { DropCactusComponent } from './drop-cactus-component';

@Exclude()
export class DinoLivesComponent extends GameComponent {
	name: string = DinoLivesComponent.name;

	@Expose()
	lives: number;

	livesGameObject: GameObject;

	private livesGameObjects: GameObject[] = [];

	private collisionComponent;

	start() {
		const rootGameObject = GameObjectCollection.root(this.gameObject);

		this.collisionComponent = this.gameObject.getComponent<CollisionGameComponent>(CollisionGameComponent.name);
		this.livesGameObject = GameObjectFactory.createGameObject(
			rootGameObject,
			'LivesGameObject',
			TransformFactory.createLocalTransform(rootGameObject.transform, new Vector2(100, 100), 100, 25, 0),
			[
			ComponentFactory.createComponent(HtmlRendererGameComponent, [
				new NameValuePair('cssStyle', '')
			], true)
			],
			true,
			''
		);
		this.setLives(this.lives);
	}

	draw() {
	}

	update() {
		const gameScreen = GameScreen.getDefaultScreen();
		const width = gameScreen.width;
		this.livesGameObject.transform.localPosition = new Vector2(width - 100, 25);


		if (this.collisionComponent.collisions.length > 0) {
			this.setLives(this.lives - 1)
			if (this.lives === 0) {
				Timer.divider = 0;
			}
		}
	}

	destroy() {
	}

	public setLives(lives: number) {
		this.lives = lives;
		let heartWidth = 30;
		let heartHeight = 30;
		for(let i = 0; i < this.livesGameObjects.length; i++) {
			GameObjectCollection.remove(this.livesGameObjects[i]);
		}
		this.livesGameObjects.length = 0;
		for(let i = 0; i < this.lives; i++) {
			let heartGameObject = GameObjectFactory.createGameObject(
				this.livesGameObject,
				'LiveHeart',
				TransformFactory.createLocalTransform(
					this.livesGameObject.transform,
					new Vector2(i * (heartWidth + 5), 0), heartWidth, heartHeight, 0),
				[
					ComponentFactory.createComponent(HtmlRendererGameComponent, [
						new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/heart.png'),
						new NameValuePair('cssStyle', '')
					], true)
				],
				true
			);
			this.livesGameObjects.push(heartGameObject);
		}
	}
}

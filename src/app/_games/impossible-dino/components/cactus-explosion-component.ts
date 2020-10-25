import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { CollisionGameComponent } from '../../../business/game-components/core/collision-game-component';
import { Exclude, Expose } from 'class-transformer';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { DropCactusComponent } from './drop-cactus-component';
import { VMath } from '../../../business/common/v-math';

@Exclude()
export class CactusExplosionComponent extends GameComponent {
	name: string = CactusExplosionComponent.name;

	@Expose()
	image: string;

	private collisionComponent;

	start() {
		this.collisionComponent = this.gameObject.getComponent<CollisionGameComponent>(CollisionGameComponent.name);
	}

	draw() {
	}

	update() {
		if (this.collisionComponent.collisions.length > 0) {
			this.explode();
		}
	}

	destroy() {
	}

	private explode(): void {
		const position = this.gameObject.transform.localPosition;
		const width = this.gameObject.transform.width;
		const height = this.gameObject.transform.height;
		const x1 = position.x - width / 4;
		const y1 = position.y - height / 4;
		const x2 = position.x + width / 4;
		const y2 = position.y - height / 4;
		const x3 = position.x - width / 4;
		const y3 = position.y + height / 4;
		const x4 = position.x + width / 4;
		const y4 = position.y + height / 4;
		this.createPieceOfCactus(this.image + '-piece-1', x1, y1, width / 2, height / 2);
		this.createPieceOfCactus(this.image + '-piece-2', x2, y2, width / 2, height / 2);
		this.createPieceOfCactus(this.image + '-piece-3', x3, y3, width / 2, height / 2);
		this.createPieceOfCactus(this.image + '-piece-4', x4, y4, width / 2, height / 2);
		GameObjectCollection.remove(this.gameObject);
	}
	private createPieceOfCactus(imageName: string, x: number, y: number, width: number, height: number) {

		const randomDegrees = VMath.randIntMaxExcluded(35, 90);
		const direction = VMath.rotate(new Vector2(0, -1), randomDegrees);
		const force = VMath.randIntMaxIncluded(400, 600);
		let rotationDegrees = VMath.randIntMaxIncluded(35, 90);
		const rotationSign = VMath.randIntMaxIncluded(0, 1)
		rotationDegrees = rotationDegrees * ((rotationSign === 0) ? 1 : -1);

		return GameObjectFactory.createGameObject(
			this.gameObject.parent,
			'PieceOfCactus',
			TransformFactory.createLocalTransform(
				this.gameObject.parent.transform,
				new Vector2(x, y), width, height, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/' + imageName + '.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(DropCactusComponent, [
					new NameValuePair('direction', direction),
					new NameValuePair('force', force),
					new NameValuePair('rotationDegrees', rotationDegrees)
				], true)
			],
			true
		);

	}
}

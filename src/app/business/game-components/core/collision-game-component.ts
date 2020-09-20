import {GameComponent} from './base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { Rect } from '../../common/rect';

@Exclude()
export class CollisionGameComponent extends GameComponent {

	public name = CollisionGameComponent.name;

	@Expose()
	public collisions: Rect[];

	public start(): void {
	}

	public draw(): void {
	}

	public update(): void {
	}

	public destroy(): void {
	}

	public hasCollisionWith(component: CollisionGameComponent): boolean {
		const shiftX = this.gameObject.transform.position.x - this.gameObject.transform.width / 2;
		const shiftY = this.gameObject.transform.position.y - this.gameObject.transform.height / 2;
		for (let i = 0; i < this.collisions.length; i++) {
			const firstRect = this.collisions[i];
			const firstRectGlobal = firstRect.clone().shift(shiftX, shiftY);
			for (let p = 0; p < component.collisions.length; p++) {
				const secondRect = component.collisions[p];
				const secondRectGlobal = secondRect.clone().shift(shiftX, shiftY);
				if (firstRectGlobal.intersects(secondRectGlobal)) {
					return true;
				}
			}
		}
		return false;
	}
}


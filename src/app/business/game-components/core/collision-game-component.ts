import {GameComponent} from './base/game-component';
import { Exclude, Expose } from 'class-transformer';
import { Rect } from '../../common/rect';
import { HtmlRendererGameComponent } from './html-renderer-game-component/html-renderer-game-component';

@Exclude()
export class CollisionGameComponent extends GameComponent {

	public name = CollisionGameComponent.name;

	@Expose()
	public meshCollider: Rect[] = [];

	public collisions: CollisionGameComponent[] = [];

	public start(): void {
	}

	public draw(): void {
	}

	public update(): void {
		if (this.collisions.length > 0) {
			const renderer = this.gameObject.getComponent<HtmlRendererGameComponent>(HtmlRendererGameComponent.name);
			if (renderer != null) {
				renderer.addAdditionalCss(' background-color: #F00');
			}
		}
	}

	public destroy(): void {
	}

	public collideWith(component: CollisionGameComponent): boolean {
		const shiftX = this.gameObject.transform.position.x - this.gameObject.transform.width / 2;
		const shiftY = this.gameObject.transform.position.y - this.gameObject.transform.height / 2;

		const shiftComponentX = component.gameObject.transform.position.x - component.gameObject.transform.width / 2;
		const shiftComponentY = component.gameObject.transform.position.y - component.gameObject.transform.height / 2;

		for (let i = 0; i < this.meshCollider.length; i++) {
			const firstRect = this.meshCollider[i];
			const firstRectGlobal = firstRect.clone().shift(shiftX, shiftY);
			for (let p = 0; p < component.meshCollider.length; p++) {
				const secondRect = component.meshCollider[p];
				const secondRectGlobal = secondRect.clone().shift(shiftComponentX, shiftComponentY);
				if (firstRectGlobal.intersects(secondRectGlobal)) {
					this.collisions.push(component);
					component.collisions.push(this);
					return true;
				}
			}
		}
		return false;
	}
}


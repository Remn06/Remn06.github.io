import { GameComponent } from '../../../../business/game-components/core/base/game-component';
import { Vector2 } from '../../../../business/common/vector2';
import { GameObject } from '../../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../../business/core/factory/transform-factory';
import { ComponentFactory } from '../../../../business/core/factory/component-factory';
import { NameValuePair } from '../../../../business/common/name-value-pair';
import {
	HtmlRendererGameComponent
} from '../../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';

export class GeometryComponent extends GameComponent {
	name: string = GeometryComponent.name;

	start(): void {
		/*this.drawCos();
		this.drawSin();*/
		this.drawLine();
		this.circle();
	}

	draw(): void {
	}

	update(): void {
	}

	destroy(): void {
	}

	private circle() {
		const r = 25;
		for (let x = -r; x <= r; x += 0.01) {
			const a = 0;
			const b = 0;
			const y = Math.sqrt(r * r - (x - a) * (x - a)) + b;
			const invertY = -y;
			this.createDotGameObject(x, y, '#0F0');
			this.createDotGameObject(x, invertY, '#F00');
		}
	}

	private drawSin() {
		for (let x = -50; x < 50; x += 0.1) {
			const k = 10;
			const c = 4;
			const b = 0;
			const y = k * Math.sin(x / c) + b;
			this.createDotGameObject(x, y, '#FF0');
		}
	}

	private drawCos() {
		for (let x = -50; x < 50; x += 0.1) {
			const k = 10;
			const c = 4;
			const b = 0;
			const y = k * Math.cos(x / c) + b;
			this.createDotGameObject(x, y, '#0FF');
		}
	}

	private drawParabola() {
		for (let x = -50; x <= 50; x += 0.1) {
			const k = 0.1;
			const b = 0;
			const y = k * (x * x) + b;
			this.createDotGameObject(x, y, '#0FF');
		}
	}


	private drawLine() {
		for (let x = -17.5; x <= 17.5; x += 0.1) {
			const color = '#999';
			const k = 1;
			const b = 0;
			const y = k * x + b;
			this.createDotGameObject(x, y, color);
		}
	}

	private createDotGameObject(x: number, y: number, color: string): GameObject {
		const invertedY = -y;
		const adjustedX = x * 10;
		const adjustedY = invertedY * 10;

		return GameObjectFactory.createGameObject(
			this.gameObject,
			'Dot',
			TransformFactory.createChildTransform(this.gameObject.transform, new Vector2(adjustedX, adjustedY), 3, 3, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('cssStyle', 'background-color: ' + color)
				], true)
			],
			true
		);
	}
}

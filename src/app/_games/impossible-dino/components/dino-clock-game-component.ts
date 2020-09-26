import {GameComponent} from '../../../business/game-components/core/base/game-component';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { SvgRendererGameComponent } from '../../../business/game-components/svg-renderer-game-component/svg-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { SvgElementType } from '../../../business/game-components/svg-renderer-game-component/svg-element-type';
import { RotateComponent } from '../../../business/game-components/user/rotate.component';
import { SvgPathElement, SvgPathElementType } from '../../../business/game-components/svg-renderer-game-component/svg-path-element';

export class DinoClockGameComponent extends GameComponent {
	name: string = DinoClockGameComponent.name;

	start(): void {

		const dinoClockCircleObj = GameObjectFactory.createGameObject(
			this.gameObject,
			'DinoClockCircleObj',
			TransformFactory.createChildTransform(this.gameObject.transform, new Vector2(0, 0), 100, 100, 0),
			[
				ComponentFactory.createComponent(SvgRendererGameComponent, [
					new NameValuePair('type', SvgElementType.Circle),
					new NameValuePair('x', 0),
					new NameValuePair('y', 0),
					new NameValuePair('r', 25),
					new NameValuePair('stroke', '#0FF'),
					new NameValuePair('strokeWidth', '1'),
					new NameValuePair('strokeDasharray', '10 5')
				])
			],
			true
		);

		const dinoClockBigArrow = GameObjectFactory.createGameObject(
			this.gameObject,
			'DinoClockBigArrow',
			TransformFactory.createChildTransform(this.gameObject.transform, new Vector2(0, 0), 100, 100, 10),
			[
				ComponentFactory.createComponent(SvgRendererGameComponent, [
					new NameValuePair('type', SvgElementType.Path),
					new NameValuePair('x', 0),
					new NameValuePair('y', 0),
					new NameValuePair('pathElements', [
						new SvgPathElement(SvgPathElementType.MoveTo, 0, 0),
						new SvgPathElement(SvgPathElementType.LineTo, 25, 0),
						new SvgPathElement(SvgPathElementType.LineTo, 20, -2),
						new SvgPathElement(SvgPathElementType.LineTo, 20, 2),
						new SvgPathElement(SvgPathElementType.LineTo, 25, 0),
					]),
					new NameValuePair('stroke', '#00F'),
					new NameValuePair('strokeWidth', '1')
				]),
				ComponentFactory.createComponent(RotateComponent, [
					new NameValuePair('rotation', 80),
				])
			],
			true
		);

		const dinoClockSmallArrow = GameObjectFactory.createGameObject(
			this.gameObject,
			'DinoClockSmallArrow',
			TransformFactory.createChildTransform(this.gameObject.transform, new Vector2(0, 0), 100, 100, 10),
			[
				ComponentFactory.createComponent(SvgRendererGameComponent, [
					new NameValuePair('type', SvgElementType.Path),
					new NameValuePair('x', 0),
					new NameValuePair('y', 0),
					new NameValuePair('pathElements', [
						new SvgPathElement(SvgPathElementType.MoveTo, 0, 0),
						new SvgPathElement(SvgPathElementType.LineTo, 20, 0),
						new SvgPathElement(SvgPathElementType.LineTo, 15, -2),
						new SvgPathElement(SvgPathElementType.LineTo, 15, 2),
						new SvgPathElement(SvgPathElementType.LineTo, 20, 0),
					]),
					new NameValuePair('stroke', '#0F0'),
					new NameValuePair('strokeWidth', '1')
				]),
				ComponentFactory.createComponent(RotateComponent, [
					new NameValuePair('rotation', 40),
				])
			],
			true
		);

	}

	draw(): void {
	}

	update(): void {
	}

	destroy(): void {
	}

}

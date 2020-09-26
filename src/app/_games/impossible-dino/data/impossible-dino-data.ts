import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { CloudShifterComponent } from '../components/cloud-shifter-component';
import { AnimateGameComponent } from '../../../business/game-components/core/animate-game-component/animate-game-component';
import { GroundShifterComponent } from '../components/ground-shifter-component';
import { DinoJumperComponent } from '../components/dino-jumper-component';
import { CactiProducerComponent } from '../components/cacti-producer-component';
import { CollisionGameComponent } from '../../../business/game-components/core/collision-game-component';
import { Rect } from '../../../business/common/rect';
import { SvgRendererGameComponent } from '../../../business/game-components/svg-renderer-game-component/svg-renderer-game-component';
import { SvgElementType } from '../../../business/game-components/svg-renderer-game-component/svg-element-type';
import { SvgPathElement, SvgPathElementType } from '../../../business/game-components/svg-renderer-game-component/svg-path-element';

export class ImpossibleDinoData {
	public static getData(): GameObject {

		const rootGameObject = GameObjectFactory.createGameObject(
			null,
			'root',
			TransformFactory.createTransform(new Vector2(0, 0), 0, 0, 0),
			[
			],
			true
		);

		/*const background = GameObjectFactory.createGameObject(
			rootGameObject,
			'Background',
			TransformFactory.createTransform(new Vector2(700, 400), 1024, 768, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/oscilograph-background.png'),
					new NameValuePair('cssStyle', ''),
				], true),
				ComponentFactory.createComponent(GeometryComponent, [])
			],
			true
		);*/

		const cloud = GameObjectFactory.createGameObject(
			rootGameObject,
			'Cloud',
			TransformFactory.createTransform(new Vector2(400, 170), 46, 13, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/cloud.png'),
					new NameValuePair('cssStyle', ''),
				], true),
				ComponentFactory.createComponent(CloudShifterComponent, [
					new NameValuePair('speed', 75),
					new NameValuePair('margin', 100),
					new NameValuePair('skyHeight', 170)
				])
			],
			true
		);

		const cloud2 = GameObjectFactory.createGameObject(
			rootGameObject,
			'Cloud2',
			TransformFactory.createTransform(new Vector2(500, 150), 46, 13, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/cloud.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(CloudShifterComponent, [
					new NameValuePair('speed', 75),
					new NameValuePair('margin', 100),
					new NameValuePair('skyHeight', 170)
				])
			],
			true
		);

		const cloud3 = GameObjectFactory.createGameObject(
			rootGameObject,
			'Cloud3',
			TransformFactory.createTransform(new Vector2(700, 130), 46, 13, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/cloud.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(CloudShifterComponent, [
					new NameValuePair('speed', 75),
					new NameValuePair('margin', 100),
					new NameValuePair('skyHeight', 170)
				])
			],
			true
		);

		const groundHolder = GameObjectFactory.createGameObject(
			rootGameObject,
			'GroundHolder',
			TransformFactory.createTransform(new Vector2(0, 269), 8, 8, 0),
			[
				ComponentFactory.createComponent(GroundShifterComponent, [
					new NameValuePair('speed', 200),
					new NameValuePair('margin', 100),
				]),
				ComponentFactory.createComponent(CactiProducerComponent, [
					new NameValuePair('frequency', 1500),
					new NameValuePair('shiftIntervalFrom', 500),
					new NameValuePair('shiftIntervalTo', 1000)
				], true)
			],
			true
		);

		const dino = GameObjectFactory.createGameObject(
			groundHolder,
			'Dino',
			TransformFactory.createChildTransform(groundHolder.transform, new Vector2(50, -19), 40, 43, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/games/impossibleDino/img/dino-step-run.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(AnimateGameComponent, [
					new NameValuePair('slideWidth', 40),
					new NameValuePair('slideHeight', 43),
					new NameValuePair('slidesInARow', 2),
					new NameValuePair('slidesCount', 2),
					new NameValuePair('animationSpeed', 12)
				]),
				ComponentFactory.createComponent(DinoJumperComponent, [
					new NameValuePair('durationOfJump', 0.32), // 0.25
					new NameValuePair('jumpHeight', 85), // 85
				]),
				ComponentFactory.createComponent(CollisionGameComponent, [
					new NameValuePair('meshCollider', [new Rect(20, 0, 20, 15), new Rect(0, 15, 27, 20), new Rect(10, 36, 14, 6)])
				])
			],
			true

		);

		const svgObj = GameObjectFactory.createGameObject(
			rootGameObject,
			'svgLine',
			TransformFactory.createTransform(new Vector2(0, 0), 100, 100, 45),
			[
				ComponentFactory.createComponent(SvgRendererGameComponent, [
					new NameValuePair('type', SvgElementType.Line),
					new NameValuePair('x', 0),
					new NameValuePair('y', 0),
					new NameValuePair('x1', 100),
					new NameValuePair('y1', 0),
					new NameValuePair('stroke', '#0F0'),
				])
			],
			true
		);
		const svgCircleObj = GameObjectFactory.createGameObject(
			rootGameObject,
			'svgCircleObj',
			TransformFactory.createTransform(new Vector2(0, 0), 100, 100, 45),
			[
				ComponentFactory.createComponent(SvgRendererGameComponent, [
					new NameValuePair('type', SvgElementType.Circle),
					new NameValuePair('x', 0),
					new NameValuePair('y', 0),
					new NameValuePair('r', 100),
					new NameValuePair('stroke', '#0FF'),
					new NameValuePair('strokeWidth', '3'),
					new NameValuePair('strokeDasharray', '10 5')
				])
			],
			true
		);

		const svgPathObj = GameObjectFactory.createGameObject(
			rootGameObject,
			'svgPathObj',
			TransformFactory.createTransform(new Vector2(0, 0), 100, 100, 10),
			[
				ComponentFactory.createComponent(SvgRendererGameComponent, [
					new NameValuePair('type', SvgElementType.Path),
					new NameValuePair('x', 0),
					new NameValuePair('y', 0),
					new NameValuePair('pathElements', [
						new SvgPathElement(SvgPathElementType.MoveTo, 0, 0),
						new SvgPathElement(SvgPathElementType.LineTo, 30, 0),
						new SvgPathElement(SvgPathElementType.LineTo, 30, 40),
					]),
					new NameValuePair('stroke', '#F00'),
					new NameValuePair('strokeWidth', '1')
				])
			],
			true
		);

		return rootGameObject;
	}
}

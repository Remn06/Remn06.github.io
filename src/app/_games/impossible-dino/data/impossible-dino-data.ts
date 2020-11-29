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
import { DinoClockGameComponent } from '../components/dino-clock-game-component';
import { DinoScoreCounterComponent } from '../components/dino-score-counter-component';
import { DinoLivesComponent } from '../components/dino-lives-component';

export class ImpossibleDinoData {
	public static getData(): GameObject {

		const rootGameObject = GameObjectFactory.createGameObject(
			null,
			'root',
			TransformFactory.createGlobalTransform(null, new Vector2(0, 0), 0, 0, 0),
			[],
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
			TransformFactory.createGlobalTransform(rootGameObject.transform, new Vector2(400, 170), 46, 13, 0),
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
			TransformFactory.createGlobalTransform(rootGameObject.transform, new Vector2(500, 150), 46, 13, 0),
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
			TransformFactory.createGlobalTransform(rootGameObject.transform, new Vector2(700, 130), 46, 13, 0),
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
			TransformFactory.createGlobalTransform(rootGameObject.transform, new Vector2(0, 269), 8, 8, 0),
			[
				ComponentFactory.createComponent(GroundShifterComponent, [
					new NameValuePair('speed', 200),
					new NameValuePair('margin', 100),
				]),
				ComponentFactory.createComponent(CactiProducerComponent, [
					new NameValuePair('frequency', 300),
					new NameValuePair('shiftIntervalFrom', 20),
					new NameValuePair('shiftIntervalTo', 200)
				], true)
			],
			true
		);

		const dino = GameObjectFactory.createGameObject(
			groundHolder,
			'Dino',
			TransformFactory.createLocalTransform(groundHolder.transform, new Vector2(50, -19), 40, 43, 0),
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
				]),
				ComponentFactory.createComponent(DinoLivesComponent, [
					new NameValuePair('lives', 3)
				])
			],
			true
		);


		const svgDinoClockRootObj = GameObjectFactory.createGameObject(
			rootGameObject,
			'SvgDinoClockRootObj',
			TransformFactory.createGlobalTransform(rootGameObject.transform, new Vector2(30, 30), 100, 100, 0),
			[
				ComponentFactory.createComponent(DinoClockGameComponent, [])
			],
			true
		);
		const dinoScore = GameObjectFactory.createGameObject(
			svgDinoClockRootObj,
			'dinoScore',
			TransformFactory.createLocalTransform(svgDinoClockRootObj.transform, new Vector2(110, 0), 150, 20, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('cssStyle', 'font-family: \'Tangerine\', serif; font-size: 20px;')
				], true),
				ComponentFactory.createComponent(DinoScoreCounterComponent, [
					new NameValuePair('counterSpeed', 10)
				])
			],
			true
		);



		return rootGameObject;
	}
}

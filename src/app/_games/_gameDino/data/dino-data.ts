import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { StartButtonGameComponent } from '../components/start-button-game-component';
import { CenterPositionGameComponent } from '../components/center-position-game-component';
import { DinoChangerGameComponent } from '../components/dino-changer-game-component';
import { ScoreGameComponent } from '../components/score-game-component';
import { CloudMoverGameComponent } from '../components/cloud-mover-game-component';
import { AnimateGameComponent } from '../../../business/game-components/core/animate-game-component/animate-game-component';
import { DinoJumpGameComponent } from '../components/dino-jump-game-component';
import { SoundPlayerGameComponent } from '../../../business/game-components/core/sound-player-game-component';
import { GroundMoverComponent } from '../components/ground-mover-component';
import { CactusMoverGameComponent } from '../components/cactus-mover-game-component';

export class DinoData {
	public static getData(): GameObject {

		const rootGameObject = GameObjectFactory.createGameObject(
			null,
			'root',
			TransformFactory.createTransform(new Vector2(0, 0), 0, 0, 0),
			[],
			true
		);

		GameObjectFactory.createGameObject(rootGameObject, 'Start Button',
			TransformFactory.createTransform(new Vector2(100, 25), 34, 30, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('cssStyle', ''),
					new NameValuePair('backgroundImage', 'assets/_gameDino/img/start-button.png')
				], true),
				ComponentFactory.createComponent(StartButtonGameComponent, []),
				ComponentFactory.createComponent(CenterPositionGameComponent, [
					new NameValuePair('centerByXAxis', true),
					new NameValuePair('centerByYAxis', false),
					new NameValuePair('shift', new Vector2(0, 125))
				]),
			],
			true
		);

		const dynamicObjects = GameObjectFactory.createGameObject(
			rootGameObject,
			'DynamicObjects',
			TransformFactory.createChildTransform(rootGameObject.transform, Vector2.zero, 0, 0, 0),
			[
				ComponentFactory.createComponent(DinoChangerGameComponent, [], true)
			],
			true
		);
		dynamicObjects.paused = true;

		GameObjectFactory.createGameObject(dynamicObjects, 'Score',
			TransformFactory.createTransform(new Vector2(100, 25), 200, 30, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('cssStyle', 'font-family: monospace; font-weight: bold; font-size: 20px; color: gray;')
				], true),
				ComponentFactory.createComponent(ScoreGameComponent, []),
				ComponentFactory.createComponent(CenterPositionGameComponent, [
					new NameValuePair('centerByXAxis', true),
					new NameValuePair('centerByYAxis', false),
					new NameValuePair('shift', new Vector2(200, 50))
				]),
			],
			false
		);

		const cloud1 = GameObjectFactory.createGameObject(dynamicObjects, 'Cloud1',
			TransformFactory.createChildTransform(rootGameObject.transform, Vector2.zero, 50, 50, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', `assets/_gameDino/img/cloud.png`)
				], true),
				ComponentFactory.createComponent(CloudMoverGameComponent, [
					new NameValuePair('speed', 100)
				], true)
			],
			true
		);

		const cloud2 = GameObjectFactory.createGameObject(dynamicObjects, 'Cloud2',
			TransformFactory.createChildTransform(rootGameObject.transform, Vector2.zero, 50, 50, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', `assets/_gameDino/img/cloud.png`)
				], true),
				ComponentFactory.createComponent(CloudMoverGameComponent, [
					new NameValuePair('speed', 100)
				], true)
			],
			true
		);

		const cloud3 = GameObjectFactory.createGameObject(dynamicObjects, 'Cloud3',
			TransformFactory.createChildTransform(rootGameObject.transform, Vector2.zero, 50, 50, 0),
			[
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', `assets/_gameDino/img/cloud.png`)
				], true),
				ComponentFactory.createComponent(CloudMoverGameComponent, [
					new NameValuePair('speed', 100)
				], true)
			],
			true
		);

		const dino = GameObjectFactory.createGameObject(dynamicObjects, 'Dino',
			TransformFactory.createTransform(new Vector2(50, 200), 50, 50, 0),
			[
				ComponentFactory.createComponent(AnimateGameComponent, [
					new NameValuePair('slideWidth', 50),
					new NameValuePair('slideHeight', 50),
					new NameValuePair('slidesInARow', 2),
					new NameValuePair('slidesCount', 2),
					new NameValuePair('animationSpeed', 12)
				], true),
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/_gameDino/img/dino-run-2-slides.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(DinoJumpGameComponent, [
					new NameValuePair('height', 100),
					new NameValuePair('speed', 200)
				], true),
				ComponentFactory.createComponent(SoundPlayerGameComponent, [
					new NameValuePair('sounds', [new NameValuePair('jump', 'assets/_gameDino/sound/jump.mp3')])
				], true)
			],
			true
		);

		const dinoBend = GameObjectFactory.createGameObject(dynamicObjects, 'Dino Bend',
			TransformFactory.createTransform(new Vector2(55, 210), 55, 26, 0),
			[
				ComponentFactory.createComponent(AnimateGameComponent, [
					new NameValuePair('slideWidth', 55),
					new NameValuePair('slideHeight', 26),
					new NameValuePair('slidesInARow', 2),
					new NameValuePair('slidesCount', 2),
					new NameValuePair('animationSpeed', 12)
				], true),
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', 'assets/_gameDino/img/dino-bend-2-slides.png'),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(DinoJumpGameComponent, [
					new NameValuePair('height', 100),
					new NameValuePair('speed', 200)
				], true)
			],
			false
		);

		const groundMover = GameObjectFactory.createGameObject(dynamicObjects, 'GroundMover',
			TransformFactory.createTransform(new Vector2(0, 222), 0, 0, 0),
			[
				ComponentFactory.createComponent(GroundMoverComponent, [
					new NameValuePair('speed', 400),
					new NameValuePair('margin', 100)
				], true),
				// todo remove this component and fix the engine.
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', `assets/_gameDino/img/cloud.png`)
				], true),
			],
			true
		);

		const cactus = GameObjectFactory.createGameObject(dynamicObjects, 'Cactus',
			TransformFactory.createTransform(new Vector2(0, 222), 0, 0, 0),
			[
				ComponentFactory.createComponent(CactusMoverGameComponent, [
					new NameValuePair('speed', 400),
					new NameValuePair('minInterval', 1000),
					new NameValuePair('maxInterval', 2000),
					new NameValuePair('dinoGameObjectName', 'Dino'),
					new NameValuePair('dinoBendGameObjectName', 'Dino Bend')
				], true),
				// todo remove this component and fix the engine.
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', `assets/_gameDino/img/cloud.png`)
				], true),
				ComponentFactory.createComponent(SoundPlayerGameComponent, [
					new NameValuePair('sounds', [new NameValuePair('collide', 'assets/_gameDino/sound/collide.mp3')])
				], true),
			],
			true
		);

		return rootGameObject;
	}

}

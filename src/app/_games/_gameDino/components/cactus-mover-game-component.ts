import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from '../../../business/game-components/core/base/game-component';
import { GameObject } from '../../../business/game-structure/game-object';
import { GameObjectFactory } from '../../../business/core/factory/game-object-factory';
import { TransformFactory } from '../../../business/core/factory/transform-factory';
import { Vector2 } from '../../../business/common/vector2';
import { ComponentFactory } from '../../../business/core/factory/component-factory';
import { HtmlRendererGameComponent } from '../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { NameValuePair } from '../../../business/common/name-value-pair';
import { GroundRemoveOutOfScreenComponent } from './ground-remove-out-of-screen-component';
import { Timer } from '../../../business/common/timer';
import { GameScreen } from '../../../business/screen/game-screen';
import { AnimateGameComponent } from '../../../business/game-components/core/animate-game-component/animate-game-component';
import { VMath } from '../../../business/common/v-math';
import { GameObjectCollection } from '../../../business/core/game-object-collection';
import { SoundPlayerGameComponent } from '../../../business/game-components/core/sound-player-game-component';

class IObstacleInfo {
	name: string;
	picture: string;
	width: number;
	height: number;
	slideWidth: number;
	slideHeight: number;
	slidesInARow: number;
	slidesCount: number;
	animationSpeed: number;
}

const obstacleInfos: IObstacleInfo[] = [
	{
		name: 'Cactus small',
		picture: 'assets/_gameDino/img/cactus-small-15x33.png',
		width: 15,
		height: 33,
		slideWidth: 15,
		slideHeight: 33,
		slidesInARow: 1,
		slidesCount: 1,
		animationSpeed: 1
	}, {
		name: 'Cactus medium',
		picture: 'assets/_gameDino/img/cactus-medium-23x46.png',
		width: 23,
		height: 46,
		slideWidth: 23,
		slideHeight: 46,
		slidesInARow: 1,
		slidesCount: 1,
		animationSpeed: 1
	}
];

@Exclude()
export class CactusMoverGameComponent extends GameComponent  {

	public name = CactusMoverGameComponent.name;

	@Expose()
	public speed: number;

	@Expose()
	public minInterval: number;

	@Expose()
	public maxInterval: number;

	@Expose()
	public dinoGameObjectName: string;

	@Expose()
	public dinoBendGameObjectName: string;

	private nextTime: number;
	private dinoGameObject: GameObject;
	private dinoBendGameObject: GameObject;
	private player: SoundPlayerGameComponent;

	public start(): void {
		this.reset();
		const rootGameObject = GameObjectCollection.root(this.gameObject);
		this.dinoGameObject = GameObjectCollection.findDescendantByName(this.dinoGameObjectName, rootGameObject);
		this.dinoBendGameObject = GameObjectCollection.findDescendantByName(this.dinoBendGameObjectName, rootGameObject);
		this.player = this.gameObject.getComponent(SoundPlayerGameComponent.name) as SoundPlayerGameComponent;
	}

	public draw(): void {
	}

	public update(): void {
		if (this.nextTime < Timer.getTime()) {
			const obstacleInfo = obstacleInfos[VMath.randIntMaxExcluded(0, obstacleInfos.length)];
			const x = GameScreen.getDefaultScreen().width + obstacleInfo.width;
			this.createObstacleGameObject(obstacleInfo, x);
			this.setNextTime();
		}

		this.gameObject.children.forEach((obstacle) => {
			const pos = obstacle.transform.localPosition.clone();
			pos.x -= this.speed * Timer.delta;
			obstacle.transform.localPosition = pos;
		});

		this.checkCollisionsWithDino();
	}

	public destroy(): void {
	}

	public reset(): void {
		this.setNextTime();
		GameObjectCollection.removeChildren(this.gameObject);
	}

	private createObstacleGameObject(obstacleInfo: IObstacleInfo, x: number): GameObject {
		const obstacle = GameObjectFactory.createGameObject(this.gameObject,
			obstacleInfo.name,
			TransformFactory.createTransform(new Vector2(x, 0 - (obstacleInfo.height / 2)), obstacleInfo.width, obstacleInfo.height, 0),
			[
				ComponentFactory.createComponent(AnimateGameComponent, [
					new NameValuePair('slideWidth', obstacleInfo.slideWidth),
					new NameValuePair('slideHeight', obstacleInfo.slideHeight),
					new NameValuePair('slidesInARow', obstacleInfo.slidesInARow),
					new NameValuePair('slidesCount', obstacleInfo.slidesCount),
					new NameValuePair('animationSpeed', obstacleInfo.animationSpeed)
				], true),
				ComponentFactory.createComponent(HtmlRendererGameComponent, [
					new NameValuePair('backgroundImage', `${obstacleInfo.picture}`),
					new NameValuePair('cssStyle', '')
				], true),
				ComponentFactory.createComponent(GroundRemoveOutOfScreenComponent, [
					new NameValuePair('margin', 100)
				], true)
			],
			true
		);
		return obstacle;
	}

	private setNextTime(): void {
		this.nextTime = Timer.getTime() + VMath.randIntMaxExcluded(this.minInterval, this.maxInterval);
	}

	private checkCollisionsWithDino() {
		if (this.dinoGameObject == null || this.dinoBendGameObject == null) {
			return;
		}

		const dino = this.dinoGameObject.active ? this.dinoGameObject : this.dinoBendGameObject;

		const dinoRect = dino.transform.toRect();
		const collided = this.gameObject.children.some((child: GameObject) => child.transform.toRect().intersects(dinoRect));
		if (collided) {
			this.stopGame();
		}
	}

	private stopGame(): void {
		const dynamicObjects = GameObjectCollection.findDescendantByName('DynamicObjects', GameObjectCollection.root(this.gameObject));
		dynamicObjects.paused = true;
		const startButton = GameObjectCollection.findDescendantByName('Start Button', GameObjectCollection.root(this.gameObject));
		startButton.active = true;
		this.player.play('collide');
	}
}

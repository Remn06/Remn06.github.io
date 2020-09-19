import { Exclude, Expose, Type } from 'class-transformer';
import { GameScene } from './game-scene';

@Exclude()
export class GameData {
	@Expose()
	@Type(() => GameScene)
	scenes: GameScene[];

	constructor(scenes: GameScene[]) {
		this.scenes = scenes;
	}
}

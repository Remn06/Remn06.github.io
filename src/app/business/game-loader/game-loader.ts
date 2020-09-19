import { GameData } from '../game-structure/game-data';
import { plainToClass } from 'class-transformer';
import { HardcodedGameData } from './hardcoded-game-data';

export class GameLoader {

	public static load(): GameData {
		return HardcodedGameData.getData();
	}

	public static loadFromJson(dataJson: any): GameData {
		const data = plainToClass(GameData, dataJson) as any;
		return data as GameData;
	}
}

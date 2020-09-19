import { GameLoader } from './game-loader/game-loader';
import { GameData } from './game-structure/game-data';
import { Subscription } from 'rxjs';
import { EventMessage, EventMessageType } from './events/event-message';
import { Timer } from './common/timer';
import { GameProcessor } from './game-processor';
import { GameScene } from './game-structure/game-scene';
import { GameEventManager } from './game-event-manager';

export class GameManager {
	private static gameManagerInstance: GameManager = null;

	private gameData: GameData = null;
	private currentScene: GameScene = null;
	private timerSubscription: Subscription = null;

	public static instance(): GameManager {
		if (GameManager.gameManagerInstance == null) {
			GameManager.gameManagerInstance = new GameManager();
		}
		return GameManager.gameManagerInstance;
	}

	public load(): void {

		this.gameData = GameLoader.load();
		this.currentScene = this.gameData.scenes[0];
		this.setTimer();
		GameEventManager.publish(new EventMessage(EventMessageType.GameStarted, this.currentScene.rootGameObject.children));
	}

	public destroy(): void {
		if (this.timerSubscription) {
			this.timerSubscription.unsubscribe();
		}
	}

	private setTimer(): void {
		if (this.timerSubscription) {
			this.timerSubscription.unsubscribe();
		}
		this.timerSubscription = Timer.timerEvent.subscribe(() => {
			GameProcessor.process(this.currentScene.rootGameObject);
			GameEventManager.publish(new EventMessage(EventMessageType.GameUpdate, this.currentScene));
		});
	}
}





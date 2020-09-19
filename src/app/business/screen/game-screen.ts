export class GameScreen {

	private static defaultScreen: GameScreen;

	public width: number;
	public height: number;

	public static getDefaultScreen(): GameScreen {
		if (GameScreen.defaultScreen == null) {
			GameScreen.defaultScreen = new GameScreen();
		}
		return this.defaultScreen;
	}
}

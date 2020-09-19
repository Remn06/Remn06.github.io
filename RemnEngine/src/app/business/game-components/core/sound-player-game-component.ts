import { Exclude, Expose } from 'class-transformer';
import { GameComponent } from './base/game-component';
import { NameValuePair } from '../../common/name-value-pair';

@Exclude()
export class SoundPlayerGameComponent extends GameComponent  {

	public name = SoundPlayerGameComponent.name;

	@Expose()
	public sounds: NameValuePair[];

	// https://www.zapsplat.com/sound-effect-categories/ vetal:qwER12#$
	private audios = new Map<string, HTMLAudioElement>();

	public start(): void {
		this.sounds.forEach((sound) => {
			const audio = new Audio(sound.value);
			this.audios.set(sound.name, audio);
		});
	}

	public draw(): void {
	}

	public update(): void {
	}

	public destroy(): void {
	}

	public play(soundName: string): void {
		if (!this.audios.has(soundName)) {
			console.error(`Sound with name: ${soundName} wasn't found`);
			return;
		}
		this.audios.get(soundName).play();
	}
}

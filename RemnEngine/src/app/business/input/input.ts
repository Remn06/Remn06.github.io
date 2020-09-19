import { IInputAdapter } from './adapters/i-input-adapter';
import { MouseInputEvent } from './dto/mouse-input-event';

export class Input {

	private static inputAdapters: IInputAdapter[] = [];

	public static getKey(key: string): boolean {
		return Input.some((a: IInputAdapter) => a.key.has(key));
	}
	public static getKeyUp(key: string): boolean {
		return Input.some((a: IInputAdapter) => a.keyUp.has(key));
	}
	public static getKeyDown(key: string): boolean {
		return Input.some((a: IInputAdapter) => a.keyDown.has(key));
	}

	public static getMouseDown(): MouseInputEvent[] {
		return Input.inputAdapters.reduce((events: MouseInputEvent[], adapter) => {
			return events.concat(Array.from(adapter.mouseDown.values()));
		}, []);
	}

	public static getMouseUp(): MouseInputEvent[] {
		return Input.inputAdapters.reduce((events: MouseInputEvent[], adapter) => {
			return events.concat(Array.from(adapter.mouseUp.values()));
		}, []);
	}

	public static setAdapter(inputAdapter: IInputAdapter) {
		Input.inputAdapters.push(inputAdapter);
	}

	public static frameEnd(): void {
		Input.inputAdapters.forEach((a) => a.frameEnd());
	}

	private static some(predicate: (adapter: IInputAdapter) => boolean): boolean {
		return Input.inputAdapters.some((a) => predicate(a));
	}
}

import { MouseInputEvent } from '../dto/mouse-input-event';

export interface IInputAdapter {
	key: Set<string>;
	keyUp: Set<string>;
	keyDown: Set<string>;

	mouseUp: Set<MouseInputEvent>;
	mouseDown: Set<MouseInputEvent>;

	frameEnd(): void;
}

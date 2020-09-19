import { MouseInputEvent } from '../dto/mouse-input-event';

export abstract class AbstractInputAdapter {
	public key: Set<string> = new Set<string>();
	public keyUp: Set<string> = new Set<string>();
	public keyDown: Set<string> = new Set<string>();

	public mouseUp: Set<MouseInputEvent> = new Set<MouseInputEvent>();
	public mouseDown: Set<MouseInputEvent> = new Set<MouseInputEvent>();
}

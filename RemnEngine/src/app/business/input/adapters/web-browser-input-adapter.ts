import { AbstractInputAdapter } from './abstract-input-adapter';
import { MouseButtonType, MouseInputEvent } from '../dto/mouse-input-event';

export class WebBrowserInputAdapter extends AbstractInputAdapter {

	private gameAreaElement: HTMLElement;

	constructor(private document: Document) {
		super();
		this.initEvents();
	}

	public frameEnd(): void {
		this.keyDown.clear();
		this.keyUp.clear();
		this.mouseDown.clear();
		this.mouseUp.clear();
	}

	private initEvents(): void {
		this.document.addEventListener('keydown', (event: KeyboardEvent) => this.onKeyDown(event) );
		this.document.addEventListener('keyup', (event: KeyboardEvent) => this.onKeyUp(event) );
		this.gameAreaElement = this.document.getElementById('gameArea');
		this.gameAreaElement.addEventListener('mousedown', (event: MouseEvent) => this.onMouseDown(event) );
		this.gameAreaElement.addEventListener('mouseup', (event: MouseEvent) => this.onMouseUp(event) );
	}

	private onKeyDown(event: KeyboardEvent): void {
		this.keyDown.add(event.code);
		this.key.add(event.code);
		console.log(`keyDown ${event.code}`);
	}

	private onKeyUp(event: KeyboardEvent): void {
		this.keyUp.add(event.code);
		this.key.delete(event.code);
		console.log(`keyUp ${event.code}`);
	}

	private onMouseDown(event: MouseEvent): void {
		const buttonType = event.button === 0 ? MouseButtonType.left : (event.button === 1 ? MouseButtonType.middle : MouseButtonType.right);
		const mouseData = new MouseInputEvent(
			buttonType,
			event.pageX - this.gameAreaElement.offsetLeft, event.pageY - this.gameAreaElement.offsetTop);
		this.mouseDown.add(mouseData);
		console.log(`mouseDown ${buttonType}: ${mouseData.coordinates.x}, ${mouseData.coordinates.y}`);
	}

	private onMouseUp(event: MouseEvent): void {
		const buttonType = event.button === 0 ? MouseButtonType.left : (event.button === 1 ? MouseButtonType.middle : MouseButtonType.right);
		const mouseData = new MouseInputEvent(
			buttonType,
			event.pageX - this.gameAreaElement.offsetLeft, event.pageY - this.gameAreaElement.offsetTop);
		this.mouseUp.add(mouseData);
		console.log(`mouseUp ${buttonType}: ${mouseData.coordinates.x}, ${mouseData.coordinates.y}`);
	}
}

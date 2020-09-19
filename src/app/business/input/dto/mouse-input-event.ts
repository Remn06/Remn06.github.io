import { Vector2 } from '../../common/vector2';

export enum MouseButtonType {
	left = 'left',
	right = 'right',
	middle = 'middle',
}

export class MouseInputEvent {
	public button: MouseButtonType;
	public coordinates: Vector2;

	constructor(type: MouseButtonType, x: number, y: number) {
		this.button = type;
		this.coordinates = new Vector2(x, y);
	}
}

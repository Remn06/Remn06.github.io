export enum SvgPathElementType {
	MoveTo = 'M',
	MoveToShift  = 'm',
	LineTo = 'L',
	CubicBezierCurve = 'C',
	QuadraticBezierCurve = 'Q',
	EllipticalArcCurve = 'A',
	ClosePath = 'Z'
}

export class SvgPathElement {
	public type: SvgPathElementType;
	public x: number;
	public y: number;

	constructor(type: SvgPathElementType, x: number, y: number) {
		this.type = type;
		this.x = x;
		this.y = y;
	}

	toString(shiftX: number = 0, shiftY: number = 0): string {
		switch (this.type) {
			case SvgPathElementType.MoveTo:
				return `M ${this.x + shiftX},${this.y + shiftY}`;
			case SvgPathElementType.MoveToShift:
				return `m ${this.x + shiftX},${this.y + shiftY}`;
			case SvgPathElementType.LineTo:
				return `L ${this.x + shiftX},${this.y + shiftY}`;
			default:
				// implement all types https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
				throw new Error('Path type is not implemented.');
		}
	}
}

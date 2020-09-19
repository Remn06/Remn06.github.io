import { VMath } from './v-math';

export class Angle {
	public static rand(from: number = 0, to: number = 360): number {
		return VMath.randIntMaxIncluded(from, to);
	}

	constructor(public value: number) {
	}

	public get normalized() {
		return this.value - Math.floor(this.value / 360) * 360;
	}

	public rotateTo(toAngle: Angle, step: number): boolean {
		if (this.isEqualTo(toAngle)) {
			console.log('EQ');
			this.value = toAngle.value;
			return true;
		}

		let destAngle = toAngle.normalized;
		let fromAngle = this.normalized;
		if (destAngle < fromAngle) {
			destAngle += 360;
		}

		const deltaCWAngle = destAngle - fromAngle;
		if (deltaCWAngle <= 180) { // Move Clock Wise
			// console.log('CW');
			const resAngle = new Angle(this.value + step).normalized;
			if (resAngle > destAngle) {
				// console.log(`CW-SET toAngle: ${JSON.stringify(toAngle)} this.value: ${this.value}`);
				this.value = toAngle.normalized;
				return true;
			}
			this.value += step;
			return false;
		}

		// console.log('CCW');
		fromAngle += 360;

		const res = new Angle(fromAngle - step);
		if (res.value < toAngle.normalized) {
			// console.log(`CCW-SET ${JSON.stringify(toAngle)} this.value: ${this.value}`);
			this.value = toAngle.normalized;
			return true;
		}
		this.value = res.normalized;
		return false;
	}


	public isEqualTo(angle: Angle): boolean {
		return Math.round(this.value * 100) === Math.round(angle.value * 100);
	}
}

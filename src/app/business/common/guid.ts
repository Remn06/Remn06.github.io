import * as uuid from 'uuid';

export class Guid {
	public static create(): string {
		return uuid.v4();
	}
}

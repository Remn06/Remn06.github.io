export enum EventMessageType {
	Empty = 'Empty',
	GameStarted = 'GameStarted',
	GameUpdate = 'GameUpdate',
}
export class EventMessage {
	public static empty(): EventMessage {
		return new EventMessage(EventMessageType.Empty, null);
	}

	constructor(public type: EventMessageType, public data: any) { }
}

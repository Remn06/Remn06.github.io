import { BehaviorSubject, Subject } from 'rxjs';
import { EventMessage, EventMessageType } from './events/event-message';

export class GameEventManager {
	private static onGameEventSubject = new BehaviorSubject<EventMessage>(EventMessage.empty());

	public static events(): Subject<EventMessage> {
		return this.onGameEventSubject;
	}

	public static publish(event: EventMessage): void {
		this.onGameEventSubject.next(event);
	}
}

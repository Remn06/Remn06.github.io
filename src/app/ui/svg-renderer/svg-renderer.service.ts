import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { GameObjectRenderInfo } from '../../business/game-components/core/html-renderer-game-component/game-object-render-info';
import { GameEventManager } from '../../business/game-event-manager';
import { EventMessage, EventMessageType } from '../../business/events/event-message';
import { GameScene } from '../../business/game-structure/game-scene';
import { GameObjectCollection } from '../../business/core/game-object-collection';
import { SvgRendererGameComponent } from '../../business/game-components/svg-renderer-game-component/svg-renderer-game-component';

@Injectable({
  providedIn: 'root'
})
export class SvgRendererService implements OnDestroy {
	private subject = new BehaviorSubject<string[]>([]);
	private gameCalculatedSubscription: Subscription;

	constructor() {
		this.gameCalculatedSubscription = GameEventManager.events().subscribe((eventMessage) => {
			this.processEvent(eventMessage);
		});
	}

	ngOnDestroy(): void {
		this.gameCalculatedSubscription.unsubscribe();
		this.subject.complete();
	}

	public getSvgElements(): Subject<string[]> {
		return this.subject;
	}

	private render(gameScene: GameScene): void {
		const allComponents =
			GameObjectCollection.getAllComponents<SvgRendererGameComponent>(SvgRendererGameComponent.name, gameScene.rootGameObject);

		const rendered = allComponents.reduce((res, component) => {
			res.push(component.svgElement);
			return res;
		}, []);
		this.subject.next(rendered);
	}

	private processEvent(eventMessage: EventMessage): void {
		switch (eventMessage.type) {
			case EventMessageType.GameUpdate:
				this.render(eventMessage.data as GameScene);
				break;
			default:
		}
	}
}

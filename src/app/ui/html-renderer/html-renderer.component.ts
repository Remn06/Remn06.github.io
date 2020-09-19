import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GameObjectRenderInfo } from '../../business/game-components/core/html-renderer-game-component/game-object-render-info';
import { Subscription } from 'rxjs';
import { HtmlRendererService } from './html-renderer.service';
import { GameManager } from '../../business/game-manager';

@Component({
  selector: 'app-html-renderer',
  templateUrl: './html-renderer.component.html',
  styleUrls: ['./html-renderer.component.less']
})
export class HtmlRendererComponent implements OnInit {

	gameObjectsRenderInfos: GameObjectRenderInfo[] = [];

	private subscription: Subscription = null;

	constructor(private htmlRendererService: HtmlRendererService, private changeDetectorRef: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.subscribeToGameObjects();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	private subscribeToGameObjects(): void {
		this.subscription = this.htmlRendererService.getGameObjectsRenderInfos().subscribe(gameObjectsRenderInfos => {
			this.gameObjectsRenderInfos = gameObjectsRenderInfos;
			this.changeDetectorRef.detectChanges();
		});
	}
}

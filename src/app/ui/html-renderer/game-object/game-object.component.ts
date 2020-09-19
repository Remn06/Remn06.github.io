import { Component, Input, OnInit } from '@angular/core';
import { GameObjectRenderInfo } from '../../../business/game-components/core/html-renderer-game-component/game-object-render-info';
import { split } from 'ts-node';

@Component({
	selector: 'app-game-object',
	templateUrl: './game-object.component.html',
	styleUrls: ['./game-object.component.less']
})
export class GameObjectComponent implements OnInit {

	@Input()
	gameObjectRenderInfo: GameObjectRenderInfo;

	constructor() {
	}

	ngOnInit() {
	}

	getStyle(): any {
		return Object.assign({
			width: this.gameObjectRenderInfo.width + 'px',
			height: this.gameObjectRenderInfo.height + 'px',
			left: this.gameObjectRenderInfo.left + 'px',
			top: this.gameObjectRenderInfo.top + 'px',
			transform: `rotate(${this.gameObjectRenderInfo.rotation}deg)`,
			'background-image': this.gameObjectRenderInfo.backgroundImage
		}, this.createCssObject(this.gameObjectRenderInfo.cssStyle));
	}

	private createCssObject(cssString: string): any {
		const retObj = {};
		if (cssString == null) {
			return retObj;
		}
		const styles = cssString.split(';');
		styles.forEach((style) => {
			if (style == null || style.indexOf(':') === -1) {
				return;
			}
			const stylePair = style.split(':');
			retObj[stylePair[0].trim()] = stylePair[1].trim();
		});
		return retObj;
	}
}

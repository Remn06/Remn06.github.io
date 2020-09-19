import { Component, HostListener, Inject, Injectable, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Input } from '../../business/input/input';
import { WebBrowserInputAdapter } from '../../business/input/adapters/web-browser-input-adapter';
import { GameScreen } from '../../business/screen/game-screen';
import { GameManager } from '../../business/game-manager';
import { RestClient } from '../../business/core/http/rest-client';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
@Injectable()
export class AppComponent implements OnInit {

	width = '100px';
	height = '100px';

	constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) {
	}

	@HostListener('window:resize', [])
	onResize() {
		const margin = 0;

		const screen = GameScreen.getDefaultScreen();
		screen.width = window.innerWidth - margin;
		screen.height = window.innerHeight - margin;

		this.width = `${window.innerWidth - margin}px`;
		this.height = `${window.innerHeight - margin}px`;
	}

	ngOnInit() {
		setTimeout(() => {
			this.onResize();
		}, 0);
		Input.setAdapter(new WebBrowserInputAdapter(this.document));
		RestClient.httpClient = this.http;
		setTimeout(() => {
			GameManager.instance().load();
		}, 10);
	}
}

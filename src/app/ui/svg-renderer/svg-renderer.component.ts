import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SvgRendererService } from './svg-renderer.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-renderer',
  templateUrl: './svg-renderer.component.html',
  styleUrls: ['./svg-renderer.component.less']
})
export class SvgRendererComponent implements OnInit, OnDestroy {
	svgElements: SafeHtml = '';

	@Input()
	public width: number;

	@Input()
	public height: number;

	public get viewBoxValue(): string {
		return `0 0 ${this.width} ${this.height}`;
	}

	private subscription: Subscription = null;

	constructor(
		private svgRendererService: SvgRendererService,
		private changeDetectorRef: ChangeDetectorRef,
		private sanitized: DomSanitizer) { }

	ngOnInit() {
		this.subscribeToSvgElements();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	private subscribeToSvgElements(): void {
		this.subscription = this.svgRendererService.getSvgElements().subscribe(svgElements => {
			this.svgElements = this.sanitized.bypassSecurityTrustHtml(svgElements.join('\n'));
			this.changeDetectorRef.detectChanges();
		});
	}
}

import { TestBed } from '@angular/core/testing';

import { SvgRendererService } from './svg-renderer.service';

describe('SvgRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
	const service: SvgRendererService = TestBed.get(SvgRendererService);
	expect(service).toBeTruthy();
  });
});

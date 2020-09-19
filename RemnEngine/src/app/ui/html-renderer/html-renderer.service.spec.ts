import { TestBed } from '@angular/core/testing';

import { HtmlRendererService } from './html-renderer.service';

describe('HtmlRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlRendererService = TestBed.get(HtmlRendererService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AjoutBlogService } from './dialog.service';

describe('AjoutBlogService', () => {
  let service: AjoutBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

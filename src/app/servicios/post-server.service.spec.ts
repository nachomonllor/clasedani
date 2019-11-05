import { TestBed } from '@angular/core/testing';

import { PostServerService } from './post-server.service';

describe('PostServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostServerService = TestBed.get(PostServerService);
    expect(service).toBeTruthy();
  });
});

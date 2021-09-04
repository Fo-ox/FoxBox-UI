import { TestBed } from '@angular/core/testing';

import { FoxBoxUiService } from './fox-box-ui.service';

describe('FoxBoxUiService', () => {
  let service: FoxBoxUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoxBoxUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

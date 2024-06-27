import { TestBed } from '@angular/core/testing';

import { NgxBaseHarnessService } from './ngx-base-harness.service';

describe('NgxBaseHarnessService', () => {
  let service: NgxBaseHarnessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBaseHarnessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

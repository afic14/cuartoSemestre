import { TestBed } from '@angular/core/testing';

import { ApiPaisesService } from './api-paises-services.service';

describe('ApiPaisesServicesService', () => {
  let service: ApiPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

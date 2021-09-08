import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UrlService } from './url.service';
import { Url } from '../models/url.model';

const expectedUrlResponse: Url = {
  hashed: 'QwErTy',
  full_Url: 'https://tech.gov.sg'
};

const expectedShortened: String = 'QwErTy';

describe('UrlService', () => {
  let service: UrlService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UrlService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a shortened link based on given full Url', () => {
    service.saveNewUrl('https://tech.gov.sg').subscribe(res => {
      expect(res).toEqual(expectedShortened);
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8080/api/url');
    expect(testRequest.request.method).toEqual('POST');

    testRequest.flush(expectedShortened);
    httpTestingController.verify();
  });

  it('should fetch a full URL based on given hash', () => {
    service.getUrl('QwErTy').subscribe(res => {
      expect(res).toEqual(expectedUrlResponse);
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8080/api/url/QwErTy');
    expect(testRequest.request.method).toEqual('GET');

    testRequest.flush(expectedUrlResponse);
    httpTestingController.verify();
  });
});

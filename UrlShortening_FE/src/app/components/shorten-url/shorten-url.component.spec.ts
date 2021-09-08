import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Url } from 'src/app/models/url.model';
import { UrlService } from 'src/app/services/url.service';
import { SpinnerComponent } from '../spinner/spinner.component';

import { ShortenUrlComponent } from './shorten-url.component';

import SpyObj = jasmine.SpyObj;

const expectedShortenedUrlResponse: Url = {
  hashed: 'QwErTy',
  full_Url: 'https://tech.gov.sg'
};


describe('ShortenUrlComponent', () => {
  let component: ShortenUrlComponent;
  let fixture: ComponentFixture<ShortenUrlComponent>;

  let routerSpy: Router;
  let urlServiceSpy: SpyObj<UrlService>;

  beforeEach(async () => {

    urlServiceSpy = jasmine.createSpyObj(['saveNewUrl']);
    urlServiceSpy.saveNewUrl.withArgs('https://tech.gov.sg').and.returnValue(of(expectedShortenedUrlResponse));

    await TestBed.configureTestingModule({
      declarations: [ShortenUrlComponent, SpinnerComponent],
      imports: [MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, HttpClientTestingModule, ReactiveFormsModule, NoopAnimationsModule, MatCardModule],
      providers: [
        { provide: UrlService, useValue: '' }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display main title', () => {
    const mainTitle = fixture.nativeElement.querySelector('.url_instruction');
    expect(mainTitle.textContent).toEqual('Please paste your Url below:');
  });

  describe('when user first load page', () => {
    it('should not display spinner and the result card', () => {
      const resultCard = fixture.nativeElement.querySelector('.url_result_card');
      expect(resultCard).toBeNull();

      const spinner = fixture.nativeElement.querySelector('.url_result_card app-spinner');
      expect(spinner).toBeNull();
    });
  });

  describe('when user enter valid url', () => {
    let inputElement;

    beforeEach(() => {
      inputElement = fixture.nativeElement.querySelector('.input');
      inputElement.value = 'https://tech.gov.sg';
      inputElement.dispatchEvent(new Event('input'));

      component.urlForm.get('suppliedUrlFormControl').markAllAsTouched();
      fixture.detectChanges();
    });

    it('should not have any validation error', () => {
      const formErrors = document.querySelectorAll('.mat-error');
      expect(formErrors.length).toEqual(0);
    });
  });
});

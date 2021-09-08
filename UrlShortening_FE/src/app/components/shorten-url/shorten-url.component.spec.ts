import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UrlService } from 'src/app/services/url.service';
import { SpinnerComponent } from '../spinner/spinner.component';

import { ShortenUrlComponent } from './shorten-url.component';

describe('ShortenUrlComponent', () => {
  let component: ShortenUrlComponent;
  let fixture: ComponentFixture<ShortenUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortenUrlComponent, SpinnerComponent],
      imports: [MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, HttpClientTestingModule, ReactiveFormsModule, NoopAnimationsModule, MatCardModule],
      providers: [
        {provide: UrlService, useValue: ''}
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
});

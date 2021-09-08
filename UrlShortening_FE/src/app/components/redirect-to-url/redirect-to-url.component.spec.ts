import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RedirectToUrlComponent } from './redirect-to-url.component';
import { SpinnerComponent } from '../spinner/spinner.component';


describe('RedirectToUrlComponent', () => {
  let component: RedirectToUrlComponent;
  let fixture: ComponentFixture<RedirectToUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedirectToUrlComponent, SpinnerComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatProgressSpinnerModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectToUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

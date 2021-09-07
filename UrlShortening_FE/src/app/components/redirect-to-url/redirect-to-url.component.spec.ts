import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToUrlComponent } from './redirect-to-url.component';

describe('RedirectToUrlComponent', () => {
  let component: RedirectToUrlComponent;
  let fixture: ComponentFixture<RedirectToUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectToUrlComponent ]
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

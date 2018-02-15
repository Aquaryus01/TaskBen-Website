import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarLogoComponent } from './topbar-logo.component';

describe('TopbarLogoComponent', () => {
  let component: TopbarLogoComponent;
  let fixture: ComponentFixture<TopbarLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

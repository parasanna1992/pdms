import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OemsComponent } from './oems.component';

describe('OemsComponent', () => {
  let component: OemsComponent;
  let fixture: ComponentFixture<OemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

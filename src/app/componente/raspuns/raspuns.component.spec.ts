import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspunsComponent } from './raspuns.component';

describe('RaspunsComponent', () => {
  let component: RaspunsComponent;
  let fixture: ComponentFixture<RaspunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

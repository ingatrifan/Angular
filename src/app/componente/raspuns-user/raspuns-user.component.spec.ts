import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspunsUserComponent } from './raspuns-user.component';

describe('RaspunsUserComponent', () => {
  let component: RaspunsUserComponent;
  let fixture: ComponentFixture<RaspunsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspunsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspunsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

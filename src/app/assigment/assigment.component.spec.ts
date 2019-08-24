import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentComponent } from './assigment.component';

describe('AssigmentComponent', () => {
  let component: AssigmentComponent;
  let fixture: ComponentFixture<AssigmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

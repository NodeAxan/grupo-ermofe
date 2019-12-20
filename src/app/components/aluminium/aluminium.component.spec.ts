import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiumComponent } from './aluminium.component';

describe('AluminiumComponent', () => {
  let component: AluminiumComponent;
  let fixture: ComponentFixture<AluminiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

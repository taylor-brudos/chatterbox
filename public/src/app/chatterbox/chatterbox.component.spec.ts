import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterboxComponent } from './chatterbox.component';

describe('ChatterboxComponent', () => {
  let component: ChatterboxComponent;
  let fixture: ComponentFixture<ChatterboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

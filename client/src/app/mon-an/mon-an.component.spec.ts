import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonAnComponent } from './mon-an.component';

describe('MonAnComponent', () => {
  let component: MonAnComponent;
  let fixture: ComponentFixture<MonAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonAnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

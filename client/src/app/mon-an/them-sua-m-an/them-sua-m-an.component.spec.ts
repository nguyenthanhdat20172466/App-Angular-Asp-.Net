import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaMAnComponent } from './them-sua-m-an.component';

describe('ThemSuaMAnComponent', () => {
  let component: ThemSuaMAnComponent;
  let fixture: ComponentFixture<ThemSuaMAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaMAnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaMAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

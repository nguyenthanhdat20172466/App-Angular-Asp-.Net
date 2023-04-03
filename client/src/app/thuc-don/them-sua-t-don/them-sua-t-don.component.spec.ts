import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaTDonComponent } from './them-sua-t-don.component';

describe('ThemSuaTDonComponent', () => {
  let component: ThemSuaTDonComponent;
  let fixture: ComponentFixture<ThemSuaTDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaTDonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaTDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

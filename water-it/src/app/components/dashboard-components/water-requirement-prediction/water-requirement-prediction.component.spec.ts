import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterRequirementPredictionComponent } from './water-requirement-prediction.component';

describe('WaterRequirementPredictionComponent', () => {
  let component: WaterRequirementPredictionComponent;
  let fixture: ComponentFixture<WaterRequirementPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterRequirementPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterRequirementPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

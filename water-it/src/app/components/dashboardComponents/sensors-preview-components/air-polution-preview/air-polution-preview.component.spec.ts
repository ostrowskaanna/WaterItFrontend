import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPolutionPreviewComponent } from './air-polution-preview.component';

describe('AirPolutionPreviewComponent', () => {
  let component: AirPolutionPreviewComponent;
  let fixture: ComponentFixture<AirPolutionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPolutionPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPolutionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

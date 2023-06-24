import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsListItemComponent } from './fields-list-item.component';

describe('FieldsListItemComponent', () => {
  let component: FieldsListItemComponent;
  let fixture: ComponentFixture<FieldsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

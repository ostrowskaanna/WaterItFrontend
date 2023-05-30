import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Field } from 'src/app/models/field.model';

@Component({
  selector: 'app-fields-list-item',
  templateUrl: './fields-list-item.component.html',
  styleUrls: ['./fields-list-item.component.css']
})
export class FieldsListItemComponent implements OnInit {

  @Input() data: Field | undefined;
  @Input() selectedFieldId: number | undefined;
  @Output() selectField = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  isChecked(): boolean {
    return this.data?.id == this.selectedFieldId;
  }

  onCheckboxChange(): void {
    this.selectField.emit(this.data?.id);
  }

}

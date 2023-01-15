import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.scss']
})
export class TwoWayBindComponent {
  @Input() name: string = "";
  @Output() nameChange = new EventEmitter<string>();

  public changeName() {
    this.nameChange.emit(this.name);
  }
}

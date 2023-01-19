import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-example',
  templateUrl: './output-example.component.html',
  styleUrls: ['./output-example.component.scss']
})
export class OutputExampleComponent {
  @Output() eventakos = new EventEmitter<string>()

  public sendNewEvent() {
    this.eventakos.emit("Why men throw their lives away attacking an armed witcher... I'll never know. Something about my face?");
  }
}

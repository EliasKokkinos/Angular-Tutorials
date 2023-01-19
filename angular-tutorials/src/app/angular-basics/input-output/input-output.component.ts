import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
  providers: [MessageService]
})
export class InputOutputComponent {
  public imageName: string = 'yen00';
  public showAdvancedExamples: boolean = false;

  constructor(private messageService: MessageService) {}

  public showExamples() {
    this.showAdvancedExamples = !this.showAdvancedExamples;
  }

  public showNewEvent(event: string) {
    this.messageService.add({severity:'success', summary:'Event from Child', detail: event});

  }
}

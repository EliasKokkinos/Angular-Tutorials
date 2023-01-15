import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-switcher',
  templateUrl: './image-switcher.component.html',
  styleUrls: ['./image-switcher.component.scss']
})
export class ImageSwitcherComponent {
  @Input() imageBaseName: string = 'yen0';
  public imageIndex: number = 0;
  
  public get imagename(): string {
    return `${this.imageBaseName}${this.imageIndex}.jpg`;
  } 

  
  ngOnInit() {
  }

  public changeIndex() {
    this.imageIndex = (this.imageIndex + 1) % 6;
  }
}

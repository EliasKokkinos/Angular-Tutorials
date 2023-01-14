import { Component } from '@angular/core';

@Component({
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  public variableAlpha: string = '';
  public variableBeta: boolean = false;
  public imageUrl: string = 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg';


  public onKeydown(e: any) {
    console.log(e);
  }
}

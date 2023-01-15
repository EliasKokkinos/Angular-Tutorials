import { Component } from '@angular/core';

@Component({
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  public variableAlpha: string = '';
  public nameTwoWay: string = '';
  public variableBeta: boolean = false;
  public disableVar: boolean = false;
  public imageUrl: string = 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg';
  
  public selectedCharacter: string = 'yen0';
  public characters: Character[]  = [
    {name: 'Yennefer', value: 'yen0'},
    {name: 'Ciri', value: 'ciri0'},
  ];

  public onKeydown(e: any) {
    console.log(e);
  }
  
}

interface Character {
  name: string,
  value: string
}
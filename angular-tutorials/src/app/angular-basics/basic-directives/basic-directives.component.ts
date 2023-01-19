import { Component } from '@angular/core';
import { Character } from 'src/app/core/models/character';

@Component({
  templateUrl: './basic-directives.component.html',
  styleUrls: ['./basic-directives.component.scss']
})
export class BasicDirectivesComponent {
  public classesDropdown: string[]  = [
    'bg-white', 'bg-success'
  ];
  public selectedClass: string = 'bg-white';
  public stylesDropdown: string[]  = [
     'black', 'red',
  ];
  public selectedStyle: string = 'black';
  public index: number = 1;
  public toggleNgIf: boolean = true;
  public toggleNgIfElse: boolean = true;
  public characters: Character[]  = [
    {name: 'Geralt', value: 'ger0'},
    {name: 'Yennefer', value: 'yen0'},
    {name: 'Ciri', value: 'ciri0'},
  ];

  public sampleModel: string = `Geralt of Rivia was a legendary witcher of the School of the Wolf active
  throughout the 13th century. He loved the sorceress Yennefer, considered the love of his life despite their
  tumultuous relationship, and became Ciri's adoptive father.`;
}

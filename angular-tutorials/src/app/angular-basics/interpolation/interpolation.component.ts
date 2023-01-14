import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public theWitcher: string = 'The Witcher is a series of fantasy action role-playing games developed by CD Projekt Red and published by CD Projekt. It is based on the book series of the same name by Polish writer Andrzej Sapkowski, acting as non-canonical sequels to the story of the books.'
  public characters: string[] = [];
  public infoGeralt: { name: string, occupation: string, age: number | null } = {
    name: 'Geralt of Rivia',
    occupation: 'Witcher, General Badass',
    age: null,
  };
  private index: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      console.log(this.index % 6);

      switch (this.index % 6) {
        case 0:
          this.characters = [];
          // this.infoGeralt = {
          //   name: 'Geralt of Rivia',
          //   occupation: 'Witcher, General Badass',
          //   age: null,            
          // };
          break;
        case 1:
          this.characters.push('Geralt');
          break;
        case 2:
          this.characters.push('Yennefer');
          break;
        case 3:
          this.characters.push('Ciri');
          break;
        case 4:
          this.characters.push('Roach');
          // this.infoGeralt = {
          //   name: 'Geralt of Rivia',
          //   occupation: 'Witcher, General Badass',
          //   age: 60,            
          // };
          break;
        case 5:
          this.characters.push('Triss');
          //this.infoGeralt.age = 70;
          break;
        default:
          this.characters = [];
      }
      this.index++;
    }, 1500);
  }

}

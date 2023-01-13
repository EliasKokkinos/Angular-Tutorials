import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-tutorials';
  public items: MenuItem[] = [];
  public itemsLeft: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Basics',
        routerLink: '/angular-basics'
      },
      {
        label: 'Interpolation',
        routerLink: '/angular-basics/interpolation'
      }
    ];


    this.itemsLeft = [{
      label: 'Basics',
      items: [{
        label: 'Interpolation',
        icon: 'pi pi-refresh',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        routerLink: '/'
      }
      ]
    },
    {
      label: 'Intermediate',
      items: [{
        label: 'Angular',
        icon: 'pi pi-external-link',
        routerLink: '/'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/'
      }
      ]
    },
    {
      label: 'Advanced',
      items: [{
        label: 'Angular',
        icon: 'pi pi-external-link',
        routerLink: '/'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/'
      }
      ]
    }
    ];
  }


}

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
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Property Binding',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/property-binding'
      },
      {
        label: 'Basic Directives',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/basic-directives'
      },
      {
        label: 'Events, Input, Output',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/input-output'
      },
      {
        label: 'Services',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/services'
      },
      {
        label: 'Dependency Injection',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Reactive Forms',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Pipes',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'HTTP Requests',
        routerLink: '/angular-basics/interpolation'
      },
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

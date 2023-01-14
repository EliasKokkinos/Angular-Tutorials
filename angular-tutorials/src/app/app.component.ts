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
        routerLink: '/'
      },
      {
        label: 'Two-way Binding',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Attribute Directives',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Structural Directives',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Input, Output',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
      },
      {
        label: 'Services',
        icon: 'pi pi-angle-right',
        routerLink: '/angular-basics/interpolation'
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

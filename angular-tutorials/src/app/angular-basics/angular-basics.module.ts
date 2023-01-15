import { PanelModule } from 'primeng/panel';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { AngularBasicsComponent } from './angular-basics.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ImageSwitcherComponent } from './components/image-switcher/image-switcher.component';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';


@NgModule({
  declarations: [
    AngularBasicsComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ImageSwitcherComponent,
    TwoWayBindComponent,
  ],
  imports: [
    FormsModule,
    ButtonModule,
    CommonModule,
    AngularBasicsRoutingModule,
    PanelModule,
    TabViewModule,
    DropdownModule,
    InputTextModule,
  ],
  providers: [
    { provide: JsonPipe }
  ],
})
export class AngularBasicsModule { }

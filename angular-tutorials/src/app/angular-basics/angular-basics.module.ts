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
import { BasicDirectivesComponent } from './basic-directives/basic-directives.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { OutputExampleComponent } from './components/output-example/output-example.component';
import {ToastModule} from 'primeng/toast';
import { ServicesPageComponent } from './services-page/services-page.component';


@NgModule({
  declarations: [
    AngularBasicsComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ImageSwitcherComponent,
    TwoWayBindComponent,
    BasicDirectivesComponent,
    InputOutputComponent,
    InputExampleComponent,
    OutputExampleComponent,
    ServicesPageComponent,
  ],
  imports: [
    FormsModule,
    ButtonModule,
    CommonModule,
    AngularBasicsRoutingModule,
    PanelModule,
    TabViewModule,
    DropdownModule,
    ToastModule,
    InputTextModule,
  ],
  providers: [
    { provide: JsonPipe }
  ],
})
export class AngularBasicsModule { }

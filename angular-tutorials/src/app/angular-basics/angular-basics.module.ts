import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { AngularBasicsComponent } from './angular-basics.component';


@NgModule({
  declarations: [
    AngularBasicsComponent,
    InterpolationComponent,
  ],
  imports: [
    CommonModule,
    AngularBasicsRoutingModule
  ],
  providers: [
    { provide: JsonPipe }
  ],
})
export class AngularBasicsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { AngularBasicsComponent } from './angular-basics.component';


@NgModule({
  declarations: [
    AngularBasicsComponent
  ],
  imports: [
    CommonModule,
    AngularBasicsRoutingModule
  ]
})
export class AngularBasicsModule { }

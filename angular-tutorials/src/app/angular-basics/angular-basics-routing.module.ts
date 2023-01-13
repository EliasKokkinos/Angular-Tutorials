import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  { path: '', component: AngularBasicsComponent },
  { path: 'interpolation', component: InterpolationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBasicsRoutingModule { }

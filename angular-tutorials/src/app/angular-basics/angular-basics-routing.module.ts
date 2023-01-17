import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BasicDirectivesComponent } from './basic-directives/basic-directives.component';

const routes: Routes = [
  { path: '', component: AngularBasicsComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'basic-directives', component: BasicDirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBasicsRoutingModule { }

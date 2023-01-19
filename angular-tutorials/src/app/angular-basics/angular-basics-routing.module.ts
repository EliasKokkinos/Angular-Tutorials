import { InputOutputComponent } from './input-output/input-output.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BasicDirectivesComponent } from './basic-directives/basic-directives.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: '', component: AngularBasicsComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'basic-directives', component: BasicDirectivesComponent },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'services', component: ServicesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBasicsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent2Component } from './acomponent2/acomponent2.component';
import { AComponent1Component } from './acomponent1/acomponent1.component';
import { AComponent3Component } from './acomponent3/acomponent3.component';
import { Acomponent0Component } from './acomponent0/acomponent0.component';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';


const route: Routes = [
  {path: '', component: Acomponent0Component, children:[
    {path: 'aboutComponent1', component: AComponent1Component},  
  {path: 'aboutComponent2', component: AComponent2Component},
  {path: 'aboutComponent3', component: AComponent3Component}
  ]}
];

@NgModule({
  declarations: [AComponent2Component, AComponent1Component, AComponent3Component, Acomponent0Component],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AboutModuleModule { 
  constructor() {
    console.log("About Module loaded");
  }
}

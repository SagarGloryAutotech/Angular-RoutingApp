import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HComponent1Component } from './hcomponent1/hcomponent1.component';
import { HComponent2Component } from './hcomponent2/hcomponent2.component';
import { HComponent3Component } from './hcomponent3/hcomponent3.component';
import { RouterModule, Routes } from '@angular/router';
import { HComponent0Component } from './hcomponent0/hcomponent0.component';

const route: Routes = [
  {path:'', component: HComponent0Component, children:[
    {path: '', redirectTo:'homeComponent1', pathMatch:'full'},
    {path: 'homeComponent1', component: HComponent1Component},
    {path: 'homeComponent2', component: HComponent2Component},
    {path: 'homeComponent3', component: HComponent3Component} 
  ]}
  
];

@NgModule({
  declarations: [HComponent1Component, HComponent2Component, HComponent3Component, HComponent0Component],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [
    HComponent1Component,
    HComponent2Component,
    HComponent3Component
  ]
})
export class HomeM1Module {
  constructor() {
    console.log("Home Module loaded");
  }
 }

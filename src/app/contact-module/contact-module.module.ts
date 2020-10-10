import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact1Component } from './contact1/contact1.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {path: '', component: Contact1Component}
];

@NgModule({
  declarations: [Contact1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ContactModuleModule { 
  constructor() {
    console.log("Contact Module loaded");
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeM1Module } from './home-m1/home-m1.module';
import { AboutModuleModule } from './about-module/about-module.module';
import { ContactModuleModule } from './contact-module/contact-module.module';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'about', loadChildren:'./about-module/about-module.module#AboutModuleModule'},
  {path: 'contact', loadChildren:'./contact-module/contact-module.module#ContactModuleModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeM1Module
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

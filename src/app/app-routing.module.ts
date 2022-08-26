import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutContactComponent } from './about-contact/about-contact.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'About-contact', component: AboutContactComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

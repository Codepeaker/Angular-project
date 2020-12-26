import { UserdataComponent } from './userdata/userdata.component';
import { CarousalComponent } from './carousal/carousal.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"carousal",
    component:CarousalComponent
  },
  {
    path:"userdata",
    component:UserdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

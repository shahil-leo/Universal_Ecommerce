import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

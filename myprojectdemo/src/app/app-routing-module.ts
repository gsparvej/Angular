import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllManagement } from './view-all-management/view-all-management';
import { App } from './app';
import { Home } from './home/home';

const routes: Routes = [
  {path:'viewManagement', component: ViewAllManagement},
  {path:'', component: Home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

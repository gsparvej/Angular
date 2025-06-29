import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllManagement } from './view-all-management/view-all-management';
import { App } from './app';
import { Home } from './home/home';
import { AddManagement } from './add-management/add-management';

const routes: Routes = [
  {path:'viewManagement', component: ViewAllManagement},
  {path:'', component: Home},
  {path:'addManagement', component: AddManagement}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllManagement } from './view-all-management/view-all-management';
import { App } from './app';
import { Home } from './home/home';
import { AddManagement } from './add-management/add-management';
import { UpdateManagement } from './update-management/update-management';
import { ViewAllEmployee } from './view-all-employee/view-all-employee';
import { AddEmployee } from './add-employee/add-employee';

const routes: Routes = [
  {path:'viewManagement', component: ViewAllManagement},
  {path:'', component: Home},
  {path:'addManagement', component: AddManagement},
  {path: 'updateManagement/:id', component: UpdateManagement},
  {path: 'viewEmp', component: ViewAllEmployee},
  {path: 'addEmp', component: AddEmployee}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

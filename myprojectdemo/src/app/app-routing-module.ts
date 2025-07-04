import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllManagement } from './view-all-management/view-all-management';
import { App } from './app';
import { Home } from './home/home';
import { AddEmployee } from './add-employee/add-employee';
import { AddManagement } from './add-management/add-management';
import { UpdateManagement } from './update-management/update-management';
import { ViewAllEmployee } from './view-all-employee/view-all-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { ViewAllLocation } from './view-all-location/view-all-location';
import { AddLocation } from './add-location/add-location';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { Logout } from './auth/logout/logout';

const routes: Routes = [
  {path:'viewManagement', component: ViewAllManagement},
  {path:'', component: Home},
  {path:'addManagement', component: AddManagement},
  {path: 'updateManagement/:id', component: UpdateManagement },
  {path: 'viewEmp', component: ViewAllEmployee},
  {path: 'addEmp', component: AddEmployee},
  {path: 'updateEmployee/:id', component: UpdateEmployee},
  {path: 'viewLocation',component: ViewAllLocation},
  {path: 'addLocation', component: AddLocation},
  {path: 'reg', component: Registration},
  {path: 'login', component: Login},
  {path: 'logout', component: Logout}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

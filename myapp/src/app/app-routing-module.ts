import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Nav } from './nav/nav';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'nav' , component: Nav}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

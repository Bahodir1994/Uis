import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";


// mapping (связывание) адреса и компонента, куда запрос будет перенаправлен
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

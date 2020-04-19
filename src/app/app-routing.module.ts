import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  { path:'', component:NewComponent},
  { path:'forget', component:ForgotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

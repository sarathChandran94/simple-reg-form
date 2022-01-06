import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from "./main-body/main-body.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
const routes: Routes = [
    {
        path: "",
        component: RegisterComponent
    },
    {
        path: "dash",
        component: MainBodyComponent
    },
    {
        path: "login",
        component: LoginComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

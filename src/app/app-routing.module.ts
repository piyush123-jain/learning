import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaScriptComponent } from './JavaScript/JavaScript.component';
import { HomeComponent } from './home/home.component';

// { path: '', component: FirstComponent },
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
  path:"javascript",
  component:JavaScriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

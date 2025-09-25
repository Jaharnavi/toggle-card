import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Themes } from './Components/themes/themes';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'themes', 
    pathMatch: 'full'
   },
  {
    path: 'themes',
    component: Themes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

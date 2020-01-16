import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'error', loadChildren: () => import('./shared/components/not-found-page/errorpage.module').then(m => m.ErrorPageModule) },

  { path: 'dashboard', loadChildren: () => import('./pages/Dashboard/dashboard.module').then(m => m.DashBoardModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

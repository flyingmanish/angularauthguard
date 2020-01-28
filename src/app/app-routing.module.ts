import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './pages/auth/auth.module';
import { AuthGuard } from './service/authguard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import("./pages/auth/auth.module").then(m => AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => AuthModule),
    canActivate:[AuthGuard]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

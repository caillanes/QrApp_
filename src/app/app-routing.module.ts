import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './servicios/auth.guard';
import { GuardDocenteGuard } from './servicios-dos/guard-docente.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'qr-scanner',
    loadChildren: () => import('./qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'qr-generator',
    loadChildren: () => import('./qr-generator/qr-generator.module').then( m => m.QrGeneratorPageModule),
    canActivate: [GuardDocenteGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-docente',
    loadChildren: () => import('./login-docente/login-docente.module').then( m => m.LoginDocentePageModule)
  },
  {
    path: 'camb-contr',
    loadChildren: () => import('./camb-contr/camb-contr.module').then( m => m.CambContrPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [GuardDocenteGuard, AuthGuard]
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

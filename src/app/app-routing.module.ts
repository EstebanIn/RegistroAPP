import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'base',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./pages/base/base.module').then( m => m.BasePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'qrreader',
    loadChildren: () => import('./pages/qrreader/qrreader.module').then( m => m.QrreaderPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pages/pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },
  {
    path: 'respuesta-correcta',
    loadChildren: () => import('./pages/respuesta-correcta/respuesta-correcta.module').then( m => m.RespuestaCorrectaPageModule)
  },
  {
    path: 'respuesta-incorrecta',
    loadChildren: () => import('./pages/respuesta-incorrecta/respuesta-incorrecta.module').then( m => m.RespuestaIncorrectaPageModule)
  },
  {
    path: 'api-service',
    loadChildren: () => import('./pages/api-service/api-service.module').then( m => m.ApiServicePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

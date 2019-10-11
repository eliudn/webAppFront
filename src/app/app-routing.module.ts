import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {config} from 'rxjs';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {TemplateComponent} from './thema/template/template.component';


const routes: Routes = [
  {
    path                :  'auth',
    loadChildren  :  './auth/auth.module#AuthModule'
  },
  {
    path               :  'pages',
    component   :  TemplateComponent,
    children: [
      {
        path                :  'biblioteca',
        loadChildren  :  './page/biblioteca/biblioteca.module#BibliotecaModule'
      },
      {
        path                :  'academico',
        loadChildren  :  './page/academico/academico.module#AcademicoModule'
      },
      {
        path              : 'administrativo',
        loadChildren : './page/administrativo/administrativo.module#AdministrativoModule'
      }

    ]
  },
  {
    path             :  '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

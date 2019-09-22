import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutoresComponent} from './autores/autores.component';
import {EditorialComponent} from './editorial/editorial.component';
import {TipoComponent} from './tipo/tipo.component';
import {AreasComponent} from './areas/areas.component';
import {LibrosComponent} from './libros/libros.component';
import {ExistenciasComponent} from './existencias/existencias.component';


const routes: Routes = [
  {
    path: 'editorial',
    component: EditorialComponent
  },
  {
    path: 'autores',
    component: AutoresComponent
  },
  {
    path: 'tipo',
    component: TipoComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'libros',
    component: LibrosComponent
  },
  {
    path: 'existencias',
    component: ExistenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }

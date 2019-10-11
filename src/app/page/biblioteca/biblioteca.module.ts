import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';
import { LibrosComponent } from './libros/libros.component';
import { ExistenciasComponent } from './existencias/existencias.component';
import { CrudEditorialComponent } from './editorial/components/crud-editorial/crud-editorial.component';
import { ListarComponentComponent } from './editorial/components/listar-component/listar-component.component';
import { ListComponentComponent } from './areas/component/list-component/list-component.component';
import { CrudComponentComponent } from './areas/component/crud-component/crud-component.component';


@NgModule({
  declarations: [
    EditorialComponent,
    AutoresComponent,
    TipoComponent,
    AreasComponent,
    LibrosComponent,
    ExistenciasComponent,
    CrudEditorialComponent,
    ListarComponentComponent,
    ListComponentComponent,
    CrudComponentComponent
   ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }

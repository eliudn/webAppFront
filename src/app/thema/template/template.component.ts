import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public menu = [];
  constructor() { }

  ngOnInit() {
    this.menu = this.getMenu();
  }
  getMenu() {
    return[
      {
        description: 'dashboard',
        link: '/pages/dashboard',
        child: false,
        childrens: []
      },
      {
        description: 'Biblioteca',
        link: '',
        child: true,
        childrens: [
          {
            description: 'Areas',
            link: '/pages/biblioteca/areas'
          },
          {
            description: 'Autores',
            link: '/pages/biblioteca/autores'
          },
          {
            description: 'Editorial',
            link: '/pages/biblioteca/editorial'
          },
          {
            description: 'Tipo',
            link: '/pages/biblioteca/tipo'
          },
          {
            description: 'Libre',
            link: '/pages/biblioteca/libros'
          }
        ]
      },
      {
        description: 'Academico',
        link: '',
        child: true,
        childrens: [
          {
            description: 'Docentes',
            link: '/pages/academico/docentes'
          },
          {
            description: 'Estudiantes',
            link: '/pages/academico/estudiantes'
          },
          {
            description: 'Materias',
            link: '/pages/academico/materias'
          },
          {
            description: 'Grado',
            link: '/pages/academico/grados'
          },
          {
            description: 'Aulas',
            link: '/pages/academico/Aulas'
          }

        ],
      },
      {
        description: 'Administrativo',
        link: '',
        child:  true,
        childrens: [
          {
            description: 'Modulos',
            link: '/pages/administrativo/modulo'
          },
          {
            description: 'Roles',
            link: '/pages/administrativo/roles'
          },
          {
            description: 'Usuarios',
            link: '/pages/administrativo/usuarios'
          }

        ]
      }

    ];
  }

}

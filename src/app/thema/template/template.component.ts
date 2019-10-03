import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
 
  public menu = [];

  constructor() { }

  ngOnInit() {}

  getMenu() {
    return[
      {
        description: 'dashboard',
        link: '/pages/dashboard',
        icon: 'fas fa-fw fa-tachometer-alt',
        child: false,
        childrens: []
      },
      {
        description: 'Biblioteca',
        link: '',
        icon: '',
        child: true,
        childrens: [
          {
            description: 'Areas',
            icon: '',
            link: '/pages/biblioteca/areas'
          },
          {
            description: 'Autores',
            icon: '',
            link: '/pages/biblioteca/autores'
          },
          {
            description: 'Editorial',
            icon: '',
            link: '/pages/biblioteca/editorial'
          },
          {
            description: 'Tipo',
            icon: '',
            link: '/pages/biblioteca/tipo'
          },
          {
            description: 'Libre',
            icon: '',
            link: '/pages/biblioteca/libros'
          }
        ]
      },
      {
        description: 'Academico',
        link: '',
        icon: '',
        child: true,
        childrens: [
          {
            description: 'Docentes',
            icon: '',
            link: '/pages/academico/docentes'
          },
          {
            description: 'Estudiantes',
            icon: '',
            link: '/pages/academico/estudiantes'
          },
          {
            description: 'Materias',
            icon: '',
            link: '/pages/academico/materias'
          },
          {
            description: 'Grado',
            icon: '',
            link: '/pages/academico/grados'
          },
          {
            description: 'Aulas',
            icon: '',
            link: '/pages/academico/Aulas'
          }

        ],
      },
      {
        description: 'Administrativo',
        link: '',
        icon: '',
        child:  true,
        childrens: [
          {
            description: 'Modulos',
            icon: '',
            link: '/pages/administrativo/modulo'
          },
          {
            description: 'Roles',
            icon: '',
            link: '/pages/administrativo/roles'
          },
          {
            description: 'Usuarios',
            icon: '',
            link: '/pages/administrativo/usuarios'
          }

        ]
      }

    ];
  }



}

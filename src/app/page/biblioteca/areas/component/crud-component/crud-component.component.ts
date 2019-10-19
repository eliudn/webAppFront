import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-component',
  templateUrl: './crud-component.component.html',
  styleUrls: ['./crud-component.component.css']
})
export class CrudComponentComponent implements OnInit {

  public codigo: string;
  public descrition: string;

  constructor() { }

  ngOnInit() {
  }

  // metodo de cattura de datos 
  saveForm() {

    alert('la informacion salvada es: '+ this.descrition);

  }

  showLength( data, maxx) {

    if (data.length >= maxx){

      alert( 'solo puedes escribir menos'+ maxx);

    }
    
  }

}

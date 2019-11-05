import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  //Atributos de la caja de texto
  nombre ="";
  pass ="";
  cliente:cliente;
  //Esto despues hay que ir a buscar en la BD
  nombreHarcodeado="imonllor";
  passHarcodeado ="1234";

  ngOnInit() {
  }

  sonIguales :Boolean;
  
  

  manejadora() {
      
       /*
      //console.log(this.nombre + "\n" + this.apellido);
      if( this.nombreHarcodeado == this.nombre && this.passHarcodeado == this.pass) {
        //this.router.navigate(['/heroes']); 
        this.router.navigate(['/menu']);
      }
      else{
        alert("nombre o contraseña errado");
      }
      */
      this.cliente = new cliente("imonllor", "12345");
      console.log(this.cliente);

  }

  
  
}

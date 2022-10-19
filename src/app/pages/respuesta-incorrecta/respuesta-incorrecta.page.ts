import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home
import { ActivatedRoute, NavigationExtras, Router  } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-respuesta-incorrecta',
  templateUrl: './respuesta-incorrecta.page.html',
  styleUrls: ['./respuesta-incorrecta.page.scss'],
})
export class RespuestaIncorrectaPage implements OnInit {

  public usuario: Usuario;

  img:string;

  constructor(
      private activeroute: ActivatedRoute
    , private router: Router) { 
  
  this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
    if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras
      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;    
    } else {
      this.router.navigate(['/login']);
    } 
  });
}

  ngOnInit() {

  }

  public volverAlInicio(): void{
    this.router.navigate(['/base'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})

export class ListarPersonaComponent implements OnInit {

  personas:Persona[];
  displayedColumns:string[] = ['IDPERSONA','NOMBRE','APELLIDOS','DNI','FEC_NACIMIENTO','CELULAR','CORREO','USUARIO','CLAVE','IDESTADO_CIVIL'];
  constructor(private PersonaService: PersonaService) { }

  ngOnInit(): void {
    this.PersonaService.getPersonas().subscribe(
      (data)=>{
        this.personas = data['CUR_PERSONA'];
        alert(this.personas);
      }
    )
  }
}

import { Component, OnInit } from "@angular/core";
import { Formulario } from "../formulario";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  formularioModel = new Formulario(0, 0, 0, 0, 0, 0,);

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  formularioEnviado() {
    this.httpClient.post('http://localhost:8081/wsTest11/rest/enviarDatos', Formulario).subscribe(data => console.log(JSON.stringify(data),),);

    console.log("El formulario fue enviado y los datos son : ", this.formularioModel)
    alert("Enviado");
  }
  formularioRemovido() {
    this.httpClient.get<Formulario>('http://localhost:8081/wsTest11/rest/datosPlataforma');
    console.log("El formulario fue removiod y los datos son : ", this.formularioModel)
    alert("Removido");
  }

}

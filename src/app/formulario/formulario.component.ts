import { Component, OnInit } from "@angular/core";
import { Formulario } from "../formulario";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  formularioModel = new Formulario(0, "", 0,);

  constructor() { }

  ngOnInit() { }

  formularioEnviado() {
    
    console.log("El formulario fue enviado y los datos son : ", this.formularioModel)
    alert("Enviado");
  }
}

import { Component, OnInit } from "@angular/core";
import { Formulario } from "../formulario";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  formularioModel = new Formulario(0, 0, 0, 0, 0, 0, '');
  response:any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  formularioEnviado() {


    let jsonObj = {
      "idPlatformOrigin": this.formularioModel.idPlatformOrigin,
      "idCoin": this.formularioModel.idCoin,
      "idPlatformDestiny": this.formularioModel.idPlatformDestiny,
      "idProduct": this.formularioModel.idProduct,
      "mount": this.formularioModel.mount,
      "quantity": this.formularioModel.quantity,
      "servidor": null,
    };

    this.httpClient.post('http://172.17.0.2/final2/rest/enviarDatos', jsonObj).subscribe(data => console.log(JSON.stringify(data),),);

    console.log("El formulario fue enviado y los datos son : ", this.formularioModel)
    alert("Enviado");
  }
  formularioRemovido() {

    this.httpClient.get<Formulario>('http://172.17.0.2/final2/rest/datosPlataforma')
    .subscribe({ next: data => this.response = data.servidor });
    console.log("El formulario fue removido y los datos son : ", this.formularioModel)
    alert("Removido " + this.response);
  }
}
